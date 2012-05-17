var jeoquery = (function () {
	var my = {};

	my.userName = 'demo';
	my.defaultCountryCode = 'US';
	my.defaultLanguage = 'en';
	my.geoNamesApi = 'http://api.geonames.org/';

	function getGeoNames(method, data, callBack) {
		var nonNullData = {};
		for (var key in data) {
			if (key && data[key]) {
				nonNullData[key] = data[key];
			}
		}
		nonNullData["username"] = my.userName;
		$.getJSON(
				my.geoNamesApi + method, 
			  nonNullData, 
				callBack);
	}

	my.astergdem = function( callBack, latitude, longitude ) {
			getGeoNames("astergdemJSON", {
				"lat": latitude,
				"lng": longitude },
				callBack);
	};

	my.children = function( callBack, geoNameId, maxRows ) {
			getGeoNames("childrenJSON", {
				"geonameId": geoNameId,
				"maxRows": maxRows || 200 },
				callBack);
	};

	my.cities = function( callBack, north, south, east, west, language ) {
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

	my.countryCode = function( callBack, latitude, longitude, type, radius, language ) {
			getGeoNames("countryCodeJSON", {
				"lat": latitude,
				"lng": longitude,
				"type": longitude,
				"lang": language || my.defaultLanguage,
				"radius": longitude },
				callBack);
	};

	my.countryInfo = function( callBack, countryCode, language ) {
			getGeoNames("countryInfoJSON", {
				"country": countryCode,
				"lang": language || my.defaultLanguage },
				callBack);
	};
	my.countrySubdivision = function( callBack, latitude, longitude, level, radius, language ) {
			getGeoNames("countrySubdivisionJSON", {
				"lat": latitude,
				"lng": longitude,
				"level": level,
				"lang": language || my.defaultLanguage,
				"radius": longitude },
				callBack);
	};

	my.earthquakes = function( callBack, north, south, east, west, date, maxRows, minMagnitude ) {
		var dateQs = '';
		if (date) {
			dateQs = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
		}
			getGeoNames("earthquakesJSON", {
				"north": north,
				"south": south,
				"east": east,
				"west": west,
				"date": dateQs,
				"maxRows": maxRows,
				"minMagnitude": minMagnitude },
				callBack);
	};
	my.findNearby = function( callBack, latitude, longitude, featureClass, featureCode, radius, style, maxRows ) {
			getGeoNames("findNearbyJSON", {
				"lat": latitude,
				"lng": longitude,
				"featureClass": featureClass,
				"featureCode": featureCode,
				"radius": radius,
				"maxRows": maxRows,
				"style": style },
				callBack);
	};
	my.findNearbyPlaceName = function( callBack, latitude, longitude, language, radius, style ) {
			getGeoNames("findNearbyPlaceNameJSON", {
				"lat": latitude,
				"lng": longitude,
				"lang": language || my.defaultLanguage,
				"radius": radius,
				"style": style },
				callBack);
	};
	my.findNearbyPostalCodes = function( callBack, latitude, longitude, radius, maxRows, style, country, localCountry, postalCode ) {
			getGeoNames("findNearbyPostalCodesJSON", {
				"lat": latitude,
				"lng": longitude,
				"radius": radius,
				"maxRows": maxRows,
				"style": style,
				"country": country,
				"localCountry": localCountry,
				"postalCode": postalCode },
				callBack);
	};
	my.findNearbyStreets = function( callBack, latitude, longitude, radius, maxRows ) {
			getGeoNames("findNearbyStreetsJSON", {
				"lat": latitude,
				"lng": longitude,
				"radius": radius,
				"maxRows": maxRows },
				callBack);
	};
	my.findNearbyStreetsOSM = function( callBack, latitude, longitude ) {
			getGeoNames("findNearbyStreetsOSMJSON", {
				"lat": latitude,
				"lng": longitude },
				callBack);
	};
	my.findNearbyWeather = function( callBack, ICAO_AirportCode ) {
			getGeoNames("weatherIcaoJSON", {
				"ICAO": ICAO_AirportCode },
				callBack);
	};
	my.findNearbyWikipedia = function( callBack, latitude, longitude, languageCode, radius, maxRows, country, postalCode ) {
			getGeoNames("findNearbyWikipediaJSON", {
				"lat": latitude,
				"lng": longitude,
				"lang": languageCode,
				"radius": radius,
				"maxRows": maxRows,
				"country": country,
				"postalcode": postalCode },
				callBack);
	};




  my.postalCodeLookup = function( callBack, postalCode, countryCode ) {  		
			getGeoNames("postalCodeLookupJSON", {
				"postalcode": postalCode,
				"country": countryCode || my.defaultCountryCode },
				callBack);
	};

	return my;
}());
