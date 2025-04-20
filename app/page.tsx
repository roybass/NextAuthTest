export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Next.js Auth App</h1>
      <p className="text-xl text-center max-w-2xl mb-8">
        This is a demonstration of a Next.js application with role-based authentication and access control.
      </p>
      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Authentication with NextAuth.js</li>
          <li>Role-based access control</li>
          <li>Protected routes with middleware</li>
          <li>Dashboard for authenticated users</li>
          <li>Admin panel for administrators</li>
        </ul>
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-blue-800">
            <strong>Try logging in with:</strong>
          </p>
          <p className="text-blue-800">
            Admin: admin@example.com / admin123
          </p>
          <p className="text-blue-800">
            User: user@example.com / user123
          </p>
        </div>
      </div>
    </div>
  );
}
