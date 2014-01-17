module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: ['src/**/*.js'],
    //     dest: 'dist/<%= pkg.name %>.js'
    //   }
    // },
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    //   },
    //   dist: {
    //     files: {
    //       'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
    //     }
    //   }
    // },
    // jshint: {
    //   files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //   options: {
    //     // options here to override JSHint defaults
    //     globals: {
    //       jQuery: true,
    //       console: true,
    //       module: true,
    //       document: true
    //     }
    //   }
    // },

    clean: ['static'],

    jade: {
      html: {
        files: [{
          expand: true,
          src: ['jade/*.jade'],
          dest: 'static/html/',
          ext: '.html'
        }]
      }
    },

    stylus: {
      compile: {
        files: {
          'static/css/styl.min.css': ['styl/stylesheet.styl']
        }
      }
    },

    watch: {
      options: {
        livereload: true,
        event: ['added', 'changed']
      },
      clean: ['static'],
      jade: {
        files: ['jade/**/*.jade'],
        tasks: ['jade']
      },
      stylus: {
        files: ['styl/**/*.styl'],
        tasks: ['stylus']
      },
    }
  });


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');

  // Compile Jade templates to JavaScript !!!IMPORTANT there is another contrib from jade to JS
  grunt.loadNpmTasks('grunt-contrib-jade');
  // Compile Stylus style sheets to CSS
  grunt.loadNpmTasks('grunt-contrib-stylus');
  // Remove files
  grunt.loadNpmTasks('grunt-contrib-clean');

  //default task
  grunt.registerTask('default', ['clean', 'jade', 'stylus']);

};