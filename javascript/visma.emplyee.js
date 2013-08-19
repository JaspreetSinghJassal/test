

(function() {
	Visma.employee = function(employeeObject) {
		var _fullName = employeeObject.name;
		var _givenName = "";
		var _surName = "";
		
		
		var _splitName = function(name) {
			var nameArray = name.split(" ");
			_givenName = nameArray[0];
			_surName = nameArray[1];
		};

		
		(function() {
			_splitName(employeeObject.name);
		}) ();
		
		
		return {
			getSurName : function() {
				return _surName;
			},
			
			setSurName : function(surName) {
				_surName = surName;
			},
			
			getGivenName : function() {
				return _givenName;
			},
			
			setGivenName : function(givenName) {
				_givenName = givenName;
			},
			
			getFullName : function() {
				return _fullName;
			},
			
			setFullName : function(fullName) {
				_fullName = fullName;
				_splitName(fullName);
			}
		};
	};
	
	
}) ();