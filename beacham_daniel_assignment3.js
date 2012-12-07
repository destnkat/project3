//Global Vars
var lastEmployeeId = 4667;

//JSON Data For Candidate Pool
var candidatesJSON = {
    candidates : [
        {
            "name": "Beast",
            "position": "Web Developer",
            "contractor": true,
            "negotiationLevel" : 4,
            "skills": [
                "PHP",
                "MySQL"
            ]
        },
        {
            "name": "Belle",
            "position": "Web Developer",
            "contractor": false,
            "negotiationLevel" : 4,
            "skills": [
                "PHP",
                "MySQL",
                "Javascript",
                "jQuery",
                "CSS",
                "JAVA"
            ]
        },
        {
            "name": "Meeko",
            "position": "Web Developer",
            "contractor": true,
            "negotiationLevel" : 1,
            "skills": [
                "PHP",
                "MySQL",
                "Javascript",
                "jQuery",
                "Oracle"
            ]
        }
    ]
}

function Employee (empInfo) {
    //Obj Properties
    this.isContractor = empInfo.contractor,
    this.skillSet = empInfo.skills,
    this.jobDescription = empInfo.position,
    this.employeeName = empInfo.name,
    this.bonusOffered = isBonusEligible(empInfo.negotiationLevel),
    this.employeeId,
    this.startingSalary;


    function isBonusEligible(negLevel) {
        return negLevel === 1 ? true : false;  //Return Boolean
    }

    function setEmployeeId() {
       this.employeeId = lastEmployeeId++;
    }
};

Employee.prototype.setStartingSalary = function(salary) { //mutator
        this.startingSalary = salary;
        return this;
};

Employee.prototype.getTotalCompensation = function() {  //Accessor
        console.log(this.employeeName + ' will start with a salary of ' + this.startingSalary);
        return this.startingSalary;  //Return Number
};

Employee.prototype.getJobDescription = function() {
        console.log(this.employeeName + ' is hired as a ' + this.jobDescription);
        return this.jobDescription;  //Return String
};
Employee.prototype.calculateSalary = function (specialSkills) {
        var skills = this.skillSet;
        for (var i=0; i < skills.length; i++) {  //For Loop
            if (specialSkills.indexOf(skills[i]) > -1) {  //Conditional
                this.startingSalary += 2500;
                if (this.isContractor && this.bonusOffered) {  //Nested Conditional
                    this.startingSalary += 1000;
                } else {
                    console.log('No Bonus Offered');
                }
            } else {
                console.log('Not a Special Skill');
            }
        }
};

function startTheJobHunt(obj) {
    var candidates = obj.candidates;

    for(var i = 0; i < candidates.length; i++) {
        var interviewProcess = 'begin';

        while (interviewProcess !== 'complete') {  //Nested and While Loop
            //Run the Interview Process
            interviewProcess = 'complete';
        }
        //Not coding the Entire Interview Process, so I took a shortcut by hard coding a winner :)
        if (candidates[i].name.toLowerCase() === 'meeko') {
            console.log(candidates[i].name + ' Is who we want to hire. He is Awesome!')
            return candidates[i];  // Returns Object
        } else {
            console.log(candidates[i].name + ' Is Not Hired');
        }
    }
}

window.onload = function(){
    var specialSkills = ['Javascript', 'HTML5', 'CSS'];
    var winningCandidate = startTheJobHunt(candidatesJSON);
    var hiredEmployee = new Employee(winningCandidate);

    hiredEmployee.setStartingSalary(75000);
    hiredEmployee.calculateSalary(specialSkills);

    //Retrieve and console log
    hiredEmployee.getJobDescription();
    hiredEmployee.getTotalCompensation();
};
