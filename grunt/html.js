module.exports = function(grunt) {

    //grunt-twig-render
    grunt.config('twigRender', {
        dest: {
            files: [
                {
                    data: '<%= config.twig.data.dir  %>/<%= config.twig.data.file  %>',
                    expand: true,
                    cwd: '<%= config.twig.dir  %>',
                    src: ['*.twig'],
                    dest: '<%= config.html.dir  %>',
                    ext: '.html'
                }
            ]
        }
    });


    //grunt-w3c-html-validation
    grunt.config('validation', {
        options: {
            reset: true,
            stoponerror: false,
            reportpath: false,
            generateReport: false
        },
        files: {
            src: '<%= config.html.dir  %>/*.html'
        }
    });
};