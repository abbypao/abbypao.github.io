'use client'

export default function Page() {
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

            <div className="grid grid-cols-2 gap-0">
                <img className="w-full h-full object-contain" src="content/the-weeknd/starboy.jpg"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/afterhours.webp"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/bbtm.jpg"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/mdm.jpg"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/kissland.png"></img>
                <img className="w-full h-full object-contain" src="content/the-weeknd/trilogy.png"></img>
            </div>

            <div className="my-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-x-0">
                <span className="font-medium">
                    Favorite Game
                </span>

                <a href="https://www.youtube.com/watch?v=24dtP87n-lg" 
                className="ml-auto flex items-center gap-1 cursor-pointer
                transition-all duration-100 hover:text-neutral-400" title="Watch the trailer">
                    Path of Titans
                    <img src="content/path-of-titans/logo.jpg" className="w-4 h-4"></img>
                </a>

            </div>

            <video controls src="content/path-of-titans/rex_pvp.mp4"></video>
            <div className="grid grid-cols-2">
                <img className="w-full h-full object-contain" src="content/path-of-titans/spinosaurus.jpg"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/eotriceratops.jpg"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/dilophosaurus.png"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/iguanodon.png"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/styracosaurus.png"></img>
                <img className="w-full h-full object-contain" src="content/path-of-titans/tyrannosaurus.jpg"></img>
                
            </div>
        </section>
    )
}