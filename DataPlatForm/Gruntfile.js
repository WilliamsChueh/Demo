module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['gen/out_nodejs', 'gen/out_api'],
      release: {
        options: {
          'no-write': true
        },
        src: ['gen/out_nodejs', 'gen/out_api']
      }
    },
    copy: {
      html: {
        files: []
      },
      main: {
        files: [{
            src: 'system-prod.ini',
            dest: 'target/system.ini'
          }, {
            src: 'manifest-prod.json',
            dest: 'target/manifest.json'
          }, {
            expand: true,
            src: ['config/*'],
            dest: 'target/'
          },
          {
            expand: true,
            src: ['images/*'],
            dest: 'target/',
            filter: 'isFile'
          },
          {
            expand: true,
            src: ['lib/*'],
            dest: 'target/'
          },
          {
            expand: true,
            src: ['resources/**'],
            dest: 'target/'
          },
          {
            expand: true,
            src: ['_locales/**'],
            dest: 'target/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['clean', 'copy']);

};