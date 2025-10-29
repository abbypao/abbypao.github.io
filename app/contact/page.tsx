import AdaptiveMap from '@/app/components/adaptive-map'
import ContactForm from '@/app/components/contact-form'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact
      </h1>
      <div className="mb-4">
        <ContactForm />
      </div>
      <div className="my-8">
        <AdaptiveMap />
      </div>
    </section>
  )
}