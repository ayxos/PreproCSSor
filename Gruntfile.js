module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Create a simple Server using connect plugin
    connect: {
      server: {
        options: {
          port: 8001,
          hostname: 'localhost',
          base: 'dest',
          keepalive: true
        }
      }
    },

    shell: {
      //Create a simple Server using python simplehttpserver command
      startServer: {
        options: {
          stdout: true
        },
        command: 'python server.py',
        keepalive: true
      },
      //STOP a simple Server using python simplehttpserver command
      stopServer: {
        options: {
          stdout: true
        },
        command: 'fuser -k 8002/tcp'
      },
      //Create a complex server using node.js
      node: {
        options: {
          stdout: true
        },
        command: 'node server.js'
      },
    },



    clean: ['static'],

    jade: {
      html: {
        // files: [{
        //   expand: true,
        //   cwd: 'src/jade',
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
          'dest/css/styl.min.css': ['src/styl/*.styl']
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


  //server task to enable/init a python server
  grunt.registerTask('pyserver', ['shell:startServer']);
  //server task to disable a python server
  grunt.registerTask('pystop', ['shell:stopServer']);  
  //server task to enable/init a node server
  grunt.registerTask('nodeserver', ['shell:node']);

  //default task
  grunt.registerTask('default', ['clean', 'jade', 'stylus']);

};
