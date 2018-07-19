const request = require("request-promise");
const AWS = require("aws-sdk");

const productsList = [
  "13867031/Samsung-860-Evo-250GB.html",
  "5918223/Samsung-850-Evo-500GB.html",
  "9527729/Crucial-MX300-525GB.html"
];

function deployScraper(productName) {
  const lambda = new AWS.Lambda({
    region: "us-west-2"
  });

  const params = {
    FunctionName: "skroutz-scraper-dev-scraper",
    InvocationType: "RequestResponse",
    LogType: "Tail",
    Payload: JSON.stringify(productName)
  };

  return lambda.invoke(params, function(error, data) {
    if (error) {
      console.error(JSON.stringify(error));
      return new Error(`Error scraping: ${JSON.stringify(error)}`);
    } else if (data) {
      console.log(data);
      return JSON.stringify(data);
    }
  });
}

function swarm(arr) {
  arr.forEach(productName => {
    deployScraper(productName);
  });
}

swarm(productsList);
