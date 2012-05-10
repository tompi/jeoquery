var jeoquery = (function () {
	var my = {};

	my.userName = 'demo';
	my.defaultCountryCode = 'US';
	my.geoNamesApi = 'http://api.geonames.org/';

	function getGeoNames(method, data, callBack) {
		$.getJSON(
				my.geoNamesApi + method, 
				$.extend(data, { "username": my.userName }), 
				callBack);
	}
	
  my.postalCodeLookup = function( postalCode, countryCode, callBack ) {  		
			getGeoNames("postalCodeLookupJSON", {
				"postalcode": postalCode,
				"country": countryCode || my.defaultCountryCode },
				callBack);
	};

	return my;
}());
