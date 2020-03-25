//This code will display my name, registered courses and odd numbers from 1-200(inclusive).
let name = 'Abere Oghenefejiro';
var courses = ['HTML', 'CSS', 'JavaScript', 'UI/UX Design', 'Java'];

//My name and courses will be displayed
console.log("My name is: "+ name);
console.log(courses);

//This loop will check if i is divisible by 2.
//If it is not, the number will be displayed.
for(i=0; i<=200; i++){
  if(i%2 == 1){
    console.log(i)
  }
}