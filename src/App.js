import { useState } from "react";
import { Home, Login } from "./components";

const App = () => {
  const [showHome, setShowHome] = useState(false);
  return (
    <div>{!showHome ? <Login setShowHome={setShowHome} /> : <Home />}</div>
  );
};

export default App;
