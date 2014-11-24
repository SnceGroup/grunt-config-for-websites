module.exports = function(grunt) {

    //grunt-svg-sprite
    grunt.config('svgsprite', {
        options: {
            common: "icon",
            prefix: '<%= config.sprite.svg.prefix  %>',
            spritedir: '../<%= config.image.dir  %>',
            render: {
                css: false,
                scss: '../scss/sprite/_sprite-svg'
            },
            cleanwith: 'svgo'
        },
        mainsprite: {
            src: '<%= config.sprite.svg.dir  %>',
            dest: '<%= config.image.dir  %>'
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