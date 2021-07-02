const LINK_REGEX =
  /(^|\s|>)((?:http(?:s)?:\/\/.)(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6})\b([-a-zA-Z0-9@:;%_\+.~#?!&//=]*)/g;
export class Linkify {
  static get RULE_NAME() {
    return "linkify";
  }

  static parse(source) {
    return source.replace(
      LINK_REGEX,
      (all, before, urlProtocolDomain, urlPath) => {
        const url = new URL(source);
        url.pathname = url.pathname.replace(/:/g, "%3A");
        return `${before}<a href="${url.href}" target="_blank">${url.href}</a>`;
      }
    );
  }
}
