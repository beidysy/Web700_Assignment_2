class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;


const fs = require('fs');
function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/students.json', 'utf8', (err, studentDataFromFile) => {
            if (err) {
                reject("Unable to read students.json");
                return;
            }

            fs.readFile('./data/courses.json', 'utf8', (err, courseDataFromFile) => {
                if (err) {
                    reject("Unable to read courses.json");
                    return;
                }

                const students = JSON.parse(studentDataFromFile);
                const courses = JSON.parse(courseDataFromFile);
                dataCollection = new Data(students, courses);
                resolve();
            });
        });
    });
}
function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            resolve(dataCollection.students);
        } else {
            reject("No results returned");
        }
    });
}

function getTAs() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students.length > 0) {
            const tas = dataCollection.students.filter(student => student.TA === true);
            resolve(tas);
        } else {
            reject("No results returned - Student data is empty.");
        }
    });
}
function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses.length > 0) {
            resolve(dataCollection.courses);
        } else {
            reject("No results returned - Course data is empty.");
        }
    });
}



module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
  };
  



























// chatgpt
// const fs = require('fs').promises;
// function initialize() {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./data/students.json', 'utf8')
//             .then(data => {
//                 const students = JSON.parse(data);
//                 return fs.readFile('./data/courses.json', 'utf8')
//                     .then(data => {
//                         const courses = JSON.parse(data);
//                         dataCollection = new Data(students, courses);
//                         resolve();
//                     });
//             })
//             .catch(err => {
//                 reject("Unable to read file: " + err.message);
//             });
//     });
// }


// function getAllStudents() {
//     return new Promise((resolve, reject) => {
//         if (dataCollection && dataCollection.students.length > 0) {
//             resolve(dataCollection.students);
//         } else {
//             reject("No results returned - Student data is empty.");
//         }
//     });
// }


// function getTAs() {
//     return new Promise((resolve, reject) => {
//         if (dataCollection && dataCollection.students.length > 0) {
//             const tas = dataCollection.students.filter(student => student.TA === true);
//             if (tas.length > 0) {
//                 resolve(tas);
//             } else {
//                 reject("No results returned - No TAs found.");
//             }
//         } else {
//             reject("No results returned - Student data is not available.");
//         }
//     });
// }


// function getCourses() {
//     return new Promise((resolve, reject) => {
//         if (dataCollection && dataCollection.courses.length > 0) {
//             resolve(dataCollection.courses);
//         } else {
//             reject("No results returned - Course data is empty.");
//         }
//     });
// }
