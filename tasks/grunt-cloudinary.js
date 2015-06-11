/*
 * grunt-cloudinary
 * https://github.com/lipcsei/grunt-cloudinary
 *
 * Copyright (c) 2014 Sandor Lipcsei
 * Licensed under the MIT license.
 */

'use strict';

var cloudinary = require('cloudinary');



module.exports = function (grunt) {
//
    grunt.registerMultiTask('cloudinary', 'Upload images to Cloudinary', function () {

        cloudinary.config(this.options());
        var done = this.async();
        cloudinary.api.resources(function (result) {
            console.log(result);
        });

        var data = [];

        this.filesSrc.forEach(function (imgSrc) {

            cloudinary.uploader.upload(imgSrc, function (result) {
                data[imgSrc] = result.url;
                //console.log(result.url);
                grunt.log.writeln('Uploading ' + result.url);
            }, {public_id: imgSrc});

        });
    });
};
