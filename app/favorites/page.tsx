'use client'

import { useState, useEffect, useRef } from "react"
import { Play, Pause } from 'lucide-react';

export default function Page() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState('0:00')
    const [remainingTime, setRemainingTime] = useState('0:00')
    const [progress, setProgress] = useState(0)

    const togglePlay = () => {
        const audio = audioRef.current
        if (!audio) return

        if (isPlaying) { audio.pause() }
            else audio.play()

        setIsPlaying(!isPlaying)
    }

    useEffect(() => {
        const audio = audioRef.current
        if (!audio) return

        const updateProgress = () => {
            const percent = (audio.currentTime / audio.duration) * 100
            setProgress(percent)

            const mins = Math.floor(audio.currentTime / 60)
            const secs = Math.floor(audio.currentTime % 60)
            setCurrentTime(`${mins}:${secs.toString().padStart(2, '0')}`)

            const remainingSeconds = Math.floor(audio.duration - audio.currentTime)
            const remainingMins = Math.floor(remainingSeconds / 60)
            const remainingSecs = remainingSeconds % 60
            setRemainingTime(`-${remainingMins}:${remainingSecs.toString().padStart(2, '0')}`)

        }
        

        audio.addEventListener('timeupdate', updateProgress)
        return () => audio.removeEventListener('timeupdate', updateProgress)
    }, [])

    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Favorites
            </h1>

            <div className="mb-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-x-0">
                <span className="font-medium">
                    Favorite Music Artist
                </span>

                <span className="ml-auto flex items-center gap-1">
                    The Weeknd
                    <img src="content/the-weeknd/logo.png" className="w-4 h-4"></img>
                </span>
            </div>

            <span className="font-medium">The Weeknd's Most Streamed Song</span>

            <audio 
                ref={audioRef} 
                src="file_example_MP3_2MG.mp3"
                onLoadedMetadata={(e) => {
                    const mins = 3;
                    const secs = 22;
                    setDuration((mins * 60) + secs);
                }}
            />

            <div className="mb-6 flex rounded border border-neutral-200 bg-white shadow-sm group">
                <img src="content/the-weeknd/blindinglights.jpg" className="size-32 rounded-l" />
                
                <div className="w-full">
                    <div className="w-full flex flex-col items-center justify-center gap-3 px-6">
                        <span className="font-medium">Blinding Lights</span>
                        <span className="font-light">The Weeknd - After Hours</span>

                        <button onClick={togglePlay} className="cursor-pointer">
                            {isPlaying ? <Pause strokeWidth={1} /> : <Play strokeWidth={1} />}
                        </button>
                    </div>

                    <div className="w-full flex flex-col gap-1">
                        <div className="flex justify-between mx-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <span>{currentTime}</span>
                            <span>{remainingTime}</span>
                        </div>
                        
                        <div className="relative w-full h-1 bg-neutral-300 cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100">
                            <div
                                className="absolute h-full bg-neutral-700 transition-all duration-100 flex items-center justify-end"
                                style={{ width: `${progress}%` }}
                            > 
                            <div className="h-2 w-2 border border-neutral-700 border-b-0 bg-neutral-300  relative -top-1" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-1">
                <img className="w-full h-full object-contain" src="content/the-weeknd/afterhours.webp"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/mdm.jpg"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/starboy.jpg"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/bbtm.jpg"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/kissland.png"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/trilogy.png"></img>
            </div>

            <div className="my-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-x-0">
                <span className="font-medium">
                    Favorite Game
                </span>

                <span className="ml-auto flex items-center gap-1">
                    Path of Titans
                    <img src="content/path-of-titans/logo.jpg" className="w-4 h-4"></img>
                </span>

            </div>


            <div className="grid grid-cols-2 gap-1">
                <img className="w-full h-full object-contain" src="content/path-of-titans/spinosaurus.jpg"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/eotriceratops.jpg"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/dilophosaurus.png"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/iguanodon.png"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/styracosaurus.png"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/tyrannosaurus.jpg"></img>

            </div>
            <video controls className="mt-1" src="content/path-of-titans/rex_pvp.mp4"></video>
        </section>
    )
}