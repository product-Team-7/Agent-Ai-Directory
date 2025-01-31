// import { Suspense } from "react"
// import { Hero } from "@/components/hero"
// import { ToolCard } from "@/components/tool-card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import InfiniteScroll from "@/components/infinite-scroll"
// import Link from "next/link"

// export default function Home() {
//   const categories = [
//     { name: "Video Generation", count: 20 },
//     { name: "Education", count: 20 },
//   ]

//   const tools = [
//     {
//       name: "Memon",
//       description:
//         "Enables engineering teams to build multi-step AI Agents that connect to any system and achieve any task.",
//       logo: "/placeholder.svg?height=40&width=40",
//       type: "Premium",
//       socialTags: ["Social Media", "Social Media", "Social Media"],
//     },
//     {
//       name: "metastory AI",
//       description:
//         "Enables engineering teams to build multi-step AI Agents that connect to any system and achieve any task.",
//       logo: "/placeholder.svg?height=40&width=40",
//       type: "Paid",
//       socialTags: ["Social Media", "Social Media", "Social Media"],
//     },
//     {
//       name: "SWE Lens",
//       description:
//         "Enables engineering teams to build multi-step AI Agents that connect to any system and achieve any task.",
//       logo: "/placeholder.svg?height=40&width=40",
//       type: "Free",
//       socialTags: ["Social Media", "Social Media", "Social Media"],
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-black">
//       <Suspense fallback={<div className="min-h-[600px] bg-black" />}>
//         <Hero />
//       </Suspense>

//       <div className="container mx-auto px-4 mb-20">
//         <InfiniteScroll />

//         <div className="flex flex-wrap gap-4 mb-8 sm:mb-12 justify-center items-center">
//           <Select>
//             <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
//               <SelectValue placeholder="Select Category" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="marketing">Marketing</SelectItem>
//               <SelectItem value="music">Music</SelectItem>
//             </SelectContent>
//           </Select>

//           <Select>
//             <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
//               <SelectValue placeholder="Pricing Models" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="free">Free</SelectItem>
//               <SelectItem value="premium">Premium</SelectItem>
//               <SelectItem value="paid">Paid</SelectItem>
//             </SelectContent>
//           </Select>

//           <Select>
//             <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
//               <SelectValue placeholder="Access Models" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="api">API</SelectItem>
//               <SelectItem value="webapp">Web App</SelectItem>
//             </SelectContent>
//           </Select>

//           <Select>
//             <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
//               <SelectValue placeholder="Sort By: Popular" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="popular">Popular</SelectItem>
//               <SelectItem value="newest">Newest</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {categories.map((category) => (
//           <div key={category.name} className="mb-12 p-5">
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-2">
//                 <h2 className="text-white text-2xl font-semibold">{category.name}</h2>
//                 <span className="px-2 py-0.5 rounded-full bg-[#2EFFD5] text-black text-sm">{category.count}</span>
//               </div>
//               <Link
//                 href={`/${category.name}`}
//                 className="text-white/70 hover:text-white transition-colors"
//               >
//                 View All →
//               </Link>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {tools.map((tool) => (
//                 <ToolCard key={tool.name} {...tool} />
//               ))}
//             </div>
//           </div>
//         ))}

//         <div className="flex justify-center mt-8">
//           <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-white/90 text-black font-semibold transition-colors">
//             And Many More
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"
import { Suspense, useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import {ToolCard} from "@/components/tool-card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InfiniteScroll from "@/components/infinite-scroll";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCategories, setVisibleCategories] = useState(3); // Track number of visible categories

  useEffect(() => {
    // Fetch data from the API on component mount
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/home`);
        setCategories(response.data.data); // Set categories from API response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Load more categories when "And Many More" button is clicked
  const loadMoreCategories = () => {
    setVisibleCategories(prev => prev + 3);
  };

  // Slice the categories array to show only the visible categories
  const visibleCategoryKeys = Object.keys(categories).slice(0, visibleCategories);

  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={<div className="min-h-[600px] bg-black" />}>
        <Hero />
      </Suspense>

      <div className="container mx-auto px-4 mb-20">
        <InfiniteScroll />

        <div className="flex flex-wrap gap-4 mb-8 sm:mb-12 justify-center items-center">
          <Select>
            <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(categories).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Pricing Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="premium">Premium</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Access Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="api">API</SelectItem>
              <SelectItem value="webapp">Web App</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full sm:w-[200px] bg-card text-white border-white/10">
              <SelectValue placeholder="Sort By: Popular" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          visibleCategoryKeys.map((category) => (
            <div key={category} className="mb-12 p-5">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-white text-2xl font-semibold">{category}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#2EFFD5] text-black text-sm">
                    {categories[category].length}
                  </span>
                </div>
                <Link
                  href={`/${category}`}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[category].map((tool) => (
                  <ToolCard
                    key={tool._id}
                    name={tool.name}
                    category={tool.category}
                    pricingModel={tool.pricingModel}
                    websiteUrl={tool.websiteUrl}
                    tagline={tool.tagline}
                    logo={tool.logo}
                    socialTags={tool.socialTags} // Make sure to handle this in your data if it exists
                  />
                ))}
              </div>
            </div>
          ))
        )}

        {visibleCategories < Object.keys(categories).length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreCategories}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-white/90 text-black font-semibold transition-colors"
            >
              And Many More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
