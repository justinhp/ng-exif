# ng-exif
Lightweight Angular directive wrapper of exif-js (https://github.com/exif-js/exif-js) for reading EXIF image metadata 



Setup
-----

1) Install with bower:

    bower install ng-exif --save

2) Add script references. exif.js must come before ng-exif.js:

    <script src='/bower_components/exif-js/exif.js'></script>
    <script src='/bower_components/ng-exif/ng-exif.js'></script>

3) Inject ng-exif into your module:

    angular.module('app', ['ng.exif']);

How It Works
-----
1. When a file or files are selected exif.js verifies if it is a jpg image.
2. If the file is a valid jpg image then exif.js grabs all the meta data it can from it
3. exif.js adds two properties: exifdata and iptcdata
4. ng-exif makes sure that those two properties are added to the parent's scope's models

Usage
-----

Normally used with other angular libraries such as:
- angular-file-model (https://github.com/ghostbar/angular-file-model)
- ng-file-upload (https://github.com/danialfarid/ng-file-upload).

Here is an example with angular-file-model

    <input type='file' file-model='imageFile' ng-exif-file='imageFile'>
