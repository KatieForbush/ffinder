var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/:friends?", function(req, res) {
        friends.findAll().then(function(result) {
            return res.json(result);
          });
        }
        
    )}

  app.post("/api/new", function(req, res) {
    // Take the request...
    var friend = req.body;

    var routeName = friend.name.replace(/\s+/g, "").toLowerCase();

    friend.create({
      routeName: routeName,
      name: friend.name,
      age: character.age,
      quizResults: friend.quizResults
      
    });

    res.status(204).end();
  });