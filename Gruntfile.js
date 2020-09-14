module.exports = function(grunt) {

    var sass = require('node-sass');
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
            },
            dist: {
                files: {
                    'styles/main.css':'styles/scss/main.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            dist: {
                files: {
                    'styles/main.css':'styles/main.css'
                }
            }
        },
        concat: {
            dist: {
                src: ['js/debounce.js', 'js/menu.js', 'js/scrollAnimation.js'],
                dest: 'js/scripts.js',
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch', 'autoprefixer']);
};