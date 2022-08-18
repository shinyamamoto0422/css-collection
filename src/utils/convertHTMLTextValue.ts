export const convertHTMLTextValue = (text: string) => {
  const escapeTextValue = text
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
  return escapeTextValue;
};
