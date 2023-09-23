import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import getStorage from "../utils/getStorage";
import explore from "../data/explore";
import menu from "../data/menu";
import bestsellers from "../data/bestsellers";

const defaultState = {
  explore: explore,
  menu: menu,
  bestsellers: bestsellers,
  favorites: getStorage("favorites") || [],
  isModalOpen: false,
  modalContent: null,
  currency: "QAR",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const setModalContent = (content) => {
    dispatch({
      type: "SET_MODAL_CONTENT",
      payload: content,
    });
  };
  const toggleFavorite = (id) => {
    dispatch({
      type: "TOGGLE_FAVORITE",
      payload: id,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        openModal,
        closeModal,
        setModalContent,
        toggleFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
export default useGlobalContext;
