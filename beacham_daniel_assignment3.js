//Global Vars
var companyName = "ACME Testing",
    specialSkills = ['Javascript', 'HTML5', 'CSS'];
    lastEmployeeId = 4667;

function Employee (empInfo) {
    //Local Vars
    var isContractor = empInfo.contractor,
        bonusOffered = empInfo.bonusEligible,
        skillSet = empInfo.skills,
        jobDescription = empInfo.position,
        employeeId,
        startingSalary;

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
        "name": "Adam",
        "position": "WebDeveloper",
        "contractor": true,
        "bonusEligible": false,
        "skills": [
            "PHP",
            "MySQL",
            "Javascript",
            "jQuery"
        ]
    }

    var adam = new Employee(employeeInfo);
        adam.setStartingSalary(75000);
        adam.calculateSalary();

    console.log(adam.getTotalCompensation());
};
