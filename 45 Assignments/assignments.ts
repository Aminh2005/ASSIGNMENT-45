//                        45 ASSIGNMENTS


// // ---------------- Question 2 ------------  // //
/*
 let myname :string = "AMIN";
 console.log(`Hello ${myname}, would you like to learn some python today?`);
*/


// // ------------- Question 3--------------------- //
/*
let name1 = "Amin";
 console.log(name1.toLowerCase());
 console.log(name1.toUpperCase());
 console.log(name1.toString());
 */


 // //------------------- Question 4 ------------- // //
/*
 let myQuote : string = 'Albert Einstein once said, “A person who never made a mistake never tried anything new.”'
 console.log(myQuote);
*/


 // // ----------------Question 5 -----------------// //
/*
 let famousPerson = "Albert Einstein";
 let myQuote : string = '"A person who never made a mistake never tried anything new."'
 let message = ` ${famousPerson} once said, ${myQuote} `;
 console.log(message);
*/

 
// // ----------------Question 6 -----------------// //
/*
let myname = " Amin ";
 console.log(myname);
 let name1 = "\tAmin";
 console.log(name1);
 let name2 = "\nAmin";
 console.log(name2);
*/


 // // ----------------Question 7 -----------------// //
/*
 console.log(( 5+ 3));
 console.log((20-12));
 console.log((4*2));
 console.log((32/4));
*/


// // ----------------Question 8 -----------------// //
/*
 console.log((4 + 4));
 console.log((20-12));
 console.log((4*2));
 console.log((16/2));
*/


 // // ----------------Question 9 -----------------// //
 /*
 let favouriteNumber : number = 7;
 let message : string = `My favourite Number is ${favouriteNumber}`;
 console.log(message);
*/


 // // ----------------Question 10 -----------------// //
/*
console.log( "Program Written By: Amin Hayder" )
console.log ( "Current Date : 24-06-24" )
 console.log("THIS PROGRAM WILL ADD NUMBERS!")
 let num1 = 10;
 let num2 = 20;
 console.log(`addition ${num1 + num2}`);
 */


// // ----------------Question 11 -----------------// //
/*
let arr = [ "Asad" , "Malik" , "Fayez" , "Wahib"];
 console.log(arr[0]);
 console.log(arr[1]);
 console.log(arr[2]);
 console.log(arr[3]);
*/


 // // ----------------Question 12 -----------------// //
/*
 let freinds = [ "Asad" , "Malik" , "Fayez" , "Wahib"];
 console.log(`Hello ${freinds[0]} how are you? `);
 console.log(`Hello ${freinds[1]} how are you? `);
 console.log(`Hello ${freinds[2]} how are you? `);
 console.log(`Hello ${freinds[3]} how are you? `);
*/


 // // ----------------Question 13 -----------------// //
/*
  let arr  = [ "car" , "train" , "motorbike" , "helecophter"];
 for(let i = 0; i <= 3; i++){
     console.log(`i Would like to own a ${ arr[i]}`);
 }
*/


// // ----------------Question 14 -----------------// //
/*
 let Freinds = [ "ASAD" , "MALIK" , "FAYEZ" , "WAHIB"];
 for(let a = 0; a<Freinds.length ; a++){
     console.log(`Mr ${Freinds[a]},  I Would like to invite for dinner`);
 }
*/


// // ---------------- Question 15 -----------------// //
/*
 let Freinds = [ "Wahib" , "Malik" , "Fayez" , "Asad"];
 console.log(`${Freinds[0] } is not coming for dinner`);
 console.log(" Sufyan I would like to invite you for Dinner. ");
 let replace = Freinds.splice(0 , 1 , "Sufiyan");
 console.log(replace);
 for(let a = 0 ; a<Freinds.length ; a++ ){
     console.log(Freinds[a]);
 }
*/


