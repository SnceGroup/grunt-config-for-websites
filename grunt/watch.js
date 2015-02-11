module.exports = function(grunt) {

    //grunt-contrib-watch
    grunt.config('watch', {
        options: {
            livereload: 35729
        },
        grunt: {
            files: ['Gruntfile.js']
        },
        script: {
            files: '<%= config.script.dir  %>/**/*.js',
            tasks: ['buildjs']
        },
        scss: {
            files: '<%= config.scss.dir  %>/**/*.{scss,sass}',
            tasks: ['buildcss']
        },
        html: {
            files: '<%= config.html.dir  %>/**/*.twig',
            tasks: ['buildhtml']
        }
    });

};