// Task 1 

// const users = [

//     {

//         username: 'David',

//         status: 'online',

//         lastActivity: 10

//     },
//     {

//         username: 'Lucy',

//         status: 'offline',

//         lastActivity: 22

//     },
//     {

//         username: 'Bob',

//         status: 'online',

//         lastActivity: 104

//     }

// ];

// const usersOnlineNames = users.filter(function (el){
//    return el.status === 'online'
// });

// alert(`The following users are online now: ${usersOnlineNames[0].username}, ${usersOnlineNames[1].username}`);


// Task 2

// const student = {
//     fullName: 'Ali Aliyev',
//     experienceInMonths: 12,
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
// }

// function giveJobToStudent(info, position) {
//     student.job = position;
//    alert(` Congratulations! Student ${info.fullName} has a new job!It is now ${position}`)
// }

// giveJobToStudent(student, 'web developer');
// console.log(student);

// Task 3

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }

// function handleObject(obj, key, action) {
//     if (action === 'get') {
//         const value = Object.values(obj);
//         return value
//     } else if (action === 'add') {
//         let assign = Object.assign(obj);
//         assign.emptyString = key;
//         return obj;
//     } else if (action === 'delete') {
//         delete obj.emptyString;
//         return obj;
//     } else {
//         return obj;
//     }
// }

// const result = handleObject(student, ' ', 'add');
// console.log('result', result);



// Task 4

// const suspects = {
//     'James': ['Jacob', 'Bill', 'Lucas'],
//     'Johnny': ['David', 'Kyle', 'Lucas'],
//     'Peter': ['Lucy', 'Kyle'],
// };

// function getKiller(suspects, deads) {
//     for (const suspect in suspects) {
//         if (deads.every(person => suspects[suspect].includes(person))) {
//             return suspect;

//         }
//     }
//     return "Killer could not be found"
// }
// const deads = ['David', 'Kyle'];
// const killer = getKiller(suspects, deads);
// console.log(killer);




// Task 5

// function getRandomNumberInRange(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// const todaysWinner = {
//     prize: '$10,000',
// }

// const winnerApplicants = {

//     '001':
//     {
//         name: 'Max',
//         age: 25
//     },
//     '201':
//     {
//         name: 'Svetlana',
//         age: 20
//     },
//     '304':
//     {
//         name: 'Catherine',
//         age: 35
//     },
// }


// function getWinner(){
//     let randomIndex = getRandomNumberInRange(0, 3);
//     let winnerIndex = Object.keys(winnerApplicants).find((item, i)=> randomIndex == i);
//     let winner =  winnerApplicants[winnerIndex];
//     return alert(`${winner.name + " " + todaysWinner.prize} `)
// }
// getWinner();


// Task 6

// const ordersArr = [4, 2, 1, 3];
// const people = [
//     { id: 1, name: 'Maxim' },
//     { id: 2, name: 'Nicholas' },
//     { id: 3, name: 'Angelina' },
//     { id: 4, name: 'Vitaly' },
// ];

// function giveTalonsInOrder(persons, queues) {
//     return queues.map(queue => persons.find(person => person.id === queue));
// }
// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);