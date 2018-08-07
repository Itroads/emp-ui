const path = require('path')
const rewireLess = require('react-app-rewire-less');

/**
 * @author Jiang yang
 * @version 0.0.1
 * 
 * Cover webpack's configure
 * @param { object } config webpack export.module = {...}
 * @param { string } env production || development
 * @return { object } custom config
 */
module.exports = function override(config, env) {
  if (env === "production") {

    // For require source file outside of src/. ( remove ModuleScopePlugin )
    config.resolve.plugins = []

    // For css module
    config.module.rules[1].oneOf[2].loader[2].options['modules'] = true

    // Path alias
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      "@api": path.resolve("src/api"),
      "@components": path.resolve("src/components"),
      "@containers": path.resolve("src/containers"),
      "@reducers": path.resolve("src/reducers"),
      "@styles": path.resolve("src/styles"),
      "@util": path.resolve("src/util"),
      "@static": path.join(process.cwd(), './static')
    })

  } else {

    // For require source file outside of src/. ( remove ModuleScopePlugin )
    config.resolve.plugins = []

    // For css module
    config.module.rules[1].oneOf[2].use[1].options['modules'] = true

    // Path alias
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      "@api": path.resolve("src/api"),
      "@components": path.resolve("src/components"),
      "@containers": path.resolve("src/containers"),
      "@reducers": path.resolve("src/reducers"),
      "@styles": path.resolve("src/styles"),
      "@util": path.resolve("src/util"),
      "@static": path.join(process.cwd(), './static')
    })
  }
  
  // To support less
  config = rewireLess(config, env);

  return config;
}