module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['*.js', 'test/*.js']
    },
    qunit: {
      files: ['test/test.html']
    }

  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.registerTask('default', ['jshint', 'qunit']);
  grunt.registerTask('test', ['qunit']);
};

