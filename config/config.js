// SPECIFY CONFIG SETTINGS
// ==========================

// Set environment to development
var env = process.env.NODE_ENV || 'development';          

// Set server config
var config = {
  port: 3000,                                        
  db: 'mongodb://localhost/songs',
  host: 'localhost'                              
};

// If in production environment then change to production DB
if (env === "production") {                                     
  config.db = 'mongodb://my.production.server/songs';
}

module.exports = config;
