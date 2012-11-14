/* 
 * jeoQuery v0.2
 *
 * Copyright 2012, Thomas Haukland
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */

var jeoquery = (function ($) {
    var my = {};

    my.userName = 'demo';
    my.defaultCountryCode = 'US';
    my.defaultLanguage = 'en';
    my.geoNamesApi = 'http://api.geonames.org/';

    my.featureClass = {
        AdministrativeBoundaryFeatures: 'A',
        HydrographicFeatures: 'H',
        AreaFeatures: 'L',
        PopulatedPlaceFeatures: 'P',
        RoadRailroadFeatures: 'R',
        SpotFeatures: 'S',
        HypsographicFeatures: 'T',
        UnderseaFeatures: 'U',
        VegetationFeatures: 'V'
    };

    function getGeoNames(method, data, callBack) {
        var nonNullData = {};
        for (var key in data) {
            if (key && data[key]) {
                nonNullData[key] = data[key];
            }
        }
        nonNullData.username = my.userName;
        $.ajax({
            url: my.geoNamesApi + method,
            dataType: 'jsonp',
            data: nonNullData,
            success: callBack,
            error: function (xhr, textStatus) {
                alert('Ooops, geonames server returned: ' + textStatus);
            }
        });
    }

    function formatDate(date) {
        var dateQs = '';
        if (date) {
            dateQs = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        }
        return dateQs;
    }

    my.astergdem = function (callBack, latitude, longitude) {
        getGeoNames("astergdemJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };

    my.children = function (callBack, geoNameId, maxRows) {
        getGeoNames("childrenJSON", {
            "geonameId": geoNameId,
            "maxRows": maxRows
        }, callBack);
    };

    my.cities = function (callBack, north, south, east, west, language) {
        getGeoNames("citiesJSON", {
            "north": north,
            "south": south,
            "east": east,
            "west": west,
            "lang": language || my.defaultLanguage
        }, callBack);
    };

    my.countryCode = function (callBack, latitude, longitude, type, radius, language) {
        getGeoNames("countryCodeJSON", {
            "lat": latitude,
            "lng": longitude,
            "type": longitude,
            "lang": language || my.defaultLanguage,
            "radius": longitude
        }, callBack);
    };

    my.countryInfo = function (callBack, countryCode, language) {
        getGeoNames("countryInfoJSON", {
            "country": countryCode,
            "lang": language || my.defaultLanguage
        }, callBack);
    };
    my.countrySubdivision = function (callBack, latitude, longitude, level, radius, language) {
        getGeoNames("countrySubdivisionJSON", {
            "lat": latitude,
            "lng": longitude,
            "level": level,
            "lang": language || my.defaultLanguage,
            "radius": longitude
        }, callBack);
    };

    my.earthquakes = function (callBack, north, south, east, west, date, maxRows, minMagnitude) {
        getGeoNames("earthquakesJSON", {
            "north": north,
            "south": south,
            "east": east,
            "west": west,
            "date": formatDate(date),
            "maxRows": maxRows,
            "minMagnitude": minMagnitude
        }, callBack);
    };
    my.findNearby = function (callBack, latitude, longitude, featureClass, featureCode, radius, style, maxRows) {
        getGeoNames("findNearbyJSON", {
            "lat": latitude,
            "lng": longitude,
            "featureClass": featureClass,
            "featureCode": featureCode,
            "radius": radius,
            "maxRows": maxRows,
            "style": style
        }, callBack);
    };
    my.findNearbyPlaceName = function (callBack, latitude, longitude, language, radius, style) {
        getGeoNames("findNearbyPlaceNameJSON", {
            "lat": latitude,
            "lng": longitude,
            "lang": language || my.defaultLanguage,
            "radius": radius,
            "style": style
        }, callBack);
    };
    my.findNearbyPostalCodes = function (callBack, latitude, longitude, radius, maxRows, style, country, localCountry, postalCode) {
        getGeoNames("findNearbyPostalCodesJSON", {
            "lat": latitude,
            "lng": longitude,
            "radius": radius,
            "maxRows": maxRows,
            "style": style,
            "country": country,
            "localCountry": localCountry,
            "postalCode": postalCode
        }, callBack);
    };
    my.findNearbyStreets = function (callBack, latitude, longitude, radius, maxRows) {
        getGeoNames("findNearbyStreetsJSON", {
            "lat": latitude,
            "lng": longitude,
            "radius": radius,
            "maxRows": maxRows
        }, callBack);
    };
    my.findNearbyStreetsOSM = function (callBack, latitude, longitude) {
        getGeoNames("findNearbyStreetsOSMJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.findNearByWeather = function (callBack, latitude, longitude) {
        getGeoNames("findNearByWeatherJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.findNearbyWikipedia = function (callBack, latitude, longitude, languageCode, radius, maxRows, country, postalCode) {
        getGeoNames("findNearbyWikipediaJSON", {
            "lat": latitude,
            "lng": longitude,
            "lang": languageCode,
            "radius": radius,
            "maxRows": maxRows,
            "country": country,
            "postalcode": postalCode
        }, callBack);
    };
    my.findNearestAddress = function (callBack, latitude, longitude) {
        getGeoNames("findNearestAddressJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.findNearestIntersection = function (callBack, latitude, longitude) {
        getGeoNames("findNearestIntersectionJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.findNearestIntersectionOSM = function (callBack, latitude, longitude, radius, maxRows) {
        getGeoNames("findNearestIntersectionJSON", {
            "lat": latitude,
            "lng": longitude,
            "radius": radius,
            "maxRows": maxRows
        }, callBack);
    };
    my.findNearbyPOIsOSM = function (callBack, latitude, longitude) {
        getGeoNames("findNearbyPOIsOSMJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.get = function (callBack, geonameId, lang, style) {
        getGeoNames("getJSON", {
            "geonameId": geonameId,
            "lang": lang,
            "style": style
        }, callBack);
    };
    my.gtopo30 = function (callBack, latitude, longitude) {
        getGeoNames("gtopo30JSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.hierarchy = function (callBack, geonameId) {
        getGeoNames("hierarchyJSON", {
            "geonameId": geonameId
        }, callBack);
    };
    my.neighbourhood = function (callBack, latitude, longitude) {
        getGeoNames("neighbourhoodJSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.neighbours = function (callBack, geonameId, countryCode) {
        getGeoNames("neighboursJSON", {
            "geonameId": geonameId,
            "country": countryCode
        }, callBack);
    };
    my.ocean = function (callBack, latitude, longitude, radius) {
        getGeoNames("oceanJSON", {
            "lat": latitude,
            "lng": longitude,
            "radius": radius
        }, callBack);
    };
    my.postalCodeCountryInfo = function (callBack) {
        getGeoNames("postalCodeCountryInfoJSON", {}, callBack);
    };
    my.postalCodeLookup = function (callBack, postalCode, countryCode, maxRows, charset) {
        getGeoNames("postalCodeLookupJSON", {
            "postalcode": postalCode,
            "country": countryCode,
            "maxRows": maxRows,
            "charset": charset
        }, callBack);
    };
    my.postalCodeSearch = function (callBack, postalCode, postalcode_startsWith, placename_startsWith, countryCode, countryBias, maxRows, style, operator, charset, isReduced) {
        getGeoNames("postalCodeSearchJSON", {
            "postalcode": postalCode,
            "postalcode_startsWith": postalcode_startsWith,
            "placename_startsWith": placename_startsWith,
            "country": countryCode,
            "countryBias": countryBias,
            "maxRows": maxRows,
            "style": style,
            "operator": operator,
            "charset": charset,
            "isReduced": isReduced
        }, callBack);
    };
    my.searchDirect = function (options, callBack) {
        getGeoNames("searchJSON", options, callBack);
    };

    my.search = function (callBack, q, name, name_equals, name_startsWith, maxRows, startRow, country, countryBias, continentCode, adminCode1, adminCode2, adminCode3, featureClass, featureCode, lang, type, style, isNameRequired, tag, operator, charset, fuzzy) {
        getGeoNames("searchJSON", {
            "q": q,
            "name": name,
            "name_equals": name_equals,
            "name_startsWith": name_startsWith,
            "maxRows": maxRows,
            "startRow": startRow,
            "country": country,
            "countryBias": countryBias,
            "continentCode": continentCode,
            "adminCode1": adminCode1,
            "adminCode2": adminCode2,
            "adminCode3": adminCode3,
            "featureClass": featureClass,
            "featureCode": featureCode,
            "lang": lang,
            "type": type,
            "style": style,
            "isNameRequired": isNameRequired,
            "tag": tag,
            "operator": operator,
            "charset": charset,
            "fuzzy": fuzzy
        }, callBack);
    };
    my.siblings = function (callBack, geonameId) {
        getGeoNames("siblingsJSON", {
            "geonameId": geonameId
        }, callBack);
    };
    my.srtm3 = function (callBack, latitude, longitude) {
        getGeoNames("srtm3JSON", {
            "lat": latitude,
            "lng": longitude
        }, callBack);
    };
    my.timezone = function (callBack, latitude, longitude, radius, date) {
        getGeoNames("timezoneJSON", {
            "lat": latitude,
            "lng": longitude,
            "radius": radius,
            "date": formatDate(date)
        }, callBack);
    };
    my.weather = function (callBack, north, south, east, west, maxRows) {
        getGeoNames("weatherJSON", {
            "north": north,
            "south": south,
            "east": east,
            "west": west,
            "maxRows": maxRows
        }, callBack);
    };
    my.weatherIcao = function (callBack, ICAO_AirportCode) {
        getGeoNames("weatherIcaoJSON", {
            "ICAO": ICAO_AirportCode
        }, callBack);
    };
    my.wikipediaBoundingBox = function (callBack, north, south, east, west, languageCode, maxRows) {
        getGeoNames("wikipediaBoundingBoxJSON", {
            "north": north,
            "south": south,
            "east": east,
            "west": west,
            "lang": languageCode,
            "maxRows": maxRows
        }, callBack);
    };
    my.wikipediaSearch = function (callBack, q, title, lang, maxRows) {
        getGeoNames("wikipediaSearchJSON", {
            "q": q,
            "title": title,
            "lang": lang,
            "maxRows": maxRows
        }, callBack);
    };

    return my;
}(jQuery));

(function ($) {
    $.fn.jeoCountrySelect = function (options) {
        var el = this;
        jeoquery.countryInfo(function (data) {
            var sortedNames = data.geonames;
            if (data.geonames.sort) {
                sortedNames = data.geonames.sort(function (a, b) {
                    return a.countryName.localeCompare(b.countryName);
                });
            }
            $(sortedNames).each(function () {
                el.append($("<option></option>").attr("value", this.countryCode).
                text(this.countryName));
            });
            if (options && options.callback) {
                options.callback();
            }
        }, '', options ? options.language : null);
    };

    $.fn.jeoPostalCodeLookup = function (options) {
        this.bind("change", function () {
            var code = $(this).val();
            var country = "EN";
            if (options.countryInput) {
                country = options.countryInput.val() || "EN";
            }
            if (code) {
                jeoquery.postalCodeLookup(function (data) {
                    if (data && data.postalcodes && data.postalcodes.length > 0) {
                        if (options) {
                            if (options.target) {
                                options.target.val(data.postalcodes[0].placeName);
                            }
                            if (options.callback) {
                                options.callback(data.postalcodes[0]);
                            }
                        }
                    }
                }, code, country);
            }
        });
    };

    $.fn.jeoCityAutoComplete = function (options) {
        this.autocomplete({
            source: function (request, response) {
                jeoquery.searchDirect({
                    featureClass: jeoquery.featureClass.PopulatedPlaceFeatures,
                    style: "full",
                    maxRows: 12,
                    name_startsWith: request.term
                }, function (data) {
                    response($.map(data.geonames, function (item) {
                        return {
                            label: item.name + (item.adminName1 ? ", " + item.adminName1 : "") + ", " + item.countryName,
                            value: item.name
                        };
                    }));
                });
            },
            minLength: 2,
            open: function () {
                $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
            },
            close: function () {
                $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
            }
        });
    };

})(jQuery);
