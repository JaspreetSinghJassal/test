

(function() {
	Visma.department = function(department) {
		var _name = department.name;
		var _location = department.location;
		var _employees = new Array();
		
		
		return {
			getDepartmentName : function() {
				return _name;
			},
			
			getLocation : function() {
				return _location;
			},
			
			getEmployees : function() {
				return _employees;
			},
		
		
			setName : function(name) {
				_name = name;
			},
			
			setLocation : function(location) {
				_location = location;
			}, 
			
			addEmployee : function(employee) {
				_employees.push(employee);
			}
		};
	};
	
	
}) ();