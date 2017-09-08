// console.log("NOW: ");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';
// setTimeout( function myCallbackFunction(){
//   console.log("LATER: ")
//   console.log(ninja, "LATER"); }, 2000
// );
// console.log("Printing ninja value.");
// console.log(ninja, "NOW");


// function leadBootcamp(language, leader){
//     var outcome = leader(language);
//     console.log(outcome);
// }
// function Mike(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Charlie(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// function Jimmy(language){
//   var languages={
//     'javascript':'successful leader',
//     'PHP':'successful leader',
//     'Python':'successful leader',
//     'Ruby':'successful leader',
//     'iOS':'successful leader',
//     'java_android':'successful leader',
//   }
//   if(languages[language]){
//     return languages[language];
//   }
//   else {
//     return "maybe not yet";
//   }
// }
// leadBootcamp('java_android', Mike);
// leadBootcamp('java_android', Charlie);
// leadBootcamp('java_android', Jimmy);



//simulated really slow DB call.
//simulated really slow DB call.
// function getStuffFromDatabase(callback){
//   var data;
//   var myTimer = setTimeout(function(){
//     if (typeof(callback) == 'function'){
//       data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
//       callback(data);
//     }
//   }, 10000);
//   return data;
// }    
// // ************CHANGES HERE **************
// function requestDataFromDatabase(){
//   var data = getStuffFromDatabase(function myCallback(data){ // ooh shiny callback!.. when is it invoked???
//     console.log(data, "ASynchronous");
//     for (var i = 0; i < data.length; i ++){
//       console.log(data[i].name);
//     }
//   });
//   console.log(data, "Synchronous");
// }
// //***************** END CHANGES **********************
// function catchFly(){
//   console.log('I just caught a fly!');
// }
// requestDataFromDatabase();
// // keep running my program!
// console.log('Hello');
// catchFly();
// //etc.
 

 var button = document.getElementById("someButton")
		button.addEventListener("click", whatToDoOnClick);
		function whatToDoOnClick() {
		  alert("clicked")
		  $.get("https://api.github.com/users/(... user name)", displayName)
		  function displayName(data) {
			console.log(data);
		}

