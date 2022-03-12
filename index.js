const finder = require('node-data-finder')
const KeyvMongoDB = require('keyv-mongodb')

/**
 * 
 * @param {string} query
 * @param {string} type 
 * @param {string} url mongodb url i.e. `mongodb://localhost/test-app`
 * @param {Date | number} timeout (optional) how long to cache data, defaults to 1 hour
 * @returns 
 */
function find(type, query, url, timeout) {
    return finder.find(type, query, timeout, new KeyvMongoDB({ url }))
}

module.exports = { find }