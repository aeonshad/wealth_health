function Footer() {
    return (
        <footer className="w-full border-t border-border">
            <div className="m-auto w-full max-w-3xl px-2 py-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <img src="./img/Logo.png" alt="HRnet Logo" width={40} height={30} />
                        <a href="/">HRnet</a>
                    </div>
                    <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                        <a className="hover:underline" href="/">
                            Employees
                        </a>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                    <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Wealth Health - HRnet</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
