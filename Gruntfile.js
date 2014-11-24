module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        config: grunt.file.readJSON('grunt/config.json')
    });


    //load tasks when they are needed
    require('jit-grunt')(grunt, {
        svgsprite: 'grunt-svg-sprite',
        validation: 'grunt-html-validation',
        sftp: 'grunt-ssh'
    });


    //load tasks configurations from external files
    grunt.loadTasks('grunt');


    //custom tasks
    grunt.registerTask('buildimages', ['newer:imagemin:main', 'svgsprite:mainsprite']);
    grunt.registerTask('buildcss', ['sass:dist', 'autoprefixer', 'cssmin', 'csslint']);
    grunt.registerTask('buildjs', ['newer:jshint:target', 'uglify']);
    grunt.registerTask('buildhtml', ['php2html:target', 'newer:validation:files']);

    grunt.registerTask('build', ['buildimages', 'buildcss', 'buildjs', 'buildhtml']);
    grunt.registerTask('copyassets', ['copy:assets']);
    grunt.registerTask('deploytpl', ['sftp:deployhtml']);

    grunt.registerTask('default', ['build','watch']);

};