/**
 * @file Gruntfile
 * @copyright 2014 Cyan, Inc. All rights reserved.
 */

'use strict';

var CHROME_EXEC = '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome';
var __ = require('lodash');

var allJsFiles = [
    './Gruntfile.js',
    'src/public/js/*.js',
    'src/server/*.js',
    'spec/**/*.js',
];

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concurrent: {
            dev: ['static', 'nodemon', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },

        /**
            The nodemon task will start your node server. The watch parameter will tell
            nodemon what files to look at that will trigger a restart. Full grunt-nodemon
            documentation
        **/
        nodemon: {
            dev: {
                script: 'bin/start.js',
                options: {
                    /** Environment variables required by the NODE application **/
                    env: {
                          'NODE_ENV': 'development'
                        , 'NODE_CONFIG': 'dev'
                    },
                    nodeArgs: ['--debug'],
                    watch: ['server'],
                    delay: 300,

                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });

                        /** Open the application in a new browser window and is optional **/
                        nodemon.on('config:update', function () {
                            // Delay before server listens on port
                            setTimeout(function() {
                                require('open')('http://127.0.0.1:3000', CHROME_EXEC);
                            }, 1000);
                        });

                        /** Update .rebooted to fire Live-Reload **/
                        nodemon.on('restart', function () {
                            // Delay before server listens on port
                            setTimeout(function() {
                                require('fs').writeFileSync('.rebooted', 'rebooted');
                            }, 1000);
                        });
                    }
                }
            }
        },

        less: {
            compile: {
                files: [{
                    expand: true,
                    cwd: '.',
                    src: 'src/public/css/*.less',
                    ext: '.css',
                }],
            },
        },
        jade: {
            js: {
                options: {
                    namespace: false,
                    client: true,
                    amd: true,
                },
                files: [{
                    expand: true,
                    src: ['src/public/js/**/*.jade'],
                    ext: '.tmpl.js',
                }],
            },
            html: {
                options: {
                    pretty: true,
                    data: {
                        static: '..'
                    }
                },
                files: [{
                    expand: true,
                    src: ['src/server/**/*.jade'],
                    ext: '.html',
                }],
            }
        },
        watch: {
            files: ['src/**/*'],
            tasks: ['static'],
        },
        requirejs: {
            static: {
                options: {
                    modules: [{
                        name: 'main',
                    }],
                    dir: 'build/js',
                    mainConfigFile: 'src/public/app.config.js',
                },
            }
        },
        copy: {
            static: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/server/views/',
                        src: ['*.html'],
                        dest: 'static-build/html/',
                    },
                    {
                        expand: true,
                        cwd: 'src/public/',
                        src: ['css/*.css', 'lib/**', 'locales/**'],
                        dest: 'static-build/',
                    },
                    {
                        expand: true,
                        cwd: 'build/js',
                        src: ['*.js', '**/*.js', '**/templates/*.js'],
                        dest: 'static-build/js'
                    },
                ],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('run', ['concurrent:dev']);

    grunt.registerTask('build', ['jade', 'less']);
    grunt.registerTask('static', ['build', 'requirejs:static', 'copy:static']);
    grunt.registerTask('default', ['build']);
};
