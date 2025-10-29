'use client'

interface MapProps {
  location: string
  src: string
}

function SingleMap({ location, src }: MapProps) {
  return (
    <div className="flex-1">
      <h3 className="mb-4">{location}</h3>
      <div className="rounded-lg overflow-hidden border border-neutral-200 shadow-sm">
        <iframe
          src={src}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Location map of ${location}`}
        />
      </div>
    </div>
  )
}

export default function AdaptiveMaps() {

  const nordonia = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3206267831115!2d-81.51319792407632!3d41.30188807131091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311fe40878adbb%3A0x374c34858babe833!2sNordonia%20High%20School!5e0!3m2!1sen!2sus!4v1761354673156!5m2!1sen!2sus"
  
  const cvcc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3594698100324!2d-81.6244273!3d41.3445398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830e6dd7da6a0c5%3A0xe21fba97e75c809!2sCuyahoga%20Valley%20Career%20Center!5e0!3m2!1sen!2sus!4v1761354229211!5m2!1sen!2sus"

  return (
    <section className="my-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Attending . . .</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <SingleMap 
          location="Nordonia High School"
          src = {nordonia}
        />
        <SingleMap 
          location="Cuyahoga Valley Career Center"
          src = {cvcc}
        />
      </div>
    </section>
  )
}
