import cheerio from "cheerio";

const url = "https://thethao247.vn/livescores/";

export default async function handlerCrawlTournament() {
  try {
    const response = await fetch(url, { cache: "no-cache", mode: "no-cors" });
    const html = await response.text();
    const $ = cheerio.load(html);

    let result = [] as any;
    $(".list-leagues .text-middle").each((index, item) => {
 
      if (!$(item).parents("#menuSections").length) {
        const nextPage = $(item).find("a").attr("href") as string;
        const league_name = $(item).find(".league-name").text().trim();
        const class_league_name = $(item)
          .find("span.flags-category")
          .attr("class");
        const imgFlag = $(item).find(".flags.flags-category").attr("src");
        const slug = nextPage.split("/")[3]
        
        result.push({
          league_name,
          class_league_name,
          nextPage,
          imgFlag,
          slug
        });
      }
    });

    return result;
  } catch (error) {
    console.log("Failed to retrieve page:", error);
    return null; // Trả về null hoặc giá trị mặc định nếu muốn xử lý lỗi một cách phù hợp
  }
}
