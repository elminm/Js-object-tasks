// Task 1
// const currenDate = new Date();
// const date = {
//     day: currenDate.getDate(),
//     month: currenDate.getMonth(),
//     year: currenDate.getFullYear(),

// }
// let seperator = '.'
// function followingFormat(date, seperator) {
//     if (seperator === '.') {
//         if (String(date.day).length < 2) {
//             console.log(`0${date.day}.${date.month + 1}.${date.year}`);
//         } else if  (String(date.month).length < 2) {
//             console.log(`${date.day}.0${date.month + 1}.${date.year}`);
//         } else {
//             console.log(`${date.day}.${date.month + 1}.${date.year}`);
//         }
//     }

// }

// function followingFormatDash(date, seperator) {

//     if (seperator === '-') {
//         if (String(date.day).length < 2) {
//             console.log(`0${date.day}-${date.month + 1}-${date.year}`);
//         } else if  (String(date.month).length < 2) {
//             console.log(`${date.day}-0${date.month + 1}-${date.year}`);
//         } else {
//             console.log(`${date.day}-${date.month + 1}-${date.year}`);
//         }
//     }

// }
// followingFormat(date, seperator);
// followingFormatDash(date, seperator);


// Task 2 

// let myBirthday, today, bday, diff, days;
// myBirthday = [18, 11]; // 18 november
// today = new Date();
// bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
// if (today.getTime() > bday.getTime()) {
//     bday.setFullYear(bday.getFullYear() + 1);
// }
// diff = bday.getTime() - today.getTime();
// days = Math.floor(diff / (1000 * 60 * 60 * 24));
// alert(days + " days until your birthday!");

// Task 3

// function DaysToAdd(date, days) {
//     const millisecondsPerDay = 86400000; //
//     const updatedDate = new Date(date.getTime() + days * millisecondsPerDay);
//     return updatedDate;
// }

// const currentTime = new Date();
// const daysAdding = 1;
// const updatedDate = DaysToAdd(currentTime, daysAdding);
// console.log(updatedDate);