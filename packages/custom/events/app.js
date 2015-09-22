'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Events = new Module('events');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Events.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Events.routes(app, auth, database);

  //We are adding a link to the main menu for all users
  Events.menus.add({
    title: 'Events',
    link: 'events page',
    roles: ['all'],
    menu: 'main'
  });
  
  Events.aggregateAsset('css', 'events.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Events.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Events.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Events.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Events;
});
