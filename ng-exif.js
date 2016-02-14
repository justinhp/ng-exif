'use strict';

angular.module('ng.exif', [])
    .directive('ngExifFile', [, function () {

        function getExifData(image){
          return EXIF.getData(image, function () {});
        }

        return {
            restrict: 'A',
            scope: {
                file: '=ngExifFile'
            },
            link: function(scope, element, attrs){
                scope.$watch('file', function(newVal, oldVal){
                    if(angular.isArray(newVal)){
                        for(var i = 0; i < newVal.length; i++){
                            getExifData(newVal[i]);
                        }
                    }
                    else {
                        getExifData(newVal);
                    }
                });
            }
        };
    }]);
