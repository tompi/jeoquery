test("validation", function() {
  ok(typeof jeoquery !== 'undefined');
  throws(function() {
    jeoquery.getGeoNames('misspelledmethod');
  }, 'Should not accept invalid method');
  throws(function() {
    jeoquery.getGeoNames('search');
  }, 'Should not accept method without parameters.');
});
