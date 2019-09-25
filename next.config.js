
// next-env

const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();
 
const withNextEnv = nextEnv();
 
module.exports = withNextEnv({
  // Your Next.js config.
});

//

const withCSS = require('@zeit/next-css')

module.exports = withCSS({

})
