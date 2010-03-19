SRCHR = SRCHR || {};

SRCHR.Config = {
    "QUERY_INTERFACE" : "http://query.yahooapis.com/v1/public/yql?"
};

SRCHR.Initialize = function() {
    // this.Loader.use('tester'); // test load a module
    // bind the search box to do a yql query
    $("#search").keypress(function(evt) { // TODO: include this id as a default in the configuration interface.
        if(evt.keyCode === 13) { // on enter, perform the search
            SRCHR.Search($(this).val());
        }
    }); 
};

SRCHR.Search = function(query) {
    console.log(query);
    // figure out what we are searching
    
    // generate the search query based on input and filters selected
    
    // do the yql search
    
    // normalize the data for our interface?
    
    // tell the interface to update with the results
    this.UpdateUI(query);
};

SRCHR.UpdateUI = function(results) {
    $("#results").append($("<li>" + results + "</li>")); // stub
    // show loading indicator
    
    // update terms pane
    
    // update results pane
    
    // hide loading indicator
};
