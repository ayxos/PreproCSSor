module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // connect: {
    //   server: {
    //     options: {
    //       port: 8001,
    //       hostname: 'localhost',
    //       base: 'dest',
    //       keepalive: true
    //     }
    //   }
    // },

    shell: {
      pythonServer: {
        options: {
          stdout: true
        },
        command: 'python server.py',
        keepalive: true
      }
//      pythonStopServer: {
//        options: {
//          stdout: true
//        },
//        command: 'python server.py QUIT'
//      },
    },

    clean: ['static'],

    jade: {
      html: {
        // files: [{
        //   expand: false,
        //   src: ['src/jade/*.jade'],
        //   dest: 'dest/html/',
        //   ext: '.html'
        // }]
        files: {
          'dest/index.html': ['src/jade/index.jade']
        }
      }
    },

    stylus: {
      compile: {
        files: {
          'dest/css/styl.min.css': ['src/styl/stylesheet.styl']
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
        files: ['src/jade/**/*.jade'],
        tasks: ['jade']
      },
      stylus: {
        files: ['src/styl/**/*.styl'],
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
  // executing shell commands
  grunt.loadNpmTasks('grunt-shell');
  // executing connect server commands
  grunt.loadNpmTasks('grunt-contrib-connect');

  //server task to enable/init a server
  grunt.registerTask('server', ['clean', 'jade', 'stylus', 'connect', 'watch']);
  //server task to enable/init a server
  grunt.registerTask('serpy', ['shell:pythonServer']);
  //default task
  grunt.registerTask('default', ['clean', 'jade', 'stylus']);

};
