const axios = require('axios');
const { logger } = require('../logger');

class RestUtils {

    constructor() { }

    static async putRedis(redis, sku, dataProduct) {
        redis.set(sku, JSON.stringify(dataProduct), 'EX', 60);
        logger.info(`products load from url ${sku} `);
    }

    static createResponse(data, code) {
        let message = (code != 200) ? 'error' : 'success';

        return {
            body: data,
            status: {
                message: message,
                code: code
            }
        }
    }

    static async callUrl(productUrl) {
        try {
            response = await axios.get(productUrl);
            responseData = response.data;
        } catch (err) {
            responseData = null;
        } finally {
            return responseData;
        }
    }

    static errorGenerado() {
        // Random 10% error 
        let random = Math.random();
        if (random < 0.11) {
            logger.error('error 10%');
            throw new Error();
        }
    }

    static async checkRedis(redis, sku) {
        console.log("se buca en redis");
        let productData = null;
        let checkRedis = false;

        if (redis) {
            checkRedis = await redis.getAsync(sku);
        }

        if (checkRedis) {
            productData = JSON.parse(checkRedis.toString());
            productData.cache = true;
            logger.info(`carga en redis ${sku}`);
        }
        console.log("productData::" + productData);
        return productData;

    }

}

module.exports = {RestUtils}