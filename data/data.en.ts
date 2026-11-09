import { data as es } from "./data";

// English content. It has the same shape as data.ts (the Spanish source):
// if you add a field there, TypeScript will ask you to add it here too.
export const dataEn: typeof es = {
    ...es,
    location: "Mexico",
    cv: "/cv/Jaime_Jair_Rodriguez_CV_EN.pdf",
    experience: "2+ years",

    about: {
        intro: "a Full Stack developer based in Mexico. I like building solutions that automate processes, make the most of data and create real value. I'm studying Computer Systems Engineering and hold a degree in Electronics Engineering.",
        focus: [
            { icon: "code", label: "Full Stack development" },
            { icon: "automation", label: "Process automation" },
            { icon: "data", label: "Data and AI applications" },
            { icon: "product", label: "Product mindset" },
        ],
    },

    career: {
        work: [
            {
                date: "Jun 2026 — present",
                title: "Inphera",
                org: "Founder and developer · Own project",
                detail: "Designed and built the whole platform: a Next.js interface, a FastAPI statistical engine and AI integration.",
                current: true,
            },
            {
                date: "Feb 2026 — Jun 2026",
                title: "MBQ Group Business Solutions",
                org: "Full Stack Development Intern · Remote",
                detail: "Automated TISAX compliance reports and eliminated manual transcription between Excel and Word.",
                current: false,
            },
        ],
        education: [
            { date: "in progress", title: "Computer Systems Engineering", org: "Universidad UK" },
            { date: "2024 · graduated", title: "Electronics Engineering", org: "ITSX" },
        ],
    },

    process: [
        { icon: "search", title: "Analysis and planning" },
        { icon: "layers", title: "Design and architecture" },
        { icon: "code", title: "Development and testing" },
        { icon: "rocket", title: "Deployment and growth" },
    ],

    upcoming: [
        {
            title: "JR ClientFlow",
            tag: "In development",
            summary: "Lead management and customer follow-up for small businesses.",
            stack: ["Java", "Spring Boot", "Next.js"],
        },
    ],

    projects: [
        {
            ...es.projects[0],
            imageAlt: "Inphera's list of today's matches, with their status and whether the analysis is ready",
            galleryAlts: [
                "A match result in Inphera and whether the official pick was correct",
                "Per-line probabilities calculated by the model, with the official pick highlighted",
                "Match statistics in Inphera: possession, shots, corners, fouls and cards",
            ],
            tag: "Main project · Private beta",
            result: "Brings a match's recent form, stats and context together in one place, with traceable analysis.",
            technical: "Poisson model + Claude API for the analysis, plus a deterministic filter that only shows markets with probability ≥ 65%.",
            summary: "Private beta for reviewing mathematical probabilities and football match context, with visible guardrails.",
            description: `
                **The problem**

                Analyzing a match means cross-checking recent form, statistics and context from separate sources. Inphera brings those signals into a single experience so users can review them with traceability, without presenting the analysis as a certainty.

                **Current user flow**

                1. Pick an available match.
                2. Review the direct averages of recent games and the context for both teams.
                3. Check the probabilities per market and see which ones passed the recommendation filter.
                4. Read a contextual summary and keep the final judgment on how to interpret the data.

                **Current methodology**

                - Recent-match averages are a direct aggregation of the available history.
                - Poisson is the mathematical probability model used to estimate the different markets.
                - Self-calibration adjusts weights with a heuristic based on observed results; it is not a trained machine learning model.

                **Structured analysis with Claude**

                - Claude receives statistics, context and precomputed mathematical signals to produce a structured analysis.
                - Within that structure it outputs candidate markets, candidate probabilities and reasons. These outputs are conditioned on the context provided, but they are not yet visible recommendations.

                **Deterministic guardrails**

                - After the structured analysis, filterRecommendedBets applies a post-filter and only lets candidates with a probability of 65% or higher through to the recommendations UI.
                - Claude cannot bypass that deterministic comparison. The threshold controls what is shown, but it doesn't guarantee wins or remove the uncertainty of sport.

                **Roles and stack**

                - Claude synthesizes the context it receives and generates structured candidates; the application code decides which ones are finally shown as recommended.
                - The experience connects a Next.js interface with a FastAPI math engine, data stored in Supabase and Claude's structured output.

                **Current status: private beta**

                Inphera is in development and is being tested with limited access. Its results are informational and experimental: they are not financial advice or a promise of outcomes.

                **ML roadmap**

                Supervised learning is future work. It will only be evaluated once there is enough labeled historical data to train, validate and compare models responsibly.

                Stack: Next.js · React · TypeScript · FastAPI · Python · Supabase · Claude API
                `,
        },
        {
            ...es.projects[1],
            imageAlt: "TISAX reporting system screen",
            title: "TISAX reporting system",
            tag: "Case study",
            metric: { value: "0", label: "manual Excel-to-Word transcription" },
            result: "Eliminated manual transcription between Excel and Word and the data loss it caused.",
            technical: "TypeScript-typed form with real-time validation. Next.js + Supabase.",
            summary: "Platform that automates TISAX compliance reports, eliminates manual Excel-to-Word transcription and validates data in real time.",
            description: `
                The company handled **TISAX compliance reports**, which require multiple security and maturity validations and are critical for audits.

                The manual process was:

                1. Enter the data in Excel (maturity levels, points to validate)
                2. Transcribe it into a Word template, switching back and forth between both programs
                3. Repeat it for every report, with the risk of losing data along the way
                4. The same data sometimes ended up different from one report to another

                Result: a slow, difficult process in which data was sometimes lost.

                The solution was a platform that automates the whole flow: data is entered once, validated, and the report is generated automatically.

                - Integrated form that replaces the back-and-forth between Excel and Word
                - Data stored with types, with no inconsistencies between reports
                - Reports generated automatically in the right format
                - Real-time validation with TypeScript to prevent bad data entry
                - Relational model in PostgreSQL/Supabase with Row Level Security to protect audit data

                Stack: Next.js · React · TypeScript · Tailwind CSS · Supabase · Vercel
                `,
        },
    ],
};
