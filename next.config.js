const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const env = {
    mongodb_username: "carlos",
    mongodb_password: "bjQhUXMdlbEDEaU7",
    mongodb_clustername: "cluster0",
    mongodb_database: isDev ? "meetups-dev" : "meetups",
  };

  return {
    env,
    images: {
      domains: ['images.adsttc.com', 'encrypted-tbn0.gstatic.com', 'www.blita.com']
    },
  };
};
