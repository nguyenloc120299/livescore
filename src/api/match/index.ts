import cheerio from "cheerio";

export const handleCrawlMatchDetail = async (url: string) => {
  try {
    const response = await fetch(`https://thethao247.vn/livescores` + url, {
      mode: "no-cors",
    });
    const html = await response.text();
    const $ = cheerio.load(html);
    const name_home = $(".match-detail")
      .find(".match .home .title")
      .text()
      .trim();
    const name_away = $(".match-detail")
      .find(".match .away .title")
      .text()
      .trim();
    const logo_home = $(".match-detail .home")
      .find("img")

      .attr("data-original")
      ?.trim();
    const logo_away = $(".match-detail .away")
      .find("img")
      .attr("data-original")
      ?.trim();
    const status_match = $(".match-scores .status strong").text().trim();
    const score_home = $(".match-scores .score.home-team").text().trim();
    const score_away = $(".match-scores .score.away-team").text().trim();
    const time = $(".match-scores div.text-muted.fs-12").text().trim();
    const content_detail_event = $("#content_detail_event p")
      .map((i, el) => {
        return $(el).text().trim();
      })
      .get();
    const math_content = [] as any;

    $(".match-content .summary-data .mb-4").each((index, el) => {
      if (!$(el).text().trim()) return;
      const item_match = [] as any;
      const caption = $(el).find(".summary-caption .info strong").text().trim();

      $(el)
        .find(".summary-item")
        .each((i, el1) => {
          const hasFlexRowReverse = $(el1).hasClass("flex-row-reverse");
          const start_block = $(el1)
            .find(".start-block .info strong")
            .text()
            .trim();

          const time = $(el1).find(".center-block strong").text().trim();
          const icon_start = $(el1).find(".start-block .icon").html();
          const end_block = $(el1)
            .find(".end-block .info strong")
            .text()
            .trim();
          const icon_end = $(el1).find(".end-block .icon").html();

          item_match.push({
            hasFlexRowReverse,
            start_block,
            icon_start,
            end_block,
            icon_end,
            time,
          });
        });

      math_content.push({
        caption,

        item_match,
      });
    });

    return {
      detail: {
        content_detail_event,
        score: {
          time,
          status_match,
          score_home,
          score_away,
        },
        home: {
          name_home,
          logo_home,
        },
        away: {
          name_away,
          logo_away,
        },
      },
      math_content,
    };
  } catch (error) {
    console.log(error);
  }
};

