module.exports = function(grunt) {

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


    //grunt-svg-sprite
    grunt.config('svg_sprite', {
        options: {
            shape: {
                meta: '<%= config.sprite.data.dir %>/<%= config.sprite.data.file %>'
            },
            mode: {
                symbol: {
                    dest: '<%= config.sprite.svg.dest %>',
                    prefix: "svg-%s",
                    sprite: '<%= config.sprite.svg.file %>'
                }
            }
        },
        main: {
            expand: true,
            cwd: '<%= config.sprite.svg.dir %>',
            src: ['**/*.svg'],
            dest: "<%= config.image.dir %>"
        }
    });
};