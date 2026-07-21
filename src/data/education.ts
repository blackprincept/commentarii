export interface Education {
    institution: string;
    degree: string;
    field?: string;
    location?: string;
    startDate: string;
    endDate?: string;
    highlights?: string[];
}

export const education: Education[] = [
    {
        institution: "TBC IT Academy",
        degree: "Certification",
        field: "SQL Server - Querying",
        location: "Tbilisi, Georgiai (Remote)",
        startDate: "2025-09",
        endDate: "2025-10",
        highlights: [
            "Offered to employees during my Android Developer role at TBC as part of internal professional development",
            "Built on limited prior experience with SQLite; the course served as a strong introduction to SQL and reshaped my understanding of how databases actually work",
            "Course material and sample databases were modeled around banking use cases, adding valuable domain-specific context since TBC is a banking company",
        ]
    },
    {
        institution: "TBC IT Academy",
        degree: "Certification",
        field: "Android Development",
        location: "Tbilisi, Georgia (Hybrid)",
        startDate: "2024-11",
        endDate: "2025-06",
        highlights: [
            "Began learning iOS development as an introduction to programming after leaving the hydropower plant role in Bakhvi and taking an interest in software development",
            "Selected from over 700 applicants: only 28 were accepted, 18 completed the program, and 5 were hired by TBC",
            "During the bootcamp, broke an ankle and dislocated a collarbone in a skiing accident; the months of recovery period, spent largely bedridden, provided time to focus on studying",
            "Built a salary calculator handling complex enterprise scenarios as a midterm project",
            "Developed a fitness-focused social media app featuring an AI assistant as a personal fitness advisor for the final project",
            "Presented final projects live to an audience that included TBC's Android chapter leads and Frontend chapter area lead",
            "Hired by TBC after two months of interviews and exams, alongside four other students",
        ]
    },
    {
        institution: "Agricultural Univeristy of Georgia",
        degree: "Bachelor of Science",
        field: "Construction Engineering",
        location: "Tbilisi, Georgia",
        startDate: "2021-09",
        endDate: "2024-02",
        highlights: [
            "Studied fundamentals of mechanics and related core engineering subjects",
            "Completed three drawing courses: two semesters of hand drafting followed by one semester in AutoCAD",
            "Took a two-year academic gap starting February 2024 to work as a Junior Civil Engineer at a hydropower plant beginning April 2024",
            "Transferred to Georgian Technical University in 2026",
        ],
    },
];