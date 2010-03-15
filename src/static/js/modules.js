// Modules for the YUI Loader to add to its manifest.

SRCHR = {};

SRCHR.Modules = {
    // Base App Files
    'srchr.app' : { type: 'js', varName: 'srchr.app', path: 'js/srchr.js', requires: ['jq', 'srchr.css'] },
    'srchr.css' : { type: 'css', varName: 'srchr.css', path: 'css/srchr.css' },
    
    // External Libs
    // 'jq' is used because funky things happen if you use 'jquery' as the var name here ;)
    'jq' : { type: 'js', varName: 'jq', fullpath: 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js' },
    
    // Test Related
    'tester' : { type: 'js', varName: 'tester', path: 'js/test.js' },
};