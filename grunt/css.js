module.exports = function(grunt) {

    //grunt-sass
    grunt.config('sass', {
        options: {
            outputStyle: 'expanded',
            //includePaths: ['<%= config.scss.includePaths  %>'],
            sourceComments: true
        },
        dist: {
            files: {
                '<%= config.css.dir  %>/<%= config.css.fileExpanded  %>': '<%= config.scss.dir  %>/<%= config.scss.file  %>'
            }
        }
    });


    //grunt-postcss
    grunt.config('postcss', {
        options: {
            processors: [
                require('autoprefixer-core')({browsers: ['> 1%', 'last 2 versions', 'ie 8', 'ie 9', 'ie 10']})
            ]
        },
        dist: {
            files: {
                '<%= config.css.dir  %>/<%= config.css.fileExpanded  %>': '<%= config.css.dir  %>/<%= config.css.fileExpanded  %>'
            }
        }
    });


    //grunt-contrib-cssmin
    grunt.config('cssmin', {
        target: {
            src: '<%= config.css.dir  %>/<%= config.css.fileExpanded  %>',
            dest: '<%= config.css.dir  %>/<%= config.css.file  %>'
        }
    });


    //grunt-contrib-csslint
    grunt.config('csslint', {
        options: {
            csslintrc: 'grunt/.csslintrc'
        },
        strict: {
            src: ['<%= config.css.dir  %>/<%= config.css.file  %>']
        }
    });
};