const { connect } = require("@/app/config/db");
const { NextResponse } = require("next/server");
const Vacancy = require("@/app/models/VacancyModel").default;

// DELETE function to delete a Vacancy
export async function DELETE(reques, content) {
  try {
    // console.log(content.params.VacancyID);
    const id = content.params.vacancyID;
    // Connect to the database
    await connect();

    // Find the project by ID and delete it
    const _deletedVacancy = await Vacancy.findByIdAndDelete(id);

    // Check if the project was found and deleted
    if (!_deletedVacancy) {
      return NextResponse.json({ message: "Vacancy not found" });
    } else {
      return NextResponse.json({
        message: "Vacancy Delete Sucessfully",
        result: _deletedVacancy,
        status: 200,
      });
    }
  } catch (error) {
    console.error("Error deleting Vacancy:", error);
    // Return an error response
    return NextResponse.error(new Error("Failed to delete project"));
  }
}

// Update vacancy
export async function PUT(request, content) {
  const id = content.params.vacancyID;
  console.log(id);
  // const givingdata = await Request.json();
  const givingdata = await request.formData();
  console.log(givingdata);
  const formDataObject = {};
  // Iterate over form data entries
  for (const [key, value] of givingdata.entries()) {
    // Assign each field to the formDataObject
    formDataObject[key] = value;
  }
  const { VacancyTitle, Requireds, Experience } = formDataObject;
  console.log(VacancyTitle, Requireds, Experience);

  try {
    await connect();

    // Find the existing vacancy by its ID
    const existingVacancy = await Vacancy.findById(id);

    if (!existingVacancy) {
      return NextResponse.json({ message: "Vacancy not found", status: 404 });
    }

    // Update the vacancy with the new data
    existingVacancy.VacancyTitle = VacancyTitle || existingVacancy.VacancyTitle;
    existingVacancy.Requireds = Requireds || existingVacancy.Requireds;
    existingVacancy.Experience = Experience || existingVacancy.Experience;

    // Save the updated vacancy
    const updatedVacancy = await existingVacancy.save();

    return NextResponse.json({ result: updatedVacancy, status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred", status: 500 });
  }
}

// get Secific
export async function GET(request, context) {
  try {
    await connect();
    const id = context.params.vacancyID;
    console.log(id);
    const Specific_Vacancy = await Vacancy.findById(id);
    if (!Specific_Vacancy) {
      return NextResponse.json({ result: "No Request Availible" });
    } else {
      return NextResponse.json({ Result: Specific_Vacancy });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ Message: "Internal Server Error " });
  }
}
