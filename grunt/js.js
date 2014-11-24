module.exports = function(grunt) {

    //grunt-contrib-jshint
    grunt.config('jshint', {
        target: {
            src: ['<%= config.script.dir  %>/**/*.js']
        },
        options: {
            force: true,
            reporter: require('jshint-stylish')
        }
    });


    //grunt-contrib-uglify
    grunt.config('uglify', {
        target: {
            files: {
                '<%= config.js.dir  %>/<%= config.js.file  %>' : ['<%= config.js.dir  %>/app.js', '<%= config.script.dir  %>/**/*.js']
            }
        }
    });
};