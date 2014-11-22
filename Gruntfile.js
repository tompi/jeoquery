module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['*.js', 'test/*.js']
    },
    jasmine: {
      src: 'jeoquery.js',
      options: {
        vendor: [
          'test/lib/jquery.js',
          'test/lib/jasmine-jquery.js'
        ],
        specs: 'test/Specs.js'
      }      
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.registerTask('default', ['jshint', 'jasmine']);
  grunt.registerTask('test', ['jasmine']);
};

