module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        dist: {
            src: [
                    'node_modules/angular/angular.min.js',
                    'src/js/app.js',
                    'src/js/factory/**/*.js',
                    'src/js/directive/**/*.js',
                    'src/js/controller/**/*.js'
            ],
            dest: 'build/js/<%= pkg.name %>.min.js'
        }
    },
        copy: {
            main: {
                expand: true,
                cwd: 'src',
                src: 'index.html',
                dest: 'build/',
                    }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js', 'src/**/*.html'],
                tasks: ['dev'],
                options: {
                    spawn: false,
                }
            }
        }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-watch');
    
grunt.registerTask('dev', ['copy','uglify']);
grunt.registerTask('default', ['watch']);

}   