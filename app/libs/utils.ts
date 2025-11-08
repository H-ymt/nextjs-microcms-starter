import { load } from "cheerio";
import hljs from "highlight.js";

const LANGUAGE_PREFIX_REGEX = /^language-/;

export const formatRitchText = (ritchText: string) => {
  const $ = load(ritchText);
  $("pre code").each((_, elm) => {
    const lang = $(elm).attr("class");
    const res = lang
      ? hljs.highlight($(elm).text(), {
          language: lang?.replace(LANGUAGE_PREFIX_REGEX, "") || "",
        })
      : hljs.highlightAuto($(elm).text());
    $(elm).html(res.value);
  });

  return $.html();
};
