'use client';
import PageWrapper from '@/components/PageWrapper';
import Header from '@/components/Header';
import artists from '@/data/artists';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ArtistsPage() {
  const [filter, setFilter] = useState('');
  const filteredArtists = artists.filter(
    (artist) => filter === '' || artist.category === filter
  );

  return (
      <PageWrapper>
      <main>
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700 dark:text-pink-400 drop-shadow">
          🎤 Artist Listings
        </h1>

        {/* Filter Buttons */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {['', 'Singer', 'Dancer', 'DJ'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold shadow transition ${
                filter === cat
                  ? 'bg-blue-600 text-white scale-105'
                  : 'bg-white text-blue-600 dark:bg-gray-800 dark:text-white border border-blue-300 hover:bg-blue-50 dark:hover:bg-gray-700'
              }`}
            >
              {cat === '' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Artist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredArtists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-6 rounded-xl shadow-lg hover:shadow-xl bg-white/90 dark:bg-gray-800 backdrop-blur-md border border-white/40 dark:border-gray-700 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-purple-700 dark:text-pink-300 mb-1">
                {artist.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {artist.category} • {artist.location}
              </p>
              <p className="mt-2 font-semibold text-gray-800 dark:text-white">
                {artist.price}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Ask for Quote
              </button>
            </motion.div>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}
