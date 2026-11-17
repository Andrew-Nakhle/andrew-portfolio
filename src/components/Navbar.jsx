
import { useEffect, useState } from "react";
import {
    Sun,
    Moon,
    Menu,
    X,
    Send,
} from "lucide-react";

function Navbar({ theme, setTheme, language, setLanguage }) {
    const [activeSection, setActiveSection] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const isArabic = language === "ar";

    const navItems = [
        { id: "home", en: "Home", ar: "الرئيسية" },
        { id: "about", en: "About", ar: "من أنا" },
        { id: "projects", en: "Projects", ar: "المشاريع" },
        { id: "skills", en: "Skills", ar: "المهارات" },
        { id: "contact", en: "Contact", ar: "تواصل معي" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            let current = "home";

            navItems.forEach((item) => {
                const section = document.getElementById(item.id);

                if (section && window.scrollY >= section.offsetTop - 150) {
                    current = item.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    const toggleLanguage = () => {
        setLanguage(isArabic ? "en" : "ar");
    };

    const handleNavigation = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setActiveSection(id);
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">

                <a
                    href="#home"
                    className="brand"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("home");
                    }}
                >
                    <span className="brand-logo">A.</span>
                    <span>Andrew Nakhle</span>
                </a>

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            className={`nav-link ${activeSection === item.id ? "active" : ""
                                }`}
                            onClick={() => handleNavigation(item.id)}
                        >
                            {isArabic ? item.ar : item.en}
                        </button>
                    ))}
                </nav>

                <div className="nav-actions">

                    <button
                        className="language-toggle"
                        onClick={toggleLanguage}
                    >
                        <span className={!isArabic ? "selected" : ""}>EN</span>
                        <span className={isArabic ? "selected" : ""}>عربي</span>
                    </button>

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <Moon size={19} />
                        ) : (
                            <Sun size={19} />
                        )}
                    </button>

                    <button
                        className="contact-button"
                        onClick={() => handleNavigation("contact")}
                    >
                        <Send size={17} />
                        {isArabic ? "تواصل معي" : "Contact Me"}
                    </button>

                </div>

                <button
                    className="mobile-menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

            </div>
        </header>
    );
}

export default Navbar;
