module.exports = function(grunt) {

    //grunt-sass
    grunt.config('sass', {
        options: {
            outputStyle: 'expanded',
            imagePath: '../<%= config.image.dir  %>'
        },
        dist: {
            files: {
                '<%= config.css.dir  %>/<%= config.css.file  %>': '<%= config.scss.dir  %>/<%= config.scss.file  %>'
            }
        }
    });


    //grunt-autoprefixer
    grunt.config('autoprefixer', {
        options: {
            browsers: ['> 1%', 'last 2 versions', 'ie 8', 'ie 9', 'ie 10']
        },
        dist: {
            files: {
                '<%= config.css.dir  %>/<%= config.css.file  %>': '<%= config.css.dir  %>/<%= config.css.file  %>'
            }
        }
    });


    //grunt-contrib-cssmin
    grunt.config('cssmin', {
        target: {
            src: '<%= config.css.dir  %>/<%= config.css.file  %>',
            dest: '<%= config.css.dir  %>/<%= config.css.file  %>'
        }
    });


    //grunt-contrib-csslint
    grunt.config('csslint', {
        options: {
            csslintrc: 'grunt/.csslintrc'
        },
        strict: {
            src: ['<%= config.css.dir  %>/*.css']
        }
    });
};