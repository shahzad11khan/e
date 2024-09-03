const { connect } = require("@/app/config/db");
const { NextResponse } = require("next/server");
const Vacancy = require("@/app/models/VacancyModel").default;
// post Vacancy
export async function POST(Request) {
  const givingdata = await Request.json();
  const { VacancyTitle, Requireds, Experience } = givingdata;
  console.log(VacancyTitle, Requireds, Experience);

  try {
    await connect();
    const Post_Vacancy = new Vacancy({
      VacancyTitle: VacancyTitle,
      Requireds: Requireds,
      Experience: Experience,
    });

    console.log(Post_Vacancy);
    const Save_Vacancy = await Post_Vacancy.save();
    if (!Save_Vacancy) {
      return NextResponse.json({ message: "Vacancy Not added" });
    } else {
      return NextResponse.json({ result: Save_Vacancy, status: 200 });
    }
  } catch (error) {
    console.error(error);
  }
}

// Get All Vacancies
export async function GET() {
  try {
    // Connect to the database
    await connect();
    try {
      const All_Vacancies = await Vacancy.find();
      const userCount = await Vacancy.countDocuments();

      if (!All_Vacancies || All_Vacancies.length === 0) {
        return NextResponse.json({ Result: All_Vacancies });
      } else {
        return NextResponse.json({ Result: All_Vacancies, count: userCount });
      }
    } catch (error) {
      console.error(error);
    }
    return;
    // Database connected, return response
    return NextResponse.json({ result: "Hi Message" });
  } catch (error) {
    console.error("Error connecting to the database:", error);
    // Handle error, maybe return an error response
    return NextResponse.error(new Error("Failed to connect to the database."));
  }
}
