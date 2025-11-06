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

            
            <div className="mb-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-b-0">
                <span className="font-medium">Filter</span>
                    <label className="ml-auto flex items-center gap-2 cursor-pointer group">
                        <input
                        type="checkbox" 
                        checked={showHTML}
                        onChange={(e) => setShowHTML(e.target.checked)} 
                        className="sr-only"
                        />
                        <div className={`
                            w-5 h-5 text-white select-none rounded border-2 transition-all duration-100 flex items-center justify-center
                            ${showHTML
                                ? 'bg-blue-600 border-blue-600 hover:bg-blue-400 hover:border-blue-400'
                                : 'border-neutral-400'
                            }`}>
                            {showHTML && '✓'}
                        </div>
                        <span className={` 
                            transition-all duration-100 ease-in
                            ${showHTML ? 'text-blue-600' : 'text-black'} 
                            `}>HTML</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                            type="checkbox"
                            checked={showJavaScript}
                            onChange={(e) => setShowJavaScript(e.target.checked)}
                            className="sr-only"
                        />
                        <div className={`
                            w-5 h-5 text-white select-none rounded border-2 transition-all duration-100 flex items-center justify-center 
                            ${showJavaScript
                                ? 'bg-blue-600 border-blue-600 hover:bg-blue-400 hover:border-blue-400'
                                : 'border-neutral-400'
                            }`}>
                            {showJavaScript && '✓'}
                        </div>
                        <span className={` 
                            transition-all duration-100 ease-in
                            ${showJavaScript ? 'text-blue-600' : 'text-black'} 
                            `}>JavaScript</span>
                    </label>
            </div>
            
            <div className="my-8 mx-2 space-y-6">
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
                    <p className="text-neutral-600">Nothing has been selected</p>
                )}
            </div>
        </section>
    )
}
