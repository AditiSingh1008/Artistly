"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  fee: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
});

export default function OnboardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const existing = JSON.parse(localStorage.getItem("artists")) || [];
    const updated = [...existing, data];
    localStorage.setItem("artists", JSON.stringify(updated));
    toast.success("🎉 Artist submitted successfully!");
  };

  const categories = ["Singer", "Dancer", "DJ", "Speaker"];
  const languages = ["Hindi", "English", "Punjabi", "Marathi"];
  const fees = ["₹5,000 - ₹10,000", "₹10,000 - ₹25,000", "₹25,000+"];

  return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100 text-gray-900 px-4 py-10">


      <Toaster position="top-center" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-6 sm:p-8 border-2 border-black"
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          🎭 Artist Onboarding Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="Your Name"
              className="peer w-full p-3 pt-6 border-2 border-black rounded-md text-gray-900 font-semibold placeholder-transparent focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gray-50 transition"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-2 text-sm font-bold text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Name
            </label>
            <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
          </div>

          {/* Bio */}
          <div className="relative">
            <textarea
              {...register("bio")}
              id="bio"
              placeholder="Tell us about yourself"
              rows={4}
              className="peer w-full p-3 pt-6 border-2 border-black rounded-md text-gray-900 font-semibold placeholder-transparent focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gray-50 transition"
            />
            <label
              htmlFor="bio"
              className="absolute left-3 top-2 text-sm font-bold text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Bio
            </label>
            <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
          </div>

          {/* Category */}
          <div>
            <label className="block font-bold mb-1 text-gray-800">Category</label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <label key={cat} className="text-sm font-semibold text-gray-800">
                  <input type="checkbox" value={cat} {...register("category")} className="mr-2" />
                  {cat}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
          </div>

          {/* Languages */}
          <div>
            <label className="block font-bold mb-1 text-gray-800">Languages Spoken</label>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <label key={lang} className="text-sm font-semibold text-gray-800">
                  <input type="checkbox" value={lang} {...register("languages")} className="mr-2" />
                  {lang}
                </label>
              ))}
            </div>
            <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
          </div>

          {/* Fee */}
          <div className="relative">
            <select
              {...register("fee")}
              className="w-full p-3 pt-6 border-2 border-black rounded-md text-gray-900 font-semibold focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gray-50 transition"
            >
              <option value="">Select fee</option>
              {fees.map((fee) => (
                <option key={fee} value={fee}>{fee}</option>
              ))}
            </select>
            <label className="block mt-1 text-sm font-bold text-gray-800">Fee Range</label>
            <p className="text-red-500 text-sm mt-1">{errors.fee?.message}</p>
          </div>

          {/* Location */}
          <div className="relative">
            <input
              {...register("location")}
              type="text"
              id="location"
              placeholder="Enter Location"
              className="peer w-full p-3 pt-6 border-2 border-black rounded-md text-gray-900 font-semibold placeholder-transparent focus:outline-none focus:ring-4 focus:ring-blue-300 hover:bg-gray-50 transition"
            />
            <label
              htmlFor="location"
              className="absolute left-3 top-2 text-sm font-bold text-gray-700 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
            >
              Location
            </label>
            <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
          </div>

          {/* Image Upload */}
           {/* Image Upload */}
         <div>
         <label className="block font-bold mb-1 text-gray-800">
          Profile Image (Optional)
        </label>
        <input
         type="file"
         {...register("image")}
         className="w-full border-2 border-black rounded px-2 py-2 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
       />
       </div>


          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-bold px-6 py-2 rounded shadow-md border border-black"
            >
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </main>
  );
}
