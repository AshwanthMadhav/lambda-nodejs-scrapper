const cheerio = require('cheerio');

const extract = (html) => {
    const $ = cheerio.load(html);
    resObj = {}
    var title = $('head title').text()
    let description = $('meta[name="description"]').attr('content')
    let ogTitle = $('meta[property="og:title"]').attr('content')
    let ogDescription = $('meta[property="og:description"]').attr('content')
    let ogImage = $('meta[property="og:image"]').attr('content')
    let ogkeywords = $('meta[property="og:keywords"]').attr('content')
    let images = $('img');
    if (title) resObj.title = title
    if (description) resObj.description = description
    if (ogTitle) resObj.ogTitle = ogTitle
    if (ogDescription) resObj.ogDescription = ogDescription
    if (ogImage) resObj.ogImage = ogImage
    if (ogkeywords) resObj.ogkeywords = ogkeywords
    if (images && images.length) {
        resObj.images = [];

        for (var i = 0; i < images.length; i++) {
            resObj.images.push($(images[i]).attr('src'));
        }
    }
    return resObj
}

module.exports = {
    extract
};