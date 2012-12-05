//Global Vars
var companyName = "ACME Testing";

var employee = (function(){

    var isContractor = true;
    var skillSet = ['PHP', 'MySQL', 'Javascript', 'jQuery'];
    var salaryLevel = 5;
    var jobDescription = 'Web Developer';
    var company =  {
        address: '4540 Main Street',
        numEmployees: 500
    }

    return {
        setNewEmployeename : function() {
            this.name = name;
        },
        getEmployeeJobDescription: function() {
            return jobDescription;
        },
        calculateSalary : function() {
          var salaryMultiplier = 15000;

          return salaryMultiplier * salaryLevel;
        }

    };

})();

