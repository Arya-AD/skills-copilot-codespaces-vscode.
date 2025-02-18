function skillsMember() {
    // Get the data from the form
    var skill = document.getElementById("memberSkill").value;
    var skillLevel = document.getElementById("memberSkillLevel").value;
    var skillDescription = document.getElementById("memberSkillDescription").value;
    var skillExperience = document.getElementById("memberSkillExperience").value;

    // Get the member ID
    var memberID = document.getElementById("memberID").value;

    var skills = {
        "skill": skill,
        "skillLevel": skillLevel,
        "skillDescription": skillDescription,
        "skillExperience": skillExperience,
        "memberID": memberID
    }

    // Post the data to the server
    $.post("/skillsMember", skills, function (data) {
        console.log(data);
        // Display the data
        document.getElementById("skillsMember").innerHTML = data;
        // Clear the form
        document.getElementById("memberSkill").value = "";
        document.getElementById("memberSkillLevel").value = "";
        document.getElementById("memberSkillDescription").value = "";
        document.getElementById("memberSkillExperience").value = "";
    });
}