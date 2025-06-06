/**
 * Locale character mapping rules.
 */
interface Locale {
  regexp: RegExp;
  map: Record<string, string>;
}

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
const SUPPORTED_LOCALE: Record<string, Locale> = {
  tr: {
    regexp: /\u0130|\u0049|\u0049\u0307/g,
    map: {
      İ: "\u0069",
      I: "\u0131",
      İ: "\u0069",
    },
  },
  az: {
    regexp: /\u0130/g,
    map: {
      İ: "\u0069",
      I: "\u0131",
      İ: "\u0069",
    },
  },
  lt: {
    regexp: /\u0049|\u004A|\u012E|\u00CC|\u00CD|\u0128/g,
    map: {
      I: "\u0069\u0307",
      J: "\u006A\u0307",
      Į: "\u012F\u0307",
      Ì: "\u0069\u0307\u0300",
      Í: "\u0069\u0307\u0301",
      Ĩ: "\u0069\u0307\u0303",
    },
  },
};

/**
 * Localized lower case.
 */
export function localeLowerCase(str: string, locale: string) {
  // Handle null/undefined inputs gracefully
  if (!str) return "";

  const lang = SUPPORTED_LOCALE[locale.toLowerCase()];
  if (lang) return lowerCase(str.replace(lang.regexp, (m) => lang.map[m]));
  return lowerCase(str);
}

/**
 * Lower case as a function.
 */
export function lowerCase(str: string) {
  // Handle null/undefined inputs gracefully
  if (!str) return "";

  return str.toLowerCase();
}
