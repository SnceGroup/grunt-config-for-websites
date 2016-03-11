module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('grunt/config.json')
    });


    //load tasks when they are needed
    require('jit-grunt')(grunt, {
        validation: 'grunt-w3c-html-validation',
        sftp: 'grunt-ssh'
    });


    //load tasks configurations from external files
    grunt.loadTasks('grunt');


    //custom tasks
    grunt.registerTask('buildimages', ['newer:imagemin:main', 'svg_sprite:main']);
    grunt.registerTask('buildcss', ['sass:dist', 'postcss', 'cssmin', 'csslint']);
    grunt.registerTask('buildjs', ['newer:jshint:target', 'concat:expanded', 'uglify']);
    grunt.registerTask('buildhtml', ['twigRender:dest', 'newer:validation:files']);

    grunt.registerTask('build', ['buildimages', 'buildcss', 'buildjs', 'buildhtml']);
    grunt.registerTask('copyassets', ['copy:assets']);
    grunt.registerTask('deploytpl', ['sftp:deployhtml']);

    grunt.registerTask('default', ['build','watch']);

};