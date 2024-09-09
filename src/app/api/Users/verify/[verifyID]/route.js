const { connect } = require("@/app/config/db");
const User = require("@/app/models/UserModel").default;
const { NextResponse } = require("next/server");

// update vefiy user

export async function PUT(request, context) {
  try {
    await connect();
    const id = context.params.verifyID;

    const { isVerified } = await request.json();

    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.isVerified = isVerified;
    await user.save();

    return NextResponse.json({
      message: "User verification status updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error Updating User:", error);
    return NextResponse.json(
      { error: "Failed to update user verification status" },
      { status: 500 }
    );
  }
}
