'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Resources = new Module('resources');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Resources.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Resources.routes(app, auth, database);

  //We are adding a link to the main menu for all users
  Resources.menus.add({
    title: 'Resources',
    link: 'resources page',
    roles: ['all'],
    menu: 'main'
  });
  
  Resources.aggregateAsset('css', 'resources.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Resources.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Resources.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Resources.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Resources;
});
