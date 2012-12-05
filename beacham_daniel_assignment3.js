//Global Vars
var companyName = "ACME Testing",
    specialSkills = ['Javascript', 'HTML5', 'CSS'];
    bonusOffered = false;
    lastEmployeeId = 4667;

function Employee (empInfo) {
    //Local Vars
    var isContractor = empInfo.contractor,
        skillSet = ['PHP', 'MySQL', 'Javascript', 'jQuery'],
        employeeId = lastEmployeeId++,
        jobDescription = empInfo.position,
        company = {
            name : companyName,
            numEmployees:500
        },
        startingSalary = 0;


    Employee.prototype.setStartingSalary = function (salary) { //mutator
        startingSalary = salary;
    },

    Employee.prototype.getTotalCompensation = function() {  //Accessor
        return startingSalary;
    },
    Employee.prototype.calculateSalary = function () {
        for (var i=0; i < skillSet.length; i++) {  //For Loop
            if (specialSkills.indexOf(skillSet[i]) > -1) {  //Conditional
                startingSalary += 2500;
                if (isContractor && bonusOffered) {  //Nested Conditional
                    startingSalary += 1000;
                }
            }
        }
    }
};

window.onload = function(){
    var employeeInfo =  {
        name : 'Adam',
        position: 'Web Developer',
        contractor : 'true'
    }
    
    var adam = new Employee(employeeInfo);
        adam.setStartingSalary(75000);
        adam.calculateSalary();

    console.log(adam.getTotalCompensation());
};
