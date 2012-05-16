var jeoquery = (function () {
	var my = {};

	my.userName = 'demo';
	my.defaultCountryCode = 'US';
	my.defaultLanguage = 'en';
	my.geoNamesApi = 'http://api.geonames.org/';

	function getGeoNames(method, data, callBack) {
		$.getJSON(
				my.geoNamesApi + method, 
				$.extend(data, { "username": my.userName }), 
				callBack);
	}

	my.astergdem = function( latitude, longitude, callBack ) {
			getGeoNames("astergdemJSON", {
				"lat": latitude,
				"lng": longitude },
				callBack);
	};

	my.children = function( geoNameId, maxRows, callBack ) {
			getGeoNames("childrenJSON", {
				"geonameId": geoNameId,
				"maxRows": maxRows || 200 },
				callBack);
	};

	my.cities = function( north, south, east, west, language, callBack ) {
			getGeoNames("citiesJSON", {
				"north": north,
				"south": south,
				"east": east,
				"west": west,
				"lang": language || my.defaultLanguage },
				// "maxRows": maxRows || 200 },
				// TODO: find out why geonames chokes on maxRows...
				callBack);
	};

	my.countryCode = function( latitude, longitude, type, radius, language, callBack ) {
			getGeoNames("countryCodeJSON", {
				"lat": latitude,
				"lng": longitude,
				"type": longitude,
				"lang": language || my.defaultLanguage,
				"radius": longitude },
				callBack);
	};

	my.countryInfo = function( countryCode, language, callBack ) {
			getGeoNames("countryInfoJSON", {
				"country": countryCode,
				"lang": language || my.defaultLanguage },
				callBack);
	};
	my.countrySubdivision = function( latitude, longitude, level, radius, language, callBack ) {
			getGeoNames("countrySubdivisionJSON", {
				"lat": latitude,
				"lng": longitude,
				"level": level,
				"lang": language || my.defaultLanguage,
				"radius": longitude },
				callBack);
	};

	my.earthquakes = function( north, south, east, west, date, maxRows, minMagnitude, callBack ) {
		var dateParam = date || new Date();
		var dateQs = dateParam.getFullYear() + '-' + (dateParam.getMonth() + 1) + '-' + dateParam.getDate();
			getGeoNames("earthquakesJSON", {
				"north": north,
				"south": south,
				"east": east,
				"west": west,
				"date": dateQs,
				"maxRows": maxRows || 10,
				"minMagnitude": minMagnitude || 0 },
				callBack);
	};
	my.findNearby = function( latitude, longitude, featureClass, featureCode, radius, style, maxRows, callBack ) {
			getGeoNames("findNearbyJSON", {
				"lat": latitude,
				"lng": longitude,
				"featureClass": featureClass,
				"featureCode": featureCode,
				"radius": radius || 100,
				"maxRows": maxRows || 10,
				"style": style || 'MEDIUM' },
				callBack);
	};

  my.postalCodeLookup = function( postalCode, countryCode, callBack ) {  		
			getGeoNames("postalCodeLookupJSON", {
				"postalcode": postalCode,
				"country": countryCode || my.defaultCountryCode },
				callBack);
	};

	return my;
}());
