import Link from "next/link";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-gray-700"
            >
              NextJS Auth App
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
