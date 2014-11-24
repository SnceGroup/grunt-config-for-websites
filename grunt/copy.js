module.exports = function(grunt) {

    //grunt-contrib-copy
    grunt.config('copy', {
        assets: {
            files: [
                {
                    cwd: '<%= config.css.dir  %>',
                    src: '*.css',
                    dest: '../src/<%= config.bundle.namespace  %>/Resources/public/css',
                    expand: true
                },
                {
                    cwd: '<%= config.js.dir  %>',
                    src: ['*.js', '!app.js'],
                    dest: '../src/<%= config.bundle.namespace  %>/Resources/public/js',
                    expand: true
                },
                {
                    cwd: '<%= config.image.dir  %>',
                    src: '**/*',
                    dest: '../src/<%= config.bundle.namespace  %>/Resources/public/images',
                    expand: true
                }
            ]
        }
    });


    //grunt-ssh
    grunt.config('sftp', {
        deployhtml: {
            files: {
                "./": [
                    '<%= config.css.dir  %>/*.css',
                    '<%= config.js.dir  %>/*.js',
                    '<%= config.image.dir  %>/**/*',
                    '<%= config.html.dir  %>/*.html',
                    'index.html'
                    ]
            },
            options: {
                host: '<%= config.server.snce.hostname  %>',
                username: '<%= config.server.snce.username  %>',
                password: '<%= config.server.snce.password  %>',
                path: "<%= config.server.snce.project.dir  %>/<%= config.server.snce.project.name  %>",
                showProgress: true,
                createDirectories: true
            }
        }
    });
};