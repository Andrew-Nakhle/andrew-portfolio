import {
    GraduationCap,
    Code2,
    CalendarDays,
    ArrowRight,
    Download,
    Mail,
    BrainCircuit,
    Layers3,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero({ language }) {
    const isArabic = language === "ar";

    return (
        <section id="home" className="hero">
            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-content">

                    <span className="hero-greeting">
                        👋 {isArabic ? "مرحباً، أنا" : "Hello, I'm"}
                    </span>

                    <h1 className="hero-title">
                        Andrew <span>Nakhle</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        {isArabic
                            ? "مهندس Backend ومهتم بالذكاء الاصطناعي"
                            : "Backend Engineer & AI Enthusiast"}
                    </h2>

                    <p className="hero-description">
                        {isArabic
                            ? "طالب سنة رابعة في هندسة المعلوماتية بجامعة دمشق، مهتم ببناء أنظمة Backend قابلة للتوسع واستكشاف إمكانيات الذكاء الاصطناعي."
                            : "Fourth-year Information Technology Engineering student at Damascus University, passionate about building scalable backend systems and exploring the power of Artificial Intelligence."}
                    </p>

                    {/* ACADEMIC INFO */}
                    <div className="hero-info">

                        <div className="hero-info-item">
                            <GraduationCap />
                            <span>
                                {isArabic ? "جامعة دمشق" : "Damascus University"}
                            </span>
                        </div>

                        <div className="hero-info-item">
                            <Code2 />
                            <span>
                                {isArabic ? "هندسة معلوماتية" : "IT Engineering"}
                            </span>
                        </div>

                        <div className="hero-info-item">
                            <CalendarDays />
                            <span>
                                {isArabic ? "السنة الرابعة" : "Fourth Year"}
                            </span>
                        </div>

                    </div>

                    {/* ACTIONS */}
                    <div className="hero-actions">

                        <a href="#projects" className="hero-primary-btn">
                            {isArabic ? "استكشف مشاريعي" : "View Projects"}
                            <ArrowRight size={18} />
                        </a>

                        <a
                           href={`${import.meta.env.BASE_URL}files/Andrew-Nakhle-CV.pdf`}
                            className="hero-secondary-btn"
                            download="Andrew-Nakhle-CV.pdf"
                        >
                            <Download size={18} />
                            {isArabic ? "تحميل السيرة الذاتية" : "Download CV"}
                        </a>

                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="hero-socials">

                        <a
                            href="https://github.com/Andrew-Nakhle"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com/in/andrew-nakhle-852475388"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="mailto:nakhleandro@gmail.com"
                            aria-label="Email"
                        >
                            <Mail />
                        </a>

                    </div>

                </div>

                {/* RIGHT VISUAL */}
                <div className="hero-visual">

                    <div className="hero-shape"></div>

                    <div className="hero-image-wrapper">
                        <img
                       src={`${import.meta.env.BASE_URL}images/profile.png`}
                            alt="Andrew Nakhle"
                            className="hero-image"
                        />
                    </div>

                    {/* AI CARD */}
                    <div className="floating-card ai-card">
                        <div className="floating-icon">
                            <BrainCircuit size={28} />
                        </div>

                        <div>
                            <h3>AI</h3>
                            <p>
                                Machine Learning<br />
                                Deep Learning<br />
                                NLP
                            </p>
                        </div>
                    </div>

                    {/* BACKEND CARD */}
                    <div className="floating-card backend-card">
                        <div className="floating-icon">
                            <Layers3 size={28} />
                        </div>

                        <div>
                            <h3>Backend</h3>
                            <p>
                                Laravel<br />
                                REST APIs<br />
                                System Design
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;
