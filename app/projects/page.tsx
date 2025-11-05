'use client'

import { useState } from "react";

export default function Page() {
    const [showHTML, setShowHTML] = useState(true)
    const [showJavaScript, setShowJavaScript] = useState(true)

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
    ]
    const filteredProjects = projects.filter(project => {
        if (project.description === "HTML" && !showHTML) return false
        if (project.description === "JavaScript" && !showJavaScript) return false
        return true
    })

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>

            <div className="mb-6 flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                        type="checkbox" 
                        checked={showHTML}
                        onChange={(e) => setShowHTML(e.target.checked)} 
                        className="sr-only"
                    />
                    <div className={`
                        w-5 h-5 rounded border-2 transition-all duration-200
                        flex items-center justify-center
                        ${showHTML
                            ? 'bg-neutral-900 border-neutral-900 group-hover:bg-neutral-700 group-hover:border-neutral-700'
                            : 'border-neutral-400 group-hover:border-neutral-600'
                        }`}>
                        <svg>

                        </svg>
                    </div>
                    <span>HTML</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                        type="checkbox"
                        checked={showJavaScript}
                        onChange={(e) => setShowJavaScript(e.target.checked)}
                        className="sr-only"
                    />
                    <div className={`
                        w-5 h-5 rounded border-2 transition-all duration-200
                        flex items-center justify-center
                        ${showJavaScript
                            ? 'bg-neutral-900 border-neutral-900 group-hover:bg-neutral-700 group-hover:border-neutral-700'
                            : 'border-neutral-400 group-hover:border-neutral-600'
                        }`}>
                        <svg>

                        </svg>
                    </div>
                    <span>JavaScript</span>
                </label>
            </div>
            
            <div className="my-8 space-y-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
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
                    ))
                ) : (
                    <p className="text-neutral-600">No projects to display.</p>
                )}
            </div>
        </section>
    )
}
