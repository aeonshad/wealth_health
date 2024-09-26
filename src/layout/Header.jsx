import ThemeToggle from '../ThemeToggle';

function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex items-center gap-2">
                    <img src="./img/Logo.png" alt="HRnet Logo" width={50} height={35} />
                    <div className="flex items-baseline gap-2">
                        <a className="scroll-m-20 text-xl font-semibold tracking-tight font-caption" href="/">
                            HRnet
                        </a>
                        <a className="font-medium hover:underline text-muted-foreground hover:text-foreground" href="/">
                            Employees
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default Header;
