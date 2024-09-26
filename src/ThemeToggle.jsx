import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? <Moon className="hidden size-5 dark:block" /> : <Sun className="h-6 w-[1.3rem] dark:block" />}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}

export default ThemeToggle;
