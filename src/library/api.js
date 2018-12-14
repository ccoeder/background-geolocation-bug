const instance = require("axios");

const axios = instance.create({
  baseURL: "https://randomuser.me"
});

export default axios;
