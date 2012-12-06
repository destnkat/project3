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

function startTheJobHunt(candidates) {
    for(var i = 0; i < candidates.length; i++) {
        var interviewProcess = 'begin';

        while (interviewProcess !== 'complete') {  //Nested and While Loop
            //Run the Interview Process
            interviewProcess = 'complete';
        }
        //Not coding the Entire Interview Process, so I took a shortcut by hard coding a winner :)
        if (candidates[i].toLowerCase() === 'meeko') {

            console.log(candidates[i] + ' Is who we want to hire. He is Awesome!')
            return {
                "name": candidates[i],
                "position": "Web Developer",
                "contractor": true,
                "bonusEligible": false,
                "skills": [
                    "PHP",
                    "MySQL",
                    "Javascript",
                    "jQuery"
                ]
            }
        } else {
            console.log(candidates[i] + ' Is Not Hired');
        }
    }
}

window.onload = function(){
    var candidates = ['Aurora', 'Beast', 'Belle', 'Naveen', 'Meeko'];
    var winningCandidate = startTheJobHunt(candidates);
    var hiredEmployee = new Employee(winningCandidate);

    hiredEmployee.setStartingSalary(75000);
    hiredEmployee.calculateSalary();

    console.log('Total Compensation: ' + hiredEmployee.getTotalCompensation());
};
