"use client";

import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="panel">
      <h2 className="panel-title">Dashboard</h2>
      <p className="mb-4">Welcome to your dashboard, {session?.user?.name || 'User'}!</p>
      <div className="bg-gray-100 p-4 rounded-md">
        <h3 className="text-lg font-semibold mb-2">User Information</h3>
        <p><strong>Name:</strong> {session?.user?.name}</p>
        <p><strong>Email:</strong> {session?.user?.email}</p>
        <p><strong>Role:</strong> {session?.user?.role}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
        <ul className="list-disc list-inside">
          <li>Your Profile</li>
          <li>Notifications</li>
          <li>Settings</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}
