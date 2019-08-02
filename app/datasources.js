
const redis = require('redis');
const Promesa = require('bluebird');
const client = Promesa.promisifyAll(
  redis.createClient(process.env.REDIS_URL, {no_ready_check: true})
  );
client.auth(process.env.REDIS_PASS);

module.exports = {
  redis: client
};
