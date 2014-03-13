// Generated on 2014-02-05 using generator-angular-fullstack 1.2.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    watch: {
      livereload: {
        files: [ // Put path to files you watch to watch here. If you get call stack size errors, reduce number of files being watched
          "apps/core/app/views/**/*"
        ],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
