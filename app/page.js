"use client";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  const categories = [
    { name: "Singers", image: "/Singer.jpg" },
    { name: "Dancers", image: "/Dancer.jpg" },
    { name: "DJs", image: "/DJ.jpg" },
    { name: "Speakers", image: "/Speaker.jpg" },
  ];

  return (
    <>
      <Header />

      {/* Background wrapper supporting light & dark theme */}
      <div
        key={isDark ? "dark" : "light"}
        className="min-h-screen px-4 py-10 transition-colors duration-500
        bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        text-gray-900 dark:text-white"
      >
        <main className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <TypeAnimation
              sequence={[
                "Book Performing Artists Effortlessly",
                2000,
                "Hire Singers, DJs, Dancers, Speakers",
                2000,
                "Create Unforgettable Experiences",
                2000,
              ]}
              wrapper="h2"
              cursor={true}
              repeat={Infinity}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-6"
            >
              Find, connect, and manage top talents for your next event.
            </motion.p>

            <motion.a
              href="/artists"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
                Explore Artists
              </button>
            </motion.a>
          </section>

          {/* Category Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col h-[480px] bg-white/80 dark:bg-gray-800 
                  backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl 
                  cursor-pointer overflow-hidden border border-white/30 dark:border-gray-700 transition-all"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-[340px] w-full object-cover"
                />
                <div className="p-4 text-center flex-1 flex items-center justify-center">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-xl font-extrabold text-transparent bg-clip-text 
                      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                      dark:from-purple-300 dark:via-pink-300 dark:to-red-300"
                  >
                    {cat.name}
                  </motion.h3>
                </div>
              </motion.div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
