'use client'

import { useState } from "react";

export default function Page() {
    const [isOpen, setIsOpen] = useState(false); 

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
            <svg width="64px" height="64px" viewBox="-12 -12 48.00 48.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
            <svg width="64px" height="64px" viewBox="-7.2 -7.2 38.40 38.40" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Projects
            </h1>
            <div className="">

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    >
                    <svg 
                        width="64px" 
                        height="64px" 
                        viewBox="-2.4 -2.4 28.80 28.80" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        transform="matrix(1, 0, 0, 1, 0, 0)rotate(270)" 
                        stroke="#000000" 
                        stroke-width="0.00024000000000000003"
                        style={{ transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-out' }}
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.528"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000"></path> </g></svg>

                </button>
            </div>
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
