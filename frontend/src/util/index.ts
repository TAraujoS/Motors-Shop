const nameAbbreviate = (name: string) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("");
};

export default nameAbbreviate;