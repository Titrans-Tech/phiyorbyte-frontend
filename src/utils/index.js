export const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)");
export const isDesktop = typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)");

export const getErrorMessage = (error) => {
  const response = error.response;

  const errorMessage =
    response && response.data ? response.data.message : "Something went wrong. Please try again.";

  return errorMessage;
};

export const getStoredId = (whatIsStored) => {
  // whatIsStored: the name of what you stored in sess
  if (typeof localStorage !== "undefined") {
    const token = localStorage.getItem(whatIsStored);
    return token;
  }
};
