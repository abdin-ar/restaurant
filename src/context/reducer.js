import setStorage from "../utils/setStorage";

const reducer = (state, action) => {
  if (action.type === "OPEN_MODAL") {
    return { ...state, isModalOpen: true };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false };
  }
  if (action.type === "SET_MODAL_CONTENT") {
    return { ...state, modalContent: action.payload };
  }
  if (action.type === "TOGGLE_FAVORITE") {
    const isFavorite = state.favorites.includes(action.payload);
    let newFavorites = state.favorites;
    if (isFavorite) {
      newFavorites = newFavorites.filter((item) => item !== action.payload);
    } else {
      newFavorites = [...newFavorites, action.payload];
    }
    setStorage("favorites", newFavorites);
    return { ...state, favorites: newFavorites };
  }

  throw new Error("No Matching Action Type");
};

export default reducer;