// // // ---------------- Question 16 -----------------// //
/*
 let Freinds = [ "Wahib" , "Malik" , "Fayez" , "Asad"];
 console.log(`${Freinds[0] } is not coming for dinner`);
 console.log(" Sufyan I would like to invite you for Dinner ");
 let replace = Freinds.splice(0 , 1 , "Sufiyan");
 console.log(replace);
 for(let a = 0 ; a<Freinds.length ; a++ ){
     console.log(Freinds[a]);
  }
 console.log("I have found a bigger table so I want to invite some more people");
 Freinds.unshift("Ammar");
  Freinds.splice(3 , 0 , "Huaifa");
  Freinds.push("Burhan");
 console.log(Freinds);
*/


 // // ---------------- Question 17 -----------------// //
/*
 let Freinds = [ "Wahib" , "Fayez" , "Malik" , "Asad"];
 console.log(`${Freinds[0] } is not coming for dinner`);
 console.log("Sufyan I would like to invite you for Dinner ");
 let replace = Freinds.splice(0 , 1 , "Sufiyan");
 console.log(replace);
 for(let a = 0 ; a<Freinds.length ; a++ ){
     console.log(Freinds[a]);
  }
 console.log("I have found a bigger table so I want to invite some more people");
 Freinds.unshift("Ammar");
  Freinds.splice(3 , 0 , "Burhan");
  Freinds.push("Huzaifa");
 console.log(Freinds);
    console.log(" Sorry but I can invite only two people for dinner" );
 while(Freinds.length> 2){
     let a = Freinds.pop();
     console.log(`${a} Sorry you are not invited for dinner`);
 }
 console.log(`${Freinds[0]} You are still invited for the dinner \n ${Freinds[1]} You are still invited for the dinner `);
 ;
 Freinds.splice(0 , 2);
 console.log(Freinds);
*/


 // // ---------------- Question 18 -----------------// //
/*
 let location = [" Saudia Arabia ", " Canada ", " Iran ", " Turkey "];
let arr = location.slice();
let arr1 = location.sort();
console.log(arr);
console.log(arr1);
let arr3 = location.reverse();
console.log(arr3);
console.log(arr);
let arr4 = location.reverse();
console.log(arr4);
let order = arr4.reverse();
console.log(order);
let arr5 = location.sort();
console.log(arr5);
let arr6 = location.reverse();
console.log(arr6);
export {};
*/


// // ---------------- Question 19 -----------------// //
//        (First turn on Question number 14 to run this Question"19")
/*
console.log(`The number of people I invited for dinner are ${Freinds.length}`);
*/


// // ---------------- Question 20 -----------------// //
/*
 let cities = ["karachi","islamabad", "Lahore","Faislabad"];
 for( let i = 0; i<cities.length; i++){
     console.log(`${i} ${cities[i]}`);
 }
*/


// // ---------------- Question 21 -----------------// //
/*
 let object = {
      name : "Amin",
     age :18,
      gender:"male"
 }
 console.log(object);
*/


 // // ---------------- Question 22 -----------------// //
/*
  let array = ["Amin", "Asad", "Malik"];
  console.log(array[8]);
  console.log(array[0]);
*/


// // ---------------- Question 23 -----------------// //
/*
let car: string = "BMW";

// test 1
console.log('car === "BMW". This statement I predict true.');
console.log(car === "BMW");

// test 2
console.log('car.includes("B"). This statement I predict true.');
console.log(car.indexOf("B") !== -1); // true

// test 3
console.log('car.toLowerCase() === "bmw". This statement I predict true.');
console.log(car.toLowerCase() === "bmw");

// test 4
console.log('car.length > 0. This statement I predict true.');
console.log(car.length > 0);

// test 5
console.log('car.length === 3. This statement I predict true.')
console.log(car.length === 3);

// false statement
console.log('car === "mercedes". This statement I predict False.');
console.log(car === "mercedes");

// test 2
console.log('car.includes("f"). This statement I predict false.');
console.log(car.indexOf("f") !== -1); // false

// test 3
console.log('car.toUpperCase() === "bmw". This statement I predict False.');
console.log(car.toUpperCase() === "bmw");

// test 4
console.log('car.length > 10. This statement I predict False.');
console.log(car.length > 10);

// test 5
console.log('car.length === 6. This statement I predict False.')
console.log(car.length === 6);
*/


