test("validation", function() {
  ok(typeof jeoquery !== 'undefined');
  throws(function() {
    jeoquery.getGeoNames('misspelledmethod');
  }, 'Should not accept invalid method');
});
