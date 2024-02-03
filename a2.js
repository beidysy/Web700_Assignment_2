/*********************************************************************************
*  WEB700 – Assignment 2
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Ahmadou Sy Student ID: 138005236 Date: February 02, 2024
*
********************************************************************************/ 


const collegeData = require('./modules/collegeData.js');

collegeData.initialize()
    .then(() => {
        console.log('Initialization successful');
        getAllStudents();
        getCourses();
        getTAs();
    })
    .catch((error) => {
        console.error('Initialization failed:', error);
    });

function getAllStudents() {
    collegeData.getAllStudents()
        .then((students) => {
            console.log(`Successfully retrieved ${students.length} students`);
        })
        .catch((error) => {
            console.error('Failed to retrieve students:', error);
        });
}

function getCourses() {
    collegeData.getCourses()
        .then((courses) => {
            console.log(`Successfully retrieved ${courses.length} courses`);
        })
        .catch((error) => {
            console.error('Failed to retrieve courses:', error);
        });
}

function getTAs() {
    collegeData.getTAs()
        .then((tas) => {
            console.log(`Successfully retrieved ${tas.length} TAs`);
        })
        .catch((error) => {
            console.error('Failed to retrieve TAs:', error);
        });
}








    

