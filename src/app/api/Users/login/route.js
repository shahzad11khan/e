import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import User from "@/app/models/UserModel";
import { NextResponse } from "next/server";

// export async function POST(Request) {
//   try {
//     const { email, password } = await Request.json();
//     console.log(email, password);
//     // Validate the JSON structure or required fields here if needed

//     // Find user by email
//     const user = await User.findOne({ email });

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

export async function POST(Request) {
  try {
    await connect();

    const data = await Request.json();
    const { email, password } = data;

    // Validate input
    if (!email || !password) {
      return NextResponse.json({
        error: "Email and password are required",
        status: 400,
      });
    }

    // Find user and check password
    const user = await User.findOne({ email }).exec(); // Ensure .exec() is used
    if (!user) {
      return NextResponse.json({ error: "User not found", status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ error: "Invalid credentials", status: 401 });
    }

    return NextResponse.json({
      message: "Login successful",
      success: true,
      status: 200,
    });
  } catch (error) {
    console.error("Error in login API:", error);
    return NextResponse.json({ error: "Internal server error", status: 500 });
  }
}
