import React from "react";
import React, { useContext, useEffect, useState } from 'react';
import "./style.css";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

export default function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
    <Toolbar />
  </ThemeContext.Provider>
  );
}


function Toolbar(props) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1 style={{ background: theme.background, color: theme.foreground }}>Ejemplo Context</h1>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  const [state,setState] = useState(theme)
  return (
    <button style={{ background: state.background, color: state.foreground }} onClick={()=>setState(themes.light)}>
      I am styled by theme context!
    </button>
  );
}
