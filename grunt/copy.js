module.exports = function(grunt) {

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