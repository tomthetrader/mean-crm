
// we import our REST controller into the config 
var rest = require('../server/controllers/rest');

// get an instance of the express router
var apiRouter = express.Router();     


module.exports = function(app){

  // basic route for our homepage
  app.get('/', function(req, res){
    res.send('Welcome to the home page!')
  });

  // test route to make sure everything is working
  // accessed at GET http://localhost:<portNumber>/api
  apiRouter.get('/', function(req, res) {
    res.json({ message: 'Hooray! Welcome to our api!' });
  });

  
};