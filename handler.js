'use strict';

const {getPage, parsePage, saveReviewsToDB} = require('./utils');

module.exports.scraper = (event, context, callback) => {
  getPage(event)
  .then(page => parsePage(page))
  .then(skroutzData => saveReviewsToDB(skroutzData, event))
  .then(() =>
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          message: `Scraped ${event}`
        })
      })
    )
    .catch(error =>
      callback(new Error(`Error scraping ${event}: ${JSON.stringify(error)}`))
    );
  };