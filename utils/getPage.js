const request = require('request-promise');

module.exports = productName => {
    //Example url and serverless command
    //https://www.skroutz.gr/s/13867031/Samsung-860-Evo-250GB.html
    //serverless invoke local -f scraper -d "13867031/Samsung-860-Evo-250GB.html"
    const url = `https://www.skroutz.gr/s/${productName}`;
    return request({ method: 'GET', url: url });
};

