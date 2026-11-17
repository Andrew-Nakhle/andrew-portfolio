
import {
    Mail,
    Send,
    ArrowUpRight,
    MessageCircle,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact({ language }) {
    const isArabic = language === "ar";

    const contactItems = [
        {
            icon: Mail,
            title: isArabic ? "البريد الإلكتروني" : "Email",
            value: "nakhleandro@gmail.com",
            link: "mailto:nakhleandro@gmail.com",
        },
        {
            icon: FaGithub,
            title: "GitHub",
            value: "Andrew-Nakhle",
            link: "https://github.com/Andrew-Nakhle",
        },
        {
            icon: FaLinkedin,
            title: "LinkedIn",
            value: "Andrew Nakhle",
            link: "https://linkedin.com/in/andrew-nakhle-852475388",
        },
        {
            icon: FaWhatsapp,
            title: "WhatsApp",
            value: isArabic ? "تواصل معي عبر واتساب" : "Chat with me on WhatsApp",
            link: "https://wa.me/963994667072",
        },
        {
            icon: FaInstagram,
            title: "Instagram",
            value: "@andronakhle",
            link: "https://www.instagram.com/andronakhle/",
        },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="contact-heading">
                <span className="section-label">
                    <MessageCircle size={16} />
                    {isArabic ? "لنتواصل" : "GET IN TOUCH"}
                </span>

                <h2>
                    {isArabic ? (
                        <>لنبقَ على <span>تواصل</span></>
                    ) : (
                        <>Let's Work <span>Together</span></>
                    )}
                </h2>

                <p>
                    {isArabic
                        ? "هل لديك فرصة عمل أو تدريب أو ترغب بالتعاون في مشروع؟ يسعدني التواصل معك."
                        : "Have a job opportunity, internship, or project collaboration in mind? I'd be happy to hear from you."}
                </p>
            </div>

            <div className="contact-content">
                <div className="contact-message">
                    <div className="contact-message-icon">
                        <Send size={26} />
                    </div>

                    <h3>
                        {isArabic
                            ? "أنا منفتح على الفرص الجديدة"
                            : "I'm Open to New Opportunities"}
                    </h3>

                    <p>
                        {isArabic
                            ? "أسعى دائماً لتطوير مهاراتي واكتساب خبرات جديدة، وأتطلع إلى فرص أستطيع من خلالها المساهمة والتعلم ضمن فريق عمل احترافي."
                            : "I'm always looking to grow, learn, and gain professional experience through opportunities where I can contribute and collaborate with a team."}
                    </p>

                    <a
                        href="mailto:nakhleandro@gmail.com"
                        className="contact-email-button"
                    >
                        <Mail size={18} />
                        {isArabic ? "راسلني الآن" : "Send Me an Email"}
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="contact-links">
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                href={item.link}
                                target={item.link.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="contact-link-card"
                                key={item.title}
                            >
                                <div className="contact-link-icon">
                                    <Icon size={22} />
                                </div>

                                <div className="contact-link-info">
                                    <span>{item.title}</span>
                                    <strong>{item.value}</strong>
                                </div>

                                <ArrowUpRight
                                    size={19}
                                    className="contact-link-arrow"
                                />
                            </a>
                        );
                    })}
                </div>
            </div>

            <div className="contact-footer">
                <span>
                    © {new Date().getFullYear()} Andrew Nakhle.
                </span>

                <span>
                    {isArabic
                        ? "صُنع بشغف لتطوير البرمجيات."
                        : "Built with passion for software development."}
                </span>
            </div>
        </section>
    );
}

export default Contact;
