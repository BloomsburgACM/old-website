'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Teams, app, auth, database) {

  app.get('/api/teams/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/api/teams/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/api/teams/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/api/teams/example/render', function(req, res, next) {
    Teams.render('index', {
      package: 'teams'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
