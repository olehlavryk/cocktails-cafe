import React from "react";
import { useStore } from "src/hooks/useStore";
import { RoutesGenerator, routesConfig } from "src/utils/generator";
import './App.css';

export const ThemeContext = React.createContext({});
export const ThemeContextProvider = ThemeContext.Provider;

const App = () => {
  const {
    state,
    setState,
    getRandomCocktail,
    getCocktailById,
    handleAddToBasket,
    basketCounter,
    handleRemoveFromBasket,
    isOpen,
    setOpen,
    getCocktailByQuery
  } = useStore();

  return (
    <ThemeContextProvider value={{
      state,
      setState,
      getRandomCocktail,
      getCocktailById,
      handleAddToBasket,
      basketCounter,
      handleRemoveFromBasket,
      isOpen,
      setOpen,
      getCocktailByQuery
    }}>
      <div className="App">
        <RoutesGenerator config={routesConfig} />
      </div>
    </ThemeContextProvider>

  );
}

export default App;
