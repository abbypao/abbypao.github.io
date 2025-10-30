'use client'

import { useState } from 'react'

export default function Page() {
    const [isOpen, setIsOpen] = useState(true)
    const [showHTML, setShowHTML] = useState(true)
    const [showJavaScript, setShowJavaScript] = useState(true)
    const [searchQuery, setSearchQuery] = useState('')

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
        if (searchQuery && !project.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
        return true
    })

    return (
        <section className="max-w-2xl mx-auto p-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-semibold tracking-tighter">
                    Projects
                </h1>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Toggle projects list"
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform duration-300 ease-in-out"
                        style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' }}
                    >
                        <path 
                            fillRule="evenodd" 
                            clipRule="evenodd" 
                            d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" 
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>

            <div className="mb-6 relative">
                <svg 
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle 
                        cx="11" 
                        cy="11" 
                        r="8" 
                        stroke="currentColor" 
                        strokeWidth="2"
                    />
                    <path 
                        d="M21 21L16.65 16.65" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                />
                {searchQuery && (
                    <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                        aria-label="Clear search"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path 
                                d="M18 6L6 18M6 6L18 18" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                )}
            </div>

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
                            ? 'bg-neutral-900 border-neutral-900' 
                            : 'bg-white border-neutral-300 group-hover:border-neutral-400'
                        }
                    `}>
                        {showHTML && (
                            <svg 
                                width="12" 
                                height="12" 
                                viewBox="0 0 12 12" 
                                fill="none"
                                className="text-white"
                            >
                                <path 
                                    d="M10 3L4.5 8.5L2 6" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-sm font-medium select-none">HTML Projects</span>
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
                            ? 'bg-neutral-900 border-neutral-900' 
                            : 'bg-white border-neutral-300 group-hover:border-neutral-400'
                        }
                    `}>
                        {showJavaScript && (
                            <svg 
                                width="12" 
                                height="12" 
                                viewBox="0 0 12 12" 
                                fill="none"
                                className="text-white"
                            >
                                <path 
                                    d="M10 3L4.5 8.5L2 6" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    <span className="text-sm font-medium select-none">JavaScript Projects</span>
                </label>
            </div>

            <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ 
                    maxHeight: isOpen ? '2000px' : '0',
                    opacity: isOpen ? 1 : 0
                }}
            >
                <div className="space-y-6">
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
                                        <a className="hover:text-neutral-400 transition-all" href={project.link}>
                                            {project.name}
                                        </a>
                                    </p>
                                    <p className="text-neutral-600">{project.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-neutral-500 text-center py-8">
                            {searchQuery 
                                ? `No projects found matching "${searchQuery}"`
                                : 'No projects selected. Check at least one category above.'
                            }
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}