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


    //grunt-contrib-concat
    grunt.config('concat', {
        expanded: {
            src: ['<%= config.js.dir  %>/app.js', '<%= config.script.dir  %>/**/*.js'],
            dest: '<%= config.js.dir  %>/<%= config.js.fileExpanded  %>'
        }
    });


    //grunt-contrib-uglify
    grunt.config('uglify', {
        options: {
            //compress: true,
            //mangle: true
        },
        compressed: {
            files: {
                '<%= config.js.dir  %>/<%= config.js.file  %>' : ['<%= config.js.dir  %>/<%= config.js.fileExpanded  %>']
            }
        }
    });
};