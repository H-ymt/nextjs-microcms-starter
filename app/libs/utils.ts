import { load } from "cheerio";
import hljs from "highlight.js";

export const formatRitchText = (ritchText: string) => {
  const $ = load(ritchText);
  $("pre code").each((_, elm) => {
    const lang = $(elm).attr("class");
    const res = lang
      ? hljs.highlight($(elm).text(), { language: lang?.replace(/^language-/, "") || "" })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });

  return $.html();
};
