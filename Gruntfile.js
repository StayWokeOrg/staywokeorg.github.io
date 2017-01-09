/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    
    clean: {
      site: ['custom-styles.css']
    },
    
    less: {
      site: {
        src: ['less/custom-styles.less'],
        dest: 'css/custom-styles.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  
  grunt.registerTask('build', ['clean', 'less']);

  // Default task.
  grunt.registerTask('default', ['clean', 'build']);
};
