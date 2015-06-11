/*
 * grunt-gss-to-json
 * https://github.com/stpe/grunt-gss-to-json
 *
 * Copyright (c) 2014 Stefan Pettersson
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        //config: grunt.file.readJSON('config.json'),

        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            tests: ['tmp']
        },

        cloudinary: {
            dev: {
                options: {
                    cloud_name: 'dzart11a5',
                    api_key: '336468336281379',
                    api_secret: 'jXXRGYO0nFp7fvMfIv6IKzhiNFM'
                },
                src: ['img/*.jpg']
            }
        }

    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'clean', 'cloudinary']);

};
