import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-2xl font-bold">Demo not found.</h1>
      <p className="mb-6 text-gray-500">
        This demo link may be invalid or the cafe page has not been created yet.
      </p>
      <Link href="/demo/sample-cafe" className="text-blue-600 underline">
        View sample demo
      </Link>
    </div>
  )
}
