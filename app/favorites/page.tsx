'use client'

import { useState } from "react"

export default function Page() {
    const [selected, setSelected] = useState('music') 

    return ( 
        <section>
            <div className="mb-8 w-full">

                <span className="text-2xl font-semibold tracking-tighter">Favorites</span>

                <span className="flex gap-6 mt-2">
                    <span 
                        className={`cursor-pointer transition-all hover:text-neutral-400 ${selected === 'music' ? 'font-medium ' : ''}`}
                        onClick={() => setSelected('music')}
                    >Music</span>
                    <span
                        className={`cursor-pointer transition-all hover:text-neutral-400 ${selected === 'games' ? 'font-medium' : ''}`}
                        onClick={() => setSelected('games')}
                    >Games</span>
                    <span
                        className={`cursor-pointer transition-all hover:text-neutral-400 ${selected === 'cars' ? 'font-medium' : ''}`}
                        onClick={() => setSelected('cars')}
                    >Cars</span>
                    <span
                        className={`cursor-pointer transition-all hover:text-neutral-400 ${selected === 'animals' ? 'font-medium' : ''}`}
                        onClick={() => setSelected('animals')}
                    >Animals</span>
                </span>

            </div>


            {selected === 'music' && (
                <div>
                    <h1 className="mb-2 text-lg font-semibold">The Weeknd</h1>
                    <h1 className="mb-2 text-lg font-semibold">The Neighborhood</h1>
                    <h1 className="mb-2 text-lg font-semibold">Tame Impala</h1>
                </div>
            )}
            {selected === 'games' && (
                <div>
                    <h1 className="mb-2 text-lg font-semibold">Path of Titans</h1>
                    <h1 className="mb-2 text-lg font-semibold">Red Dead Redemption 2</h1>
                    <h1 className="mb-2 text-lg font-semibold">Baldurs Gate 3</h1>
                </div>
            )}
            
            {selected === 'cars' && (
                <div>
                    <h1 className="mb-2 text-lg font-semibold">Toyota GR Supra</h1>
                    <h1 className="mb-2 text-lg font-semibold">Ford Mustang Dark Horse</h1>
                    <h1 className="mb-2 text-lg font-semibold">Chevrolet Corvette C8</h1>
                </div>
            )}

            {selected === 'animals' && (
                <div>
                    <h1 className="mb-2 text-lg font-semibold">Dinosaurs</h1>
                        <img src="/tarbosaurus.webp"></img>
                        <img src="/trex.webp"></img>
                        <img src="/carno.png"></img>
                    <h1 className="mb-2 text-lg font-semibold">Birds</h1>
                        <img src="/beardedvulture.jpeg"></img>
                        <img src="/goldeneagle.jpg"></img>
                        <img src="/raven.webp"></img>
                    <h1 className="mb-2 text-lg font-semibold">Reptiles</h1>
                        <img src="/boa.avif"></img>
                        <img src="/komododragon.avif"></img>
                        <img src="/crocodile.jpg"></img>
                </div>
            )}

        </section>
    )
}