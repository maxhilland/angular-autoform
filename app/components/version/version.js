'use strict';

angular.module('autoform.version', [
  'autoform.version.interpolate-filter',
  'autoform.version.version-directive'
])

.value('version', '0.1');
