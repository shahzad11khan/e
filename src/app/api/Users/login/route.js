// import jwt from "jsonwebtoken";
// import bcryptjs from "bcryptjs";
// import User from "@/app/models/UserModel";
// import { NextResponse } from "next/server";

// export async function POST(Request) {
//   try {
//     const { email, password } = await Request.json();
//     console.log(email, password);
//     // Validate the JSON structure or required fields here if needed

//     // Find user by email
//     const user = await User.findOne({ email }).exec();

//     // Check if user exists
//     if (!user) {
//       return NextResponse.json({
//         error: "Invalid credentials",
//         status: 401,
//       });
//     }
//     console.log("User Exits");

//     // Validate password
//     const isPasswordValid = await bcryptjs.compare(password, user.password);

//     if (!isPasswordValid) {
//       return NextResponse.json({
//         error: "Invalid credentials",
//         status: 401,
//       });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { userId: user._id, username: user.username, email: user.email },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1y", // Token expires in 1 hour
//       }
//     );

//     const response = NextResponse.json({
//       token,
//       userId: user._id,
//       username: user.username,
//       email: user.email,
//       isVerfied: user.isVerfied,
//       message: "Login successful",
//       status: 200,
//     });
//     response.cookies.set("token", token, {
//       httpOnly: true,
//     });
//     return response;
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: "Internal server error", status: 500 });
//   }
// }

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "@/app/models/UserModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    console.log("Received email and password:", email, password);

    // Check if all required fields are present
    if (!email || !password) {
      return NextResponse.json({
        error: "Email and password are required",
        status: 400,
      });
    }

    // Find user by email
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials", status: 401 });
    }
    console.log("User exists");

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid credentials", status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1y" }
    );

    // Create response
    const response = NextResponse.json({
      token,
      userId: user._id,
      username: user.username,
      email: user.email,
      isVerified: user.isVerified, // Fixed typo: isVerfied to isVerified
      message: "Login successful",
      status: 200,
    });

    // Set cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production
      sameSite: "Strict", // Adjust based on your needs
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
