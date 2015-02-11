module.exports = function(grunt) {

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


    //css-sprite
    grunt.config('css_sprite', {
        options: {
            'processor': 'scss'
        },
        sprite: {
            options: {
                'style': 'scss/sprite/_sprite-png.scss'
            },
            src: '<%= config.sprite.png.dir  %>/**/*',
            dest: '<%= config.image.dir  %>/sprite'
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