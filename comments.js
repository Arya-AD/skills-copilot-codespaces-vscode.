// Create web server
// Add a route for /skillsMember
// Add a new function called skillsMember
// Add the data to the database
// Display the data
// Clear the form
// Now let's see how we can refactor this code to use a reusable function:
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
    postData("/skillsMember", skills, function (data) {
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
// Create a reusable function called postData
function postData(url, data, callback) {
    $.post(url, data, function (data) {
        callback(data);
    });
}
// Now we can reuse the postData function for other routes:
function postData(url, data, callback) {
    $.post(url, data, function (data) {
        callback(data);
    });
}
// postData("/skillsMember", skills, function (data) {
//     console.log(data);
//     // Display the data
//     document.getElementById("skillsMember").innerHTML = data;
//     // Clear the form
//     document.getElementById("memberSkill").value = "";
//     document.getElementById("memberSkillLevel").value = "";
//     document.getElementById("memberSkillDescription").value = "";
//     document.getElementById("memberSkillExperience").value = "";
// });
// postData("/skillsMember", skills, function (data) {
//     console.log(data);
//     // Display the data
//     document.getElementById("skillsMember").innerHTML = data;
//     // Clear the form
//