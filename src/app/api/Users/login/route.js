import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "@/app/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse incoming request body
    const { email, password } = await request.json();

    // Validate if email and password are provided
    if (!email || !password) {
      return NextResponse.json({
        error: "Email and password are required",
        status: 400,
      });
    }

    // Find user by email
    const user = await User.findOne({ email }).exec();

    // Check if user exists
    if (!user) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 401,
      });
    }

    // Validate password
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        error: "Invalid credentials",
        status: 401,
      });
    }

    // Check if the user is verified
    if (!user.isVerfied) {
      return NextResponse.json({
        error: "User is not verified",
        status: 403, // Forbidden status for unverified users
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    const response = NextResponse.json({
      token,
      userId: user._id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerfied,
      message: "Login successful",
      status: 200,
    });

    // Set token as an HTTP-only cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set secure only in production
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({
      error: "Internal server error",
      status: 500,
    });
  }
}
