import AdaptiveMap from '@/app/components/adaptive-map'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Contact
      </h1>
      <p className="mb-4">
        {`plc`}
      </p>
      <div className="my-8">
        <AdaptiveMap />
      </div>
    </section>
  )
}