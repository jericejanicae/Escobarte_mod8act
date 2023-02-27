var fullname = prompt("Please enter your full name:");
	document.getElementById("fname").innerHTML = fullname;
var username = prompt("Please enter your username:");
	document.getElementById("username").innerHTML = username;
if (confirm ("What is your gender? Press OK if you are Male,\nCancel if Female") == true)
	{
		document.getElementById("gender").innerHTML = "M";
		alert("Your profile gender is set to MALE");
	}
	else {
		document.getElementById("gender").innerHTML = "F";
		alert("Your profile gender is set to FEMALE");
	}
var bio = prompt("Please type a brief description of yourself:");
	document.getElementById("desc").innerHTML = bio;
var birthYear = parseInt(prompt('Please enter your Birth Year:'));
	document.getElementById("year").innerHTML = birthYear;
	document.getElementById("age").innerHTML = 2023-birthYear;
if (confirm ("Do you want to use a custom profile picture?") == true)
	{
		var profpic = prompt("Please enter the file name of the picture. (Ex. wow.jpg)");
		document.getElementById("ppic").setAttribute("src", profpic);
		alert("Profile picture has been updated.");
	}
	else {
		alert("No image has been set.");
	}