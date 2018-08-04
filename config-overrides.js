const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  if (env === "production") {
    config.module.rules[1].oneOf[2].loader[2].options['modules'] = true
  } else {
    config.module.rules[1].oneOf[2].use[1].options['modules'] = true
  }
  
  config = rewireLess(config, env);

  return config;
}