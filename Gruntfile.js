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
        watch: {
            sass: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.registerTask('default', ['sass', 'watch', 'autoprefixer']);
};