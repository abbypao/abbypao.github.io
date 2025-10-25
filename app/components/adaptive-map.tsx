'use client'

import { useEffect, useState } from 'react'

interface MapProps {
  location: string
  darkMapSrc: string
  lightMapSrc: string
}

function SingleMap({ location, darkMapSrc, lightMapSrc }: MapProps) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    
    checkTheme()

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
    
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return (
    <div className="flex-1">
      <h3 className="mb-4">{location}</h3>
      <div className="rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm">
        <iframe
          key={isDark ? 'dark' : 'light'}
          src={isDark ? darkMapSrc : lightMapSrc}
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

  const nordoniaDark = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3206267831115!2d-81.51319792407632!3d41.30188807131091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311fe40878adbb%3A0x374c34858babe833!2sNordonia%20High%20School!5e0!3m2!1sen!2sus!4v1761354673156!5m2!1sen!2sus&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
  
  const nordoniaLight = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.3206267831115!2d-81.51319792407632!3d41.30188807131091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88311fe40878adbb%3A0x374c34858babe833!2sNordonia%20High%20School!5e0!3m2!1sen!2sus!4v1761354673156!5m2!1sen!2sus"

  const cvccDark = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3594698100324!2d-81.6244273!3d41.3445398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830e6dd7da6a0c5%3A0xe21fba97e75c809!2sCuyahoga%20Valley%20Career%20Center!5e0!3m2!1sen!2sus!4v1761354229211!5m2!1sen!2sus&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d"
  
  const cvccLight = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3594698100324!2d-81.6244273!3d41.3445398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830e6dd7da6a0c5%3A0xe21fba97e75c809!2sCuyahoga%20Valley%20Career%20Center!5e0!3m2!1sen!2sus!4v1761354229211!5m2!1sen!2sus"

  return (
    <section className="my-12">
      <h2 className="mb-8 text-2xl font-semibold tracking-tighter">Attending . . .</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <SingleMap 
          location="Nordonia High School"
          darkMapSrc={nordoniaDark}
          lightMapSrc={nordoniaLight}
        />
        <SingleMap 
          location="Cuyahoga Valley Career Center"
          darkMapSrc={cvccDark}
          lightMapSrc={cvccLight}
        />
      </div>
    </section>
  )
}
