import React, { useState } from "react";
import "./App.css";
import AppRouter from "./Router";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
