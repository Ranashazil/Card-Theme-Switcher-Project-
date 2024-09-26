
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/Button";
import Card from "./components/Card";
import { useEffect } from "react";
function App() {

  const [themeMode, setthemeMode] = useState("light")

  const lighttheme = ()=>{
    setthemeMode("light")
  }
  const darktheme = ()=>{
    setthemeMode("dark")
  }

// when wwe chnge actually in theme 

useEffect(() => {
  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)
}, [themeMode])


  return (
    <ThemeProvider value={{themeMode, lighttheme, darktheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* cardBtn */}\
            <Card/>
            </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
