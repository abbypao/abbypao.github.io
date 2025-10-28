export default function NotFound() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Page Not Found
      </h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <p className="mb-4">Here's an easter egg...</p>
      <img src="/egg.png" alt="Easter Egg" className="w-64 h-85 mx-auto" />
    </section>
  )
}
