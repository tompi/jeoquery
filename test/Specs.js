describe("Validation", function() {
  jeoquery.defaultData.userName = 'tompi';
  it("Should not accept invalid method", function() {
    var nonExistingMethod = function() {
      jeoquery.getGeoNames('misspelledmethod');
    };
    expect(nonExistingMethod).toThrow();
  });
});
describe("Ajax", function() {
  it("Should find less than 500 hits when searching for london with featureclass underwater or road/railroad", function(done) {
    jeoquery.getGeoNames('search', {
      q: 'london',
      featureClass: [
        jeoquery.featureClass.Undersea,
        jeoquery.featureClass.RoadRailroad
      ]
    }, function(data) {
      var resultCount = data.totalResultsCount;
      expect(resultCount > 0 && resultCount < 500).toBeTruthy();
      done();
    });
  });
});
