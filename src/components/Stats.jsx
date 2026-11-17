
import {
    Code2,
    BrainCircuit,
    Layers3,
    GraduationCap,
} from "lucide-react";

const stats = [
    {
        icon: Code2,
        value: "02",
        title: "Major Projects",
        arabicTitle: "مشاريع رئيسية",
    },
    {
        icon: BrainCircuit,
        value: "AI",
        title: "Artificial Intelligence",
        arabicTitle: "الذكاء الاصطناعي",
    },
    {
        icon: Layers3,
        value: "Backend",
        title: "Engineering",
        arabicTitle: "هندسة البرمجيات الخلفية",
    },
    {
        icon: GraduationCap,
        value: "4th",
        title: "Year Student",
        arabicTitle: "السنة الرابعة",
    },
];

function Stats({ language }) {
    const isArabic = language === "ar";

    return (
        <section className="stats-section">
            <div className="stats-container">

                {stats.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div className="stat-item" key={item.title}>
                            <div className="stat-icon">
                                <Icon size={27} />
                            </div>

                            <div className="stat-content">
                                <h3>{item.value}</h3>
                                <p>
                                    {isArabic
                                        ? item.arabicTitle
                                        : item.title}
                                </p>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}

export default Stats;
