
import {
    UserRound,
    GraduationCap,
    Code2,
    BrainCircuit,
    MapPin,
} from "lucide-react";

function About({ language }) {
    const isArabic = language === "ar";

    const highlights = [
        {
            icon: Code2,
            title: isArabic ? "تطوير Backend" : "Backend Development",
            description: isArabic
                ? "بناء RESTful APIs وتطوير الأنظمة باستخدام Laravel وPHP."
                : "Building RESTful APIs and backend systems using Laravel and PHP.",
        },
        {
            icon: GraduationCap,
            title: isArabic ? "هندسة المعلوماتية" : "IT Engineering",
            description: isArabic
                ? "طالب سنة رابعة في جامعة دمشق."
                : "Fourth-year Information Technology Engineering student at Damascus University.",
        },
        {
            icon: BrainCircuit,
            title: isArabic ? "الذكاء الاصطناعي" : "Artificial Intelligence",
            description: isArabic
                ? "اهتمام بالتعلم الآلي والذكاء الاصطناعي وتطبيقاتهما."
                : "Interested in machine learning, AI, and their practical applications.",
        },
    ];

    return (
        <section id="about" className="about-section">
            <div className="about-heading">
                <span className="section-label">
                    <UserRound size={16} />
                    {isArabic ? "تعرف عليّ" : "GET TO KNOW ME"}
                </span>

                <h2>
                    {isArabic ? (
                        <>نبذة <span>عني</span></>
                    ) : (
                        <>About <span>Me</span></>
                    )}
                </h2>
            </div>

            <div className="about-content">
                <div className="about-intro">
                    <h3>
                        {isArabic
                            ? "مرحباً، أنا Andrew Nakhle"
                            : "Hello, I'm Andrew Nakhle"}
                    </h3>


                    <p>
                        {isArabic
                            ? "أنا Andrew Nakhle، طالب سنة رابعة في هندسة المعلوماتية بجامعة دمشق، وقد اخترت اختصاص الذكاء الاصطناعي ضمن دراستي الجامعية."
                            : "I'm Andrew Nakhle, a fourth-year Information Technology Engineering student at Damascus University, specializing in Artificial Intelligence as part of my academic studies."}
                    </p>

                    <p>
                        {isArabic
                            ? "أهتم بشكل خاص بتطوير Backend وبناء RESTful APIs باستخدام Laravel وPHP، وأسعى إلى تطوير أنظمة منظمة وقابلة للتوسع مع الاهتمام بجودة الكود والأمان والتصميم المعماري."
                            : "I'm particularly interested in backend development and building RESTful APIs using Laravel and PHP. I focus on developing well-structured and scalable systems with an emphasis on code quality, security, and software architecture."}
                    </p>

                    <p>
                        {isArabic
                            ? "أعمل باستمرار على تطوير مهاراتي من خلال التعلم والمشاريع العملية، وأسعى للحصول على فرصة عمل أو تدريب تتيح لي تطبيق معرفتي، واكتساب خبرة مهنية، والمساهمة في بناء حلول تقنية حقيقية."
                            : "I'm continuously developing my skills through learning and hands-on projects, and I'm looking for a job or internship opportunity where I can apply my knowledge, gain professional experience, and contribute to building real-world software solutions."}
                    </p>


                    <div className="about-location">
                        <MapPin size={17} />
                        <span>
                            {isArabic
                                ? "جامعة دمشق، سوريا"
                                : "Damascus University, Syria"}
                        </span>
                    </div>
                </div>

                <div className="about-highlights">
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article className="about-highlight" key={index}>
                                <div className="about-highlight-icon">
                                    <Icon size={23} />
                                </div>

                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default About;
