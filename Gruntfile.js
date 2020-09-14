module.exports = function(grunt) {

    const sass = require('node-sass');
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
            dist: {
                files: {
                    'styles/main.css':'styles/main.css'
                }
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/menu.js', 'js/scrollAnimation.js'],
                dest: 'js/scripts.js',
            }
        },
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['**/*.js'],
                tasks: ['concat']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass', 'watch', 'autoprefixer']);
};