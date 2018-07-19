const cheerio = require('cheerio');

module.exports = page => {
    try {
        const $ = cheerio.load(page);

        const rating = $(".sku-info-actions .rating-average.cf .rating.big_stars .rating-wrapper span").text();
        const reviewsCount = $(".sku-info-actions .rating-average.cf .rating.big_stars .actual-rating").text();

        const skroutzData = {
            rating: rating,
            reviewsCount: reviewsCount
        };

        return Promise.resolve(skroutzData);
        
    } catch (error) {
        return Promise.reject(`Error parsing page: ${JSON.stringify(error)}`);
    }
};