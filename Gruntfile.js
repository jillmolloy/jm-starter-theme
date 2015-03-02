module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          'stylesheets/application.css' : 'assets/sass/application.scss'
        }
      }
    },

    uglify : {
      main : {
        src : [
          'assets/javascripts/application/main.js'
        ],
        dest : 'assets/javascripts/application.min.js'
      }
    },

    watch: {
      js: {
        files: ['assets/javascripts/application/*.js' ],
        tasks: ['uglify'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'assets/**/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      },
      php: {
        files: '**/*.php',
        options: {
          livereload: true
        }
      },
      images: {
        files: 'assets/images/{,*/}*'
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['assets/**/*.scss', 'assets/javascripts/*.js', '**/*.php'],
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch']);
}