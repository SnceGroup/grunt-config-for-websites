module.exports = function(grunt) {

    //grunt-php2html
    grunt.config('php2html', {
        options: {
            serverPort: 8181,
            htmlhintrc: 'grunt/.htmlhintrc'
        },
        target: {
            expand: true,
            cwd: '<%= config.php.dir  %>',
            src: ['*.php'],
            dest: '<%= config.html.dir  %>',
            ext: '.html'
        }
    });


    //grunt-html-validation
    grunt.config('validation', {
        options: {
            reset: true,
            stoponerror: false,
            reportpath: false
        },
        files: {
            src: '<%= config.html.dir  %>/*.html'
        }
    });
};