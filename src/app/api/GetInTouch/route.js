const { connect } = require("@/app/config/db");
const { default: GetInTouch } = require("@/app/models/GetInTouchModel");
const { NextResponse } = require("next/server");

// post GetInTouch
export async function POST(Request) {
  const givingdata = await Request.json();
  // console.log({ givingdata });
  const { username, email, phone, message } = givingdata;
  // console.log(username, email, phone, message );

  try {
    await connect();
    const Post_GetInTouch = new GetInTouch({
      username: username,
      email: email,
      phone: phone,
      message: message,
    });

    // console.log(Post_Message);
    const Save_GetInTouch = await Post_GetInTouch.save();
    if (!Save_GetInTouch) {
      return NextResponse.json({ message: "Message Not added" });
    } else {
      return NextResponse.json({ result: Save_GetInTouch, status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}

// Get all GetInTouch
export async function GET() {
  try {
    // Connect to the database
    await connect();
    try {
      const All_Messages = await GetInTouch.find();
      const userCount = await GetInTouch.countDocuments();

      if (!All_Messages || All_Messages.length === 0) {
        return NextResponse.json({ result: All_Messages });
      } else {
        return NextResponse.json({ result: All_Messages, count: userCount });
      }
    } catch (error) {
      console.error(error);
    }
    return;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // Handle error, maybe return an error response
    return NextResponse.error(new Error("Failed to connect to the database."));
  }
}
