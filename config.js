const nconf = require("nconf");

nconf.file("keys.json");

module.exports = {
    witaikey: process.env.witaikey || nconf.get("witaikey"),
    aboutme: process.env.aboutme || nconf.get("aboutme")
};