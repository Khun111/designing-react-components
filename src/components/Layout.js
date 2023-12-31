import { useContext } from "react";
import ThemeProvider, { ThemeContext } from '../contexts/ThemeContext';

function Layout ({startingTheme, children}) {
    return (
        <ThemeProvider startingTheme={startingTheme} children={children}>
            <LayoutNoThemeProvider children={children} />
        </ThemeProvider>
    );
}

function LayoutNoThemeProvider ({ children }) {
    const { theme } = useContext(ThemeContext);
    return (
            <div
            className={
            theme === 'light' ? "container-fluid light" : "container-fluid dark"
            }
            >
                {children}
            </div>
  );
}
export default Layout;