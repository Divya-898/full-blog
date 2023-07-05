/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const {PHASE_DEVELOPMENT_SERVER} = require('next/constants');

module.exports = (phase) =>{
  if(phase === PHASE_DEVELOPMENT_SERVER){
  return{
    env: {
      mongodb_username: 'Divya',
      mongodb_password: 'HGM9p3kzL6vRMRPN',
      mongodb_database: 'my-site-dev',
       mongodb_clustername:'cluster0',
    }
  }
  };
  return{
  env: {
    mongodb_username: 'Divya',
    mongodb_password: 'HGM9p3kzL6vRMRPN',
    mongodb_database: 'my-site',
     mongodb_clustername:'cluster0',
  }

}
}
