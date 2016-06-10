module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      src: ['dist']
    },
    zip: {
      default: {
        router: function (filePath) {
          return filePath.substring('src/'.length);
        },
        src: 'src/**',
        dest: 'dist/<%= pkg.name %>.mpk'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['clean', 'zip']);

};