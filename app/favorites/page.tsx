'use client'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Favorites
            </h1>

    {/* Favorite Music Artist Section */}

            <div className="mb-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-x-0">
                <span className="font-medium">
                    Favorite Music Artist
                </span>

                <span className="ml-auto flex items-center gap-1">
                    The Weeknd
                    <img src="content/the-weeknd/logo.png" className="w-4 h-4"></img>
                </span>
            </div>

            <img src="content/the-weeknd/the_weeknd.jpg" />
            
    {/* Favorite Game Section */}

            <div className="my-6 flex gap-6 align-right p-6 rounded-lg border border-neutral-200 border-x-0">
                <span className="font-medium">
                    Favorite Game
                </span>

                <span className="ml-auto flex items-center gap-1">
                    Path of Titans
                    <img src="content/path-of-titans/logo.jpg" className="w-4 h-4"></img>
                </span>

            </div>

            <div className="mb-6 aspect-video">
                <iframe className="w-full h-full"
                 src="https://www.youtube.com/embed/24dtP87n-lg?si=IUev8IGdEqDKQzI5"
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                />
            </div>
        </section>
    )
}