// Task 1
// const student = {
//     stack: ['HTML'],
//     level: 5,
//     improveLevel() {
//         if (this.level === 2) {
//             this.stack.push('CSS');
//         } else if (this.level === 3) {
//             this.stack.push('CSS', 'JavaScript');
//         } else if (this.level === 4) {
//             this.stack.push('CSS', 'JavaScript', 'React');
//         } else if (this.level === 5) {
//             this.stack.push('CSS', 'JavaScript', 'React', 'NodeJS');
//         }
//         if (this.level > 5) {
//             alert('The student has learned all technologies!');
//         }
//         return this;
//     },
// };

// student.improveLevel()
// console.log(student.stack);

// Task 2

// const dog = {
//     name: 'Charlie',
//     type: 'Dog',
//     makeSound() {
//         return 'Wow-Wow'
//     }
// }

// const bird = {
//     name: 'Petya',
//     type: 'Sparrow',
//     makeSound() {
//         return 'Cheek-chirp';
//     }
// }

// function makeDomestic(isDomestic) {
//     console.log(`${this.type} by name ${this.name} says ${this.makeSound()}`);
//     return {
//       name: this.name,
//       type: this.type,
//       makeSound: this.makeSound,
//       isDomestic: isDomestic
//     };
//   }

//   const dogDomestic = makeDomestic.bind(dog, true)();
//   const birdDomesticCall = makeDomestic.call(bird, true);
//   const birdDomesticApply = makeDomestic.apply(bird, [true]);

// Task 3

// const footballer = {
//     fullName: 'Cristiano Ronaldo',
//     attack: () => {

//         console.log(`${this.fullName} is now with the ball and starting to attack!`);
//     },
//     scoreGoal(sound) {
//         console.log(`${this.fullName} scored a goal! Wow!`);
//         this.celebrate(sound);
//     },
//     celebrate(sound) {
//         console.log(sound);
//     },
//     goToSubstitution: function (newPlayer) {
//         console.log(`${this.fullName} goes to replace. ${newPlayer}`);
//     }
// }

// const attack = footballer.attack.bind(footballer);
// const score = footballer.scoreGoal;
// const substitute = footballer.goToSubstitution;

// score.call(footballer, 'Siiiiii');
// substitute.apply(footballer, ['Paulo Dibala']);
