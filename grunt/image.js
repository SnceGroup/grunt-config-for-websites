module.exports = function(grunt) {

    //grunt-svgmin
    grunt.config('svgmin', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= config.sprite.svg.dir  %>',
                src: ['*.svg'],
                dest: '<%= config.sprite.svg.dir  %>'
            }]
        }
    });


    //grunt-grunticon
    grunt.config('grunticon', {
        mainsprite: {
            files: [{
                expand: true,
                cwd: '<%= config.sprite.svg.dir  %>',
                src: ['*.svg', '*.png'],
                dest: "<%= config.image.dir  %>/sprite"
            }],
            options: {
                enhanceSVG: false, //Activate this if you need data-grunticon-embed option
                datasvgcss: '_icons-svg.scss',
                datapngcss: '_icons-png.scss',
                urlpngcss: '_icons-fallback.scss',
                cssprefix: '<%= config.sprite.svg.prefix  %>'
            }
        }
    });


    //grunt-contrib-imagemin
    grunt.config('imagemin', {
        main: {
            files: [{
                expand: true,
                cwd: '<%= config.image.dir  %>',
                src: '**/*.{png,jpg,jpeg,gif}',
                dest: '<%= config.image.dir  %>'
            }]
        }
    });
};