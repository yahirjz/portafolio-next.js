import { data as es } from "./data";

// English content. It has the same shape as data.ts (the Spanish source):
// if you add a field there, TypeScript will ask you to add it here too.
export const dataEn: typeof es = {
    ...es,
    location: "Mexico",
    cv: "/cv/Jaime_Jair_Rodriguez_CV_EN.pdf",
    experience: "2+ years",

    stack: [
        { key: "frontend", label: "Frontend", detail: "fast, type-safe interfaces", color: "#93C5FD", items: ["next", "react", "typescript", "tailwind"] },
        { key: "backend", label: "Backend", detail: "APIs and business logic, my strong suit", color: "#FDBA74", items: ["node", "express", "fastapi", "python", "java", "claude-api"] },
        { key: "data", label: "Data", detail: "relational and document modeling", color: "#86EFAC", items: ["postgresql", "supabase", "mongodb"] },
        { key: "deploy", label: "Deploy", detail: "projects live online, not just on localhost", color: "#F9A8D4", items: ["vercel", "railway", "docker", "git"] },
    ],
    learning: ["aws", "ai"],

    services: [
        {
            icon: "app",
            title: "Custom web applications",
            description: "Platforms, dashboards and internal tools, from the database to the deploy.",
            referenceLabel: "Built it in",
            reference: "Inphera",
            slug: "inphera",
        },
        {
            icon: "automation",
            title: "Process automation",
            description: "I turn manual, repetitive tasks, like copying data from Excel into reports, into automated workflows.",
            referenceLabel: "Built it in",
            reference: "TISAX Reports",
            slug: "reportes-tisax",
        },
        {
            icon: "calendar",
            title: "Booking systems for businesses",
            description: "An online schedule you manage from your phone, with WhatsApp confirmations for your customers.",
            referenceLabel: "Building it in",
            reference: "Booking system",
            slug: null,
        },
    ],

    process: [
        { hash: "e1a2f03", title: "We talk", detail: "You tell me about your problem and what you want to achieve." },
        { hash: "9b4c7d1", title: "Proposal", detail: "You get scope, timeline and cost in writing." },
        { hash: "4f8e2a6", title: "Development", detail: "Progress you can actually test, not just promises." },
        { hash: "HEAD", title: "Launch and support", detail: "I leave it running online and stay around afterwards." },
    ],

    upcoming: [
        {
            title: "Appointment booking system",
            tag: "In development · Java",
            result: "Any business manages its services and hours from a phone; customers book through WhatsApp without installing anything.",
            technical: "Per-service buffer time and a WhatsApp magic link to confirm or reschedule.",
        },
    ],

    projects: [
        {
            ...es.projects[0],
            imageAlt: "Overview of the Inphera analysis dashboard",
            galleryAlts: [
                "Contextual match analysis in Inphera",
                "Recommended markets and probabilities in Inphera",
                "Additional overview of the Inphera dashboard",
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
            metric: { value: "30 → 2 min", label: "per report" },
            result: "Replaced manual copying from Excel to Word with automatic reports, with no data-entry errors.",
            technical: "TypeScript-typed form with real-time validation. Next.js + Supabase.",
            summary: "Platform that automates TISAX reports, replaces manual copy-pasting and validates data in real time.",
            description: `
                    The company handled **complex TISAX reports** that required multiple security and maturity validations. These reports are critical for audits.

                    The manual process was:

                    1. Fill in data in Excel (maturity scores, points to validate)
                    2. Copy it by hand into a Word template
                    3. High risk of human error: typos, wrong numbers, inconsistencies
                    4. Inconsistent output: the same data could look different across reports

                    Result: every report took 30+ minutes and was prone to mistakes.

                    The solution was a platform that automates the whole flow, making it possible to produce several reports in the time it used to take to produce one.

                    - Integrated form (replaces Excel + Word)
                    - Data is stored with types (no inconsistencies)
                    - Reports are generated automatically with the right format
                    - TypeScript ensures numbers and text can't be entered incorrectly

                    - ⏱️ Report time: 30 min → 2 min (93% faster)
                    - ✅ Human errors: Eliminated (real-time validation)
                    - 🎯 Reliability: 100% (no manual copy/paste)

                    Stack: Next.js · React · TypeScript · Tailwind CSS · Supabase · Vercel
                `,
        },
    ],
};
