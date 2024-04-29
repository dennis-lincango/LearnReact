import React, { useContext } from "react";

interface Theme {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = React.createContext<Theme | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = React.useState<Theme>({ theme: "light", toggleTheme: () => toggleTheme() });

    const toggleTheme = () => {
        const newTheme = currentTheme.theme === "light" ? "dark" : "light";
        setCurrentTheme({ theme: newTheme, toggleTheme: toggleTheme });
    };

    return (
        <ThemeContext.Provider value={currentTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

const ThemeToggle: React.FC = () => {
    const { toggleTheme } = useContext(ThemeContext)!;

    return (
        <button onClick={toggleTheme}>Cambiar tema</button>
    );
};

const MyComponent: React.FC = () => {
    const { theme } = useContext(ThemeContext)!;
    return <div>El tema actual es {theme}</div>;
};

const ExampleUseContext: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemeToggle />
            <MyComponent />
        </ThemeProvider>
    );
};

export default ExampleUseContext;
