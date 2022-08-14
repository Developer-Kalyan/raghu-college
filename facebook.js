var database=[
{
	username:"Kalyan",
	password:"Kalyan@123"
}];
var newsFeed=[
{
	username:"Kalyan",
	timeline:"Welcome to your Website"},
	
		{
			username:"Asha",
	timeline:"Welcome to your brother Website"

	}

];
var usernameprompt=prompt("What is your username");
var passwordprompt=prompt("what is your password");
function signIn(user,pass){
	if (user===database[0].username &&
		pass===database[0].password){
			console.log(newsFeed);
		}else{
	alert("Check your details");
}
}  
 
signIn(usernameprompt, passwordprompt);
