const axios = require('axios');

exports.generateSEOService = async (url) => {
  if (!url || !url.startsWith('http')) {
    throw new Error('Valid URL is required');
  }

  const { data: html } = await axios.get(url);

  const metaTagCount = (html.match(/<meta/g) || []).length;
  const h1Count = (html.match(/<h1/g) || []).length;
  const keywordMention = (html.match(/seo/gi) || []).length;

  return {
    url,
    metaTags: metaTagCount,
    h1Tags: h1Count,
    keywordDensity: keywordMention,
    recommendation: keywordMention < 5 ? 'Add more SEO keywords' : 'Good SEO coverage'
  };
};