// // ---------------- Question 24 -----------------// //
/*
  let  string1 = "Amin";
  let string2  =  "Hayder";
  console.log(string1 !== string2); // True
  console.log(string1 === string2); // False
  let case1 = "AMIN";
  let case2 = "amin";
  console.log(case1.toLowerCase() === case2);// True
  console.log(case1.toLowerCase() !== case2.toLowerCase()); // False
 // Numerical test
  let num1 = 40;
  let num2 = 80;
  console.log(num1 < num2);// True
 console.log(num1 > num2); // False
 console.log(num1 <= num2);// True
 console.log(num1 >= num2); // False
 // logical test
 let a = 5;
 let b = 10;
 console.log(a > 0 && b <20); // True
 console.log(a > 0 && b < 8); // False
 console.log( a > 0 || b > 30); // True
 console.log(a === 0 || b === 20); // False
 let arr = ["city" , "country"];
 console.log(arr.indexOf("city") !== -1); // True
 console.log(arr.indexOf("ali")  !== -1);  // False
*/


 // // ---------------- Question 25-----------------// //
/*
 let alein_colour = "green" ;
 if(alein_colour === "green"){
     console.log("The player just earned 5 points");
 }
  if (alein_colour === "yellow"){
     console.log("you failed");
 }
*/


// // ---------------- Question 26 -----------------// //
/*
 let alein_colour2 = "green" ;
 if(alein_colour2 === "green"){
     console.log("The player just earned 5 points");
 }else if(alein_colour2 === "yellow"){
     console.log("the player just earned 10 points.");
 }
 let alein_colour3 = "yellow" ;
 if(alein_colour2 === "green"){
     console.log("The player just earned 5 points");
 }else if(alein_colour2 === "yellow"){
     console.log("the player just earned 10 points.");
 }
*/


 // // ---------------- Question 27 -----------------// //
/*
 let alein_colour3 = "green";
 if(alein_colour3 === "green"){
     console.log("the player earned 5 Poibts");
 }else if(alein_colour3 === "yellow"){
     console.log("the player earned 10 Points");
 }else if(alein_colour3 === "red"){
     console.log("the player earned 15 Points");
 }
 let alein_colour4 = "yellow";
 if(alein_colour4 === "green"){
     console.log("the player earned 5 Poibts");
 }else if(alein_colour4 === "yellow"){
     console.log("the player earned 10 Points");
 }else if(alein_colour4 === "red"){
     console.log("the player earned 15 Points");
 }
 let alein_colour5 = "red";
 if(alein_colour5 === "green"){
     console.log("the player earned 5 Poibts");
 }else if(alein_colour5 === "yellow"){
     console.log("the player earned 10 Points");
 }else if(alein_colour5 === "red"){
     console.log("the player earned 15 Points");
 }
*/


 // // ---------------- Question 28 -----------------// //
/*
 let men_age : number = 18;
 if(men_age < 2){
     console.log("the person is a baby.");
 }else if(men_age >= 2 && men_age < 4){
     console.log("the person is a toddler.");
 }else if (men_age >=4 && men_age < 13 ){
     console.log("the person is a Kid.");
 }else if(men_age >= 13 && men_age < 20){
     console.log("the person is a teenager.");
 }else if(men_age >= 20 && men_age < 65){
     console.log("the person is a adult.");
 }else if (men_age > 65){
     console.log("the person is an elder");
 }
*/


 // // ---------------- Question 29 -----------------// //
