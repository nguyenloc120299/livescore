import cheerio from "cheerio";

export const handleCrawlLeagueHead = async (url: string) => {
  try {
    const response = await fetch(`https://thethao247.vn/livescores` + url, {
      mode: "no-cors",
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    
  } catch (error) {
    console.log(error);
  }
};


