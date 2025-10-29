import { describe } from "node:test"

export default function Page() {
    const projects = [
        {
            name: "Fitness Chapter 2",
            description: "HTML",
            link: "/html/fitness2/template.html"
        },
        {
            name: "Fitness Chapter 3",
            description: "HTML",
            link: "/html/fitness3/index.html"
        },
        {
            name: "Fitness Chapter 4",
            description: "HTML",
            link: "/html/fitness4/index.html"
        },
        {
            name: "Fitness Chapter 5",
            description: "HTML",
            link: "/html/fitness5/index.html"
        },
        {
            name: "Fitness Chapter 6",
            description: "HTML",
            link: "/html/fitness6/index.html"
        },
        {
            name: "Fitness Chapter 7",
            description: "HTML",
            link: "/html/fitness7/index.html"
        },
        {
            name: "Fitness Chapter 8",
            description: "HTML",
            link: "/html/fitness8/index.html"
        },
        {
            name: "Chapter 1",
            description: "JavaScript",
            link: "/javascript/chapter1/js01.html"
        },
        {
            name: "Chapter 1b",
            description: "JavaScript",
            link: "/javascript/chapter1/js01b.html"
        },
        {
            name: "Chapter 2",
            description: "JavaScript",
            link: "/javascript/project01-02/project01-02.html"
        },
        {
            name: "Chapter 4",
            description: "JavaScript",
            link: "/javascript/project01-04/project01-04.html"
        },
    ];
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <div className="my-8 space-y-6">
                {projects.map((project, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <svg width="8" height="8" className="flex-shrink-0 mt-2">
                            <circle
                                cx="4"
                                cy="4"
                                r="4"
                                fill="currentColor" />
                        </svg>
                        <div>
                            <p className="text-neutral-900">
                                <a className="hover:text-neutral-400 transition-all" href={project.link}>{project.name}</a>
                            </p>
                            <p className="text-neutral-600">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