/*
 let favourite_fruit = ["banana","apple","watermelon",];
 if(favourite_fruit.indexOf("banana")){
     console.log("i realy like banana!");
 }if(favourite_fruit.indexOf("watermelon")){
     console.log("i realy like watermelon!");
 }if(favourite_fruit.indexOf("apple")){
     console.log("i realy like apple!");
 }if(favourite_fruit.indexOf("mango")){
     console.log("i realy like mango!");
 }if(favourite_fruit.indexOf("orange")){
     console.log("i realy like orange!");
 }if(favourite_fruit.indexOf("gava")){
    console.log("i do not like gava!");
}
*/


 // // ---------------- Question 30 -----------------// //
/*
 let helloadmin = ["admin","Asad", "Malik","Fayez","Amin"];
 for(let i =0 ; i<helloadmin.length ; i++){
     if(helloadmin.indexOf("admin")){
         console.log("Hello admin, Would you like to see a status report");
        break 
     }else {
         console.log(`Hello ${helloadmin[i]} thank you for logging in again`);
     }
}
 let helloadmin1 = ["Amin","Fayez", "Asad","Sufiyan","Malik"];
 for(let i =0 ; i<helloadmin.length ; i++){
     if(helloadmin.indexOf("Amin")){
         console.log("Hello admin, Would you like to see a status report");
        break 
     }else {
         console.log(`Hello ${helloadmin[i]} thank you for logging in again`);
     }
 }
*/


 // // ---------------- Question 31 -----------------//
/*
 let N_user = ["admin","Amin", "Mubeen","Asad","Malik"];
 if(N_user.length === 0){
     console.log("We need to find some users!");
 }else{
     N_user.splice(0 , 5);
     console.log("All users has been removed");
 }
*/


 // // ---------------- Question 32 -----------------//
/*
 let current_users :string[] = ["Amin", "Mubeen" , "Asad", "Wahib", "Malik"];
 let new_user : string[] = ["Sufiyan", "Amin" , "Ammar", "Asad", "Fayez"];
 new_user.forEach(new_user=>{
     let lower1 = new_user.toLowerCase();
     let c = current_users.some(current_users => current_users.toLowerCase() === lower1)
 if(c){
     console.log(`${new_user} is not available`);
 }else{
     console.log(`${new_user} is available`);
 }
 })
*/


 // // ---------------- Question 33 -----------------//
/*
 let num1 : number[] = [1 , 2 , 3 , 4, 5, 6, 7, 8, 9 ];
 for(let num of num1){ 
     if(num === 1){
         console.log(`${num}st`);
     }else if (num === 2 ){
         console.log(`${num}nd`);
     }else if (num === 3 ){
         console.log(`${num}rd`);
     }else{
         console.log(`${num}th`);
     }
 }
*/


 // // ---------------- Question 34 -----------------// //
/*
 let pizza = ["cheese pizza" , "BBQ chicken pizza", "Meat pizza"];
 for(let a = 0 ; a<pizza.length; a++){
     console.log(` I like ${pizza[a]}`);
 }
 console.log("cheese pizza , BBQ pizza , Meat pizza are so yummy.\n its taste is very good.\n i realy love pizza! ");
*/


 // // ---------------- Question 35 -----------------// //
/*
 let animal = [ "cat" , "dog" , "cow"];
 for ( let a of animal){
     console.log(` ${a} is a pet animal.`);
 }
 console.log("These pets are very addorable!");
*/


 // // ---------------- Question 36 -----------------// //
/*
 const make_shirt =(size : string, message : string) => {
 console.log(`The size of T-Shirt is ${size},The message printed on it. ${message} `);
  }
 make_shirt("large", "'JOYFUL'");
*/


 // // ---------------- Question 37 -----------------// //
 // -----TURN OFF THE PREVIOUS LINE SO THAT THE NEW LINE CAN WORK----- //
 
 /*
 const make_shirt =( message : string ,size : string = " large" ) =>{
    return size + message;
     }
   let a = make_shirt(" i love J@OYFUL_CLOTHINGPAKISTAN" , );
 console.log(a);
 */
 /*
 const make_shirt =( message : string ,size : string = " medium" ) =>{
 return message + size;
     }
   let a = make_shirt(" i love J@OYFUL_CLOTHINGPAKISTAN" , );
 console.log(a);
 */
 /*
 const make_shirt =( message : string ,size : string  ) =>{
    return message + size;
     }
   let a = make_shirt(" i love J@OYFUL_CLOTHINGPAKISTAN" , " any size"  );
 console.log(a);
*/


 // // ---------------- Question 38 -----------------// //
