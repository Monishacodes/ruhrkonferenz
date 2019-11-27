module.exports = function (grunt) {
    grunt.initConfig({
        postcss: {
            options: {
              map: true,
              processors: [
                require('lost')
              ]
            },
            dist: {
              src: 'css/style.css',
              dest: 'dist/style.css'
            }
          },
          autoprefixer: {
            single_file: {
              src: 'css/style.css',
              dest: 'dist/style.css'
            }
          },
        watch: {
            src: {
                files: ['**/*.scss'],
                tasks: ['sass:dev','postcss']
            },
            options: {
                livereload: true,
            },
        },
        sass: {
            options: {
                sourcemap: false,
                precision: 8,
                lineNumbers: true
            },
            dev: {
                files: [{
                    expand: 'expanded',
                    check: false,
                    update: false,
                    cwd: './src/Components',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        },
    });
 

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');	
    grunt.registerTask('watchfiles', ['sass', 'watch:css' ]);
    grunt.registerTask('default', ['watch','postcss']);
};