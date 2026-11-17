
import {
    Code2,
    Database,
    BrainCircuit,
    Wrench,
} from "lucide-react";

const skillGroups = [
    {
        id: "backend",
        icon: Code2,
        title: {
            en: "Backend Development",
            ar: "تطوير Backend",
        },
        skills: [
            "PHP",
            "Laravel",
            "RESTful APIs",
            "Laravel Sanctum",
            "Spatie Permission",
        ],
    },
    {
        id: "databases",
        icon: Database,
        title: {
            en: "Databases",
            ar: "قواعد البيانات",
        },
        skills: [
            "MySQL",
            "SQL Server",
            "Redis",
        ],
    },
    {
        id: "ai",
        icon: BrainCircuit,
        title: {
            en: "Artificial Intelligence",
            ar: "الذكاء الاصطناعي",
        },
        skills: [
            "Python",
            "Machine Learning",
            "Deep Learning",
        ],
    },
    {
        id: "tools",
        icon: Wrench,
        title: {
            en: "Tools & Technologies",
            ar: "الأدوات والتقنيات",
        },
        skills: [
            "Git",
            "GitHub",
            "Postman",
            "Docker",
            "Jira",
            "Stripe",
            "FFmpeg",
            "HLS",
            "Backblaze B2",
        ],
    },
];

function Skills({ language }) {
    const isArabic = language === "ar";

    return (
        <section id="skills" className="skills-section">
            <div className="skills-heading">
                <span className="section-label">
                    <Code2 size={16} />
                    {isArabic ? "مهاراتي" : "MY EXPERTISE"}
                </span>

                <h2>
                    {isArabic ? (
                        <>المهارات <span>والتقنيات</span></>
                    ) : (
                        <>Skills & <span>Technologies</span></>
                    )}
                </h2>

                <p>
                    {isArabic
                        ? "التقنيات والأدوات التي أستخدمها في تطوير المشاريع وبناء الحلول البرمجية."
                        : "Technologies and tools I use to develop projects and build software solutions."}
                </p>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => {
                    const Icon = group.icon;

                    return (
                        <article className="skill-card" key={group.id}>
                            <div className="skill-card-header">
                                <div className="skill-icon">
                                    <Icon size={23} />
                                </div>

                                <h3>{group.title[isArabic ? "ar" : "en"]}</h3>
                            </div>

                            <div className="skill-tags">
                                {group.skills.map((skill) => (
                                    <span className="skill-tag" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
