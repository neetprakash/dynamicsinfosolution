export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getIcon = (iconName) => {
  return new URL(`/assets/icons/${iconName}.svg`, import.meta.url);  // Adjust the path if needed
};