/*
 const describe_city = (name: string, country: string = "Pakistan") => {
    return `${name} is in ${country}`;
  };
  
  let a = describe_city("islamabad");
  let b = describe_city("hyderabad");
  let c = describe_city("Lahore", "Pakistan");
  
  console.log(a);
  console.log(b);
  console.log(c);
*/


 // // ---------------- Question 39 -----------------// //
/*
 const city_country =(name : string , country : string) =>{
    return ` "${name} , ${country}"`;
 }
 let a = city_country( "Karachi" ," Pakistan");
 console.log(a);
 let b = city_country( "Mumbai" ,"India");
 console.log(b);
 let c = city_country( "Tokyo" ,"Japan");
 console.log(c);
*/


 // // // ---------------- Question 40 -----------------// //
 // -----TURN OFF THE PREVIOUS LINE SO THAT THE NEW LINE CAN WORK----- //

/*
 function myalbum(artistname: string, albumtitle : string){
     return {artistname , albumtitle};
 }
 let album1 = myalbum("Atif Aslam","Romantic Zone");
 let album2 = myalbum("Arijit","Sad Zone");
 let album3 = myalbum("Aima Baig","Energy Vibes");
 console.log(album1);
 console.log(album2);
 console.log(album3);
*/
/*
 function myalbum(artistname: string, albumtitle : string,tracks?: number){
     return {artistname , albumtitle,tracks};
 }
 let album1 = myalbum("Atif Aslam","Romantic Zone", 10);
 let album2 = myalbum("Arijit","Sad Zone",40);
 let album3 = myalbum("Aima Baig","Energy Vibes",20);
 console.log(album1);
 console.log(album2);
 console.log(album3);
*/


// // // ---------------- Question 41 -----------------// //
/*
 let a : string[] = ["Amin" ,"Mubeen","Ammar" ];
 function mymagic(a : string[]){
 for(let b of a){
     console.log(b);
 }
 }
 mymagic(a);
*/


// // // ---------------- Question 42 -----------------// //
/*
 let a : string[] = ["Amin" ,"Mubeen","Ammar" ];
 function make_great(a : string[]){
 for(let b of a){
     console.log(`Great ${b}`);
 }
 }
 make_great(a);
*/


// // // ---------------- Question 43 -----------------// //
/*
 let a : string[] = ["Amin" ,"Mubeen","Ammar" ];
 let b = [...a];
 function  make_great(now1 : string){
     let show_magician = "";
 for(let b of a){
     show_magician += `${now1} ${b}\n` 
 }
     return show_magician;
 }
 // make_great(a);
 let call = make_great("Great");
 let call1 = call.split(`\n`);
 console.log(call);
 console.log(call1);
 console.log(a);
*/


 // // // ---------------- Question 44 -----------------// //
/*
 function mysandwiches(...items : string[]){
     return `I want ${items} sandwitch .`;
 }
 let any = mysandwiches("beef" ,"egg");
 let any1 = mysandwiches("chicken ");
 let any2 = mysandwiches();
 console.log(any);
 console.log(any1);
 console.log(any2);
*/


 // // // ---------------- Question 45 -----------------// //
/*
 import { features } from "process";

 function storeCarInfo(manufacturer: string, modelName: string, ...extraoption: { [key: string]: any } [] ):
 
 object {
 
 const carInfo = {
 manufacturer,
 modelName,
 ...Object.assign({}, ...extraoption)
 }
 return carInfo;
 };
 let answare = storeCarInfo('Toyota', 'Carolla', {color: 'White'}, {features: ['Navigation', 'Power window']})
 console.log(answare)
*/
