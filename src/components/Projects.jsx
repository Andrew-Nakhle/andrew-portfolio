import {
    BriefcaseMedical,
    GraduationCap,
    Code2,
    ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        type: "clinic",
        icon: BriefcaseMedical,
        number: "01",
        title: "Clinic & Laboratory System",
        arabicTitle: "نظام إدارة العيادات والمخابر",
        description:
            "An integrated healthcare management system connecting clinics, doctors, patients and laboratories.",
        arabicDescription:
            "نظام متكامل لإدارة العيادات والأطباء والمرضى والمخابر، مع تنظيم المواعيد والفحوصات والنتائج المخبرية.",
        technologies: [
            "Laravel", "PHP", "MySQL", "Sanctum",
            "Spatie", "Stripe", "Pusher", "REST API"
        ],
        github: "https://github.com/Andrew-Nakhle/clinic-lab-system",
        features: [
            "Role-based authentication and permissions",
            "Clinic and home-visit appointment booking",
            "Medical records and prescriptions management",
            "Laboratory tests and PDF results",
            "Real-time chat and notifications",
            "Online payments, cancellations and refunds",
            "Management dashboards and reports"
        ],
        arabicFeatures: [
            "المصادقة وإدارة الصلاحيات حسب الأدوار",
            "حجز مواعيد العيادة والزيارات المنزلية",
            "إدارة السجلات الطبية والوصفات",
            "طلب التحاليل ورفع النتائج بصيغة PDF",
            "المحادثات والإشعارات الفورية",
            "الدفع الإلكتروني والإلغاء والاسترداد",
            "لوحات التحكم والتقارير الإدارية"
        ],
    },
    {
        id: 2,
        type: "education",
        icon: GraduationCap,
        number: "02",
        title: "Educational Platform",
        arabicTitle: "المنصة التعليمية",
        description:
            "A comprehensive learning platform connecting students and instructors through courses, video lessons, quizzes and secure online payments.",
        arabicDescription:
            "منصة تعليمية متكاملة تربط الطلاب بالمدرسين من خلال الكورسات والدروس المصورة والاختبارات والمدفوعات الإلكترونية.",
        technologies: [
            "Laravel 13", "PHP", "MySQL", "Sanctum",
            "DTOs", "Clean Architecture", "FFmpeg",
            "HLS", "Stripe", "Backblaze B2"
        ],
        github: "https://github.com/Andrew-Nakhle/educational_platform",
        features: [
            "Student and instructor management",
            "Course creation, submission and approval",
            "Video processing using FFmpeg and HLS",
            "Multiple video quality options",
            "Cloud media storage using Backblaze B2",
            "Online payments using Stripe",
            "Enrollment and learning progress tracking",
            "Course ratings and reviews"
        ],
        arabicFeatures: [
            "إدارة الطلاب والمدرسين",
            "إنشاء الكورسات وإرسالها للمراجعة والموافقة",
            "معالجة الفيديوهات باستخدام FFmpeg وHLS",
            "توفير الفيديوهات بعدة جودات",
            "تخزين الملفات والفيديوهات سحابياً باستخدام Backblaze B2",
            "الدفع الإلكتروني باستخدام Stripe",
            "التسجيل بالكورسات ومتابعة تقدم الطلاب",
            "تقييم الكورسات والمراجعات"
        ],
    },
];

function ProjectPreview({ type, number }) {
    return (
        <div className={`project-preview ${type}`}>
            <div className="preview-window">
                <div className="preview-topbar">
                    <div className="preview-dots">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="preview-search" />
                </div>

                <div className="preview-content">
                    <div className="preview-sidebar">
                        <div className="preview-logo" />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="preview-main">
                        <div className="preview-heading" />

                        <div className="preview-stats">
                            <div />
                            <div />
                            <div />
                        </div>

                        <div className="preview-chart">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
            </div>

            <span className="preview-number">{number}</span>
        </div>
    );
}

function Projects({ language }) {
    const isArabic = language === "ar";

    return (
        <section id="projects" className="projects-section">

            {/* SECTION HEADER */}
            <div className="section-heading">
                <div>
                    <span className="section-label">
                        <Code2 size={16} />
                        {isArabic ? "أعمالي" : "MY WORK"}
                    </span>

                    <h2>
                        {isArabic ? (
                            <>مشاريعي <span>المميزة</span></>
                        ) : (
                            <>Featured <span>Projects</span></>
                        )}
                    </h2>

                    <p>
                        {isArabic
                            ? "مشاريع عملية أطبق فيها مفاهيم هندسة البرمجيات وبناء الأنظمة."
                            : "Practical projects where I apply software engineering and backend development concepts."}
                    </p>
                </div>

                <span className="project-count">
                    02 / PROJECTS
                </span>
            </div>

            {/* PROJECT CARDS */}
            <div className="projects-grid">

                {projects.map((project) => {
                    const Icon = project.icon;

                    return (
                        <article className="project-card" key={project.id}>

                            <ProjectPreview
                                type={project.type}
                                number={project.number}
                            />

                            <div className="project-info">

                                <div className="project-title-row">
                                    <div className="project-icon">
                                        <Icon size={23} />
                                    </div>

                                    <span className="project-category">
                                        {isArabic ? "مشروع Backend" : "BACKEND PROJECT"}
                                    </span>
                                </div>

                                <h3>
                                    {isArabic
                                        ? project.arabicTitle
                                        : project.title}
                                </h3>

                                <p className="project-description">
                                    {isArabic
                                        ? project.arabicDescription
                                        : project.description}
                                </p>

                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <details className="project-details">
                                    <summary>
                                        {isArabic ? "استكشف تفاصيل المشروع" : "Explore Project Details"}
                                        <ArrowUpRight size={17} />
                                    </summary>

                                    <ul>
                                        {(isArabic
                                            ? project.arabicFeatures
                                            : project.features
                                        ).map((feature) => (
                                            <li key={feature}>{feature}</li>
                                        ))}
                                    </ul>
                                </details>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-github"
                                >
                                    <FaGithub size={18} />

                                    {isArabic ? "عرض المشروع على GitHub" : "View on GitHub"}

                                    <ArrowUpRight size={17} />
                                </a>
                            </div>

                        </article>
                    );
                })}

            </div>

        </section>
    );
}

export default Projects;