export const handleCrawlMatchStatistics = async (url: string) => {

  try {
    const response = await fetch(
      `https://thethao247.vn/livescores` + url + "/statistics",
      {
        mode: "no-cors",
      }
    );
    const html = await response.text();
    const $ = cheerio.load(html);
    const data = $(".match-content .section-statistics .stat__row")
      .map((i, el) => {
        const stat_homeValue = $(el)
          .find(".stat__category .stat__homeValue")
          .text()
          .trim();
        const stat_categoryName = $(el)
          .find(".stat__category .stat__categoryName")
          .text()
          .trim();
        const stat_awayValue = $(el)
          .find(".stat__category .stat__awayValue")
          .text()
          .trim();

        const stat_bar_home =
          parseFloat(stat_homeValue) > parseFloat(stat_awayValue)
            ? $(el)
                .find(".stat__bar .stat__home .stat__betterSideBackground")
                .css("width")
            : $(el)
                .find(
                  ".stat__bar .stat__home .stat__worseSideOrEqualBackground"
                )
                .css("width");
        const stat_bar_away =
          parseFloat(stat_homeValue) > parseFloat(stat_awayValue)
            ? $(el)
                .find(
                  ".stat__bar .stat__away .stat__worseSideOrEqualBackground"
                )
                .css("width")
            : $(el)
                .find(".stat__bar .stat__away .stat__betterSideBackground")
                .css("width");
        return {
          stat__category: {
            stat_awayValue,
            stat_categoryName,
            stat_homeValue,
            stat_bar_home,
            stat_bar_away,
          },
        };
      })
      .get();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const handleCrawlMatchLineups = async (url: string) => {

  try {
    const response = await fetch(
      `https://thethao247.vn/livescores` + url + "/lineups",
      {
        mode: "no-cors",
      }
    );
    const html = await response.text();
    const $ = cheerio.load(html);
    const nameClubHome = $(".home-info .name").text().trim();
    const nameCoachHome = $(".home-info .name small").text().trim();
    const formationHome = $(".home-info .formation").text().trim();

    const nameClubAway = $(".away-info .name").text().trim();
    const nameCoachAway = $(".away-info .name small").text().trim();
    const formationAway = $(".away-info .formation").text().trim();

    const homeplayer = [] as Array<any>;
    const awayplayer = [] as Array<any>;
    const benchPlayerHome = [] as Array<any>;
    const benchPlayerAway = [] as Array<any>;
    const isField = $(".field").length > 0;
    if (isField) {
      $(".home .players-row").each((i, el) => {
        const playerInfo = [] as any;
        $(el)
          .find(".item li")
          .each((i, player) => {
            const name = $(player).find(".name").text().trim();
            const playerAvatar = $(player).find(".player-avatar").attr("src");
            const evt = $(player)
              .find(".evt")
              .map((idx, evtElement) => {
                return $(evtElement).html();
              })
              .get();
            playerInfo.push({
              name,
              playerAvatar,
              evt,
            });
          });
        homeplayer.push(playerInfo);
      });

      $(".away .players-row").each((i, el) => {
        const playerInfo = [] as any;
        $(el)
          .find(".item li")
          .each((i, player) => {
            const name = $(player).find(".name").text().trim();
            const playerAvatar = $(player).find(".player-avatar").attr("src");
            const evt = $(player)
              .find(".evt")
              .map((idx, evtElement) => {
                return $(evtElement).html();
              })
              .get();
            playerInfo.push({
              name,
              playerAvatar,
              evt,
            });
          });
        awayplayer.push(playerInfo);
      });

      $(".lineups .match-content.lineups  .lineups .home div").each((i, el) => {
        const numberPlayer = $(el).find(".number").text().trim();
        const avatarPlayer = $(el).find(".player-avatar").attr("src");
        const namePlayer = $(el).find(".info ").text().trim();
        const icons = $(el)
          .find(".info .evt")
          .map((i, item) => {
            return $(item).html();
          })
          .get();
        benchPlayerHome.push({
          numberPlayer,
          avatarPlayer,
          namePlayer,
          icons,
        });
      });

      $(".lineups .match-content.lineups  .lineups .away div").each((i, el) => {
        const numberPlayer = $(el).find(".number").text().trim();
        const avatarPlayer = $(el).find(".player-avatar").attr("src");
        const namePlayer = $(el).find(".info ").text().trim();
        const icons = $(el)
          .find(".info .evt")
          .map((i, item) => {
            return $(item).html();
          })
          .get();
        benchPlayerAway.push({
          numberPlayer,
          avatarPlayer,
          namePlayer,
          icons,
        });
      });
    } else {
      $(".home .d-flex.align-items-center.py-2.px-2").each((i, el) => {
        const numberPlayer = $(el).find(".number").text().trim();
        const avatarPlayer = $(el).find(".player-avatar").attr("src");
        const namePlayer = $(el).find(".info ").text().trim();
        homeplayer.push({
          numberPlayer,
          avatarPlayer,
          namePlayer,
        });
      });
      $(".away .d-flex.align-items-center.py-2").each((i, el) => {
        const numberPlayer = $(el).find(".number").text().trim();
        const avatarPlayer = $(el).find(".player-avatar").attr("src");
        const namePlayer = $(el).find(".info ").text().trim();
        awayplayer.push({
          numberPlayer,
          avatarPlayer,
          namePlayer,
        });
      });
    }

    return {
      benchPlayerAway,
      benchPlayerHome,
      isField,
      home: {
        homeplayer,
        nameClubHome,
        nameCoachHome,
        formationHome,
      },
      away: {
        awayplayer,
        nameCoachAway,
        nameClubAway,
        formationAway,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
