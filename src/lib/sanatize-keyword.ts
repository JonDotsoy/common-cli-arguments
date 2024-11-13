export const sanitizeKeyword = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\W(\w)/g, (_: string, char: string) => char.toUpperCase()) ||
  "arg";

export const createUniqueKeySanitizeKeywordContext = () => {
  const nameList = new Map<string, number>();

  return {
    sanitizeKeyword: (value: string) => {
      const valueSanitized = sanitizeKeyword(value);
      const counter = (nameList.get(valueSanitized) ?? -1) + 1;
      nameList.set(valueSanitized, counter);
      if (counter === 0) return valueSanitized;
      return `${valueSanitized}${counter}`;
    },
  };
};
