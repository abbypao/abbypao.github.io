'use client'

import { useState } from "react";

export default function Page() {
    const [showHTML, setShowHTML] = useState(true)
    const [showJavaScript, setShowJavaScript] = useState(true)
    const [showNotGraded, setShowNotGraded] = useState(false)

    const projects = [
        {
            name: "Fitness Chapter 2",
            description: "HTML",
            link: "/html/fitness2/template.html",
            graded: true
        },
        {
            name: "Fitness Chapter 3",
            description: "HTML",
            link: "/html/fitness3/index.html",
            graded: true
        },
        {
            name: "Fitness Chapter 4",
            description: "HTML",
            link: "/html/fitness4/index.html",
            graded: true
        },
        {
            name: "Fitness Chapter 5",
            description: "HTML",
            link: "/html/fitness5/index.html",
            graded: true
        },
        {
            name: "Fitness Chapter 6",
            description: "HTML",
            link: "/html/fitness6/index.html",
            graded: true
        },
        {
            name: "Fitness Chapter 7",
            description: "HTML",
            link: "/html/fitness7/index.html",
            graded: true
        },
        {
            name: "Fitness Chapter 8",
            description: "HTML",
            link: "/html/fitness8/index.html",
            graded: true
        },
        {
            name: "Fitness Chapter 9",
            description: "HTML",
            link: "/html/fitness9/index.html",
            graded: true
        },
        {
            name: "Chapter 1",
            description: "JavaScript",
            link: "/javascript/chapter1/chapter/js01.html",
            graded: true
        },
        {
            name: "Chapter 1b",
            description: "JavaScript",
            link: "/javascript/chapter1/chapter/js01b.html",
            graded: true
        },
        {
            name: "Chapter 1, Project 2",
            description: "JavaScript",
            link: "/javascript/chapter1/project2/project01-02.html",
            graded: true
        },
        {
            name: "Chapter 1, Project 4",
            description: "JavaScript",
            link: "/javascript/chapter1/project4/project01-04.html",
            graded: true
        },
        {
            name: "Chapter 3",
            description: "JavaScript",
            link: "/javascript/chapter3/chapter/js03.html",
            graded: true
        },
        {
            name: "Chapter 3, Project 3",
            description: "JavaScript",
            link: "/javascript/chapter3/project3/project03-03.html",
            graded: true
        },
        {
            name: "Chapter 3, Project 4",
            description: "JavaScript",
            link: "/javascript/chapter3/project4/project03-04.html",
            graded: true
        },
    ]
    const filteredProjects = projects.filter(project => {
        if (showNotGraded) return !project.graded
        if (project.description === "HTML" && !showHTML) return false
        if (project.description === "JavaScript" && !showJavaScript) return false
        return true
    })

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>


            <div className="mb-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-x-0">
                <span className="font-medium">Filter</span>
                <label className="ml-auto flex items-center gap-2 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={showHTML}
                        onChange={(e) => {
                            setShowHTML(e.target.checked);
                            if (showNotGraded) setShowNotGraded(!e.target.checked)
                            }
                        }
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
                        onChange={(e) => {
                            setShowJavaScript(e.target.checked);
                            if (showNotGraded) setShowNotGraded(!e.target.checked);
                            }
                        }
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
                <span className="text-neutral-200 select-none">|</span>
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={showNotGraded}
                        onChange={(e) => {
                            setShowNotGraded(e.target.checked);
                            setShowHTML(!e.target.checked);
                            setShowJavaScript(!e.target.checked);
                            }
                        }
                        className="sr-only"
                    />
                    <div className={`
                            w-5 h-5 text-white select-none rounded border-2 transition-all duration-100 flex items-center justify-center
                            ${showNotGraded
                            ? 'bg-blue-600 border-blue-600 hover:bg-blue-400 hover:border-blue-400'
                            : 'border-neutral-400'
                        }`}>
                        {showNotGraded && '✓'}
                    </div>
                    <span className={` 
                            transition-all duration-100 ease-in
                            ${showNotGraded ? 'text-blue-600' : 'text-black'} 
                            `}>Only Ungraded</span>
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
                                    <a className="hover:text-neutral-400 transition-all"
                                        href={project.link}>
                                        {project.name}
                                    </a>
                                    <span className="text-red-500 ml-4">{!project.graded && 'Not Graded'}</span>
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
