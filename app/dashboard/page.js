'use client';
import PageWrapper from '@/components/PageWrapper';
import Header from '@/components/Header';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function DashboardPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('artists');
    if (stored) {
      setArtists(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (index) => {
    const updated = [...artists];
    updated.splice(index, 1);
    setArtists(updated);
    localStorage.setItem('artists', JSON.stringify(updated));
    toast.success('Artist deleted ✅');
  };

  return (
      <PageWrapper>
      <Toaster position="top-center" />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-gray-300 dark:border-gray-700"
        >
          <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-pink-400 mb-6">
            📋 Manager Dashboard
          </h1>

          {artists.length === 0 ? (
            <p className="text-center text-gray-600 dark:text-gray-300">
              No artist submissions yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm sm:text-base table-auto border border-gray-300 dark:border-gray-600 rounded-md">
                <thead className="bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-white font-bold">
                  <tr>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Category</th>
                    <th className="p-3 border">Location</th>
                    <th className="p-3 border">Fee</th>
                    <th className="p-3 border">Languages</th>
                    <th className="p-3 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {artists.map((artist, idx) => (
                    <tr
                      key={idx}
                      className="text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150"
                    >
                      <td className="p-2 border">{artist.name}</td>
                      <td className="p-2 border">
                        {Array.isArray(artist.category)
                          ? artist.category.join(', ')
                          : artist.category}
                      </td>
                      <td className="p-2 border">{artist.location}</td>
                      <td className="p-2 border">{artist.fee}</td>
                      <td className="p-2 border">
                        {Array.isArray(artist.languages)
                          ? artist.languages.join(', ')
                          : artist.languages}
                      </td>
                      <td className="p-2 border">
                        <button
                          onClick={() => handleDelete(idx)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm font-semibold transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>
      </main>
    </PageWrapper>
  );
}
