"use client";

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

type UserDisplay = {
  id: string;
  name: string;
  email: string;
  role: string;
};

// This is a mock list for demonstration purposes
// In a real application, this would come from an API
const mockUsers: UserDisplay[] = [
  { id: '1', name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  { id: '2', name: 'Regular User', email: 'user@example.com', role: 'user' },
  { id: '3', name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
  { id: '4', name: 'John Smith', email: 'john@example.com', role: 'user' },
];

export default function AdminPanel() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<UserDisplay[]>([]);

  useEffect(() => {
    // In a real application, this would be an API call
    // For this demo, we'll just use the mock data
    setUsers(mockUsers);
  }, []);

  return (
    <div className="panel">
      <h2 className="panel-title">Admin Panel</h2>
      <p className="mb-4">Welcome to the admin panel, {session?.user?.name}!</p>
      
      <div className="overflow-x-auto">
        <h3 className="text-lg font-semibold my-4">User Management</h3>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button className="text-blue-500 hover:underline mr-2">Edit</button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Admin Tools</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-md">
            <h4 className="font-medium">Site Statistics</h4>
            <p>View detailed analytics</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <h4 className="font-medium">Content Management</h4>
            <p>Manage site content</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <h4 className="font-medium">System Logs</h4>
            <p>View application logs</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-md">
            <h4 className="font-medium">Settings</h4>
            <p>Configure system settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}
