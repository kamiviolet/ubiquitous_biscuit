import { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme';
import { BsMoonFill, BsMoon } from "react-icons/bs";

export default function ToggleTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
      setTheme((currTheme) => {
        return currTheme === 'light' ? 'dark' : 'light';
      });
    };

    return (
      <>
        <button onClick={toggleTheme} className={`btn_${theme} theme_toggle`}>
          {theme === 'light'? <BsMoonFill /> :  <BsMoon />}
        </button>
      </>
    );
};
    