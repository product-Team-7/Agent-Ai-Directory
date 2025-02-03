// "use client"
// import { Suspense, useEffect, useState } from "react";
// import { Hero } from "@/components/hero";
// import {ToolCard} from "@/components/tool-card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import InfiniteScroll from "@/components/infinite-scroll";
// import Link from "next/link";
// import axios from "axios";

// export default function Home() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [visibleCategories, setVisibleCategories] = useState(3); // Track number of visible categories

//   useEffect(() => {
//     // Fetch data from the API on component mount
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/api/home");
//         setCategories(response.data.data); // Set categories from API response
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Load more categories when "And Many More" button is clicked
//   const loadMoreCategories = () => {
//     setVisibleCategories(prev => prev + 3);
//   };

//   // Slice the categories array to show only the visible categories
//   const visibleCategoryKeys = Object.keys(categories).slice(0, visibleCategories);

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
//               {Object.keys(categories).map((category) => (
//                 <SelectItem key={category} value={category}>
//                   {category}
//                 </SelectItem>
//               ))}
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

//         {loading ? (
//           <div className="text-center text-white">Loading...</div>
//         ) : (
//           visibleCategoryKeys.map((category) => (
//             <div key={category} className="mb-12 p-5">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center gap-2">
//                   <h2 className="text-white text-2xl font-semibold">{category}</h2>
//                   <span className="px-2 py-0.5 rounded-full bg-[#2EFFD5] text-black text-sm">
//                     {categories[category].length}
//                   </span>
//                 </div>
//                 <Link
//                   href={`/${category}`}
//                   className="text-white/70 hover:text-white transition-colors"
//                 >
//                   View All →
//                 </Link>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {categories[category].map((tool) => (
//                   <ToolCard
//                     key={tool._id}
//                     name={tool.name}
//                     category={tool.category}
//                     pricingModel={tool.pricingModel}
//                     websiteUrl={tool.websiteUrl}
//                     tagline={tool.tagline}
//                     logo={tool.logo}
//                     socialTags={tool.socialTags} // Make sure to handle this in your data if it exists
//                   />
//                 ))}
//               </div>
//             </div>
//           ))
//         )}

//         {visibleCategories < Object.keys(categories).length && (
//           <div className="flex justify-center mt-8">
//             <button
//               onClick={loadMoreCategories}
//               className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white hover:bg-white/90 text-black font-semibold transition-colors"
//             >
//               And Many More
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client"

import { Suspense, useEffect, useState, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Hero } from "@/components/hero"
import { ToolCard } from "@/components/tool-card"
import InfiniteScroll from "@/components/infinite-scroll"
import Link from "next/link"
import axios from "axios"
import { SearchFilters } from "@/components/search-filters"
import { PricingFilter } from "@/components/pricing-filters"
import { AccessFilter } from "@/components/access-filters"
import { SortFilter } from "@/components/sort-filters"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Home() {
  const [categories, setCategories] = useState({})
  const [loading, setLoading] = useState(true)
  const [visibleCategories, setVisibleCategories] = useState(20)
  const containerRef = useRef(null)

  // Filter states
  const [searchTerm, setSearchTerm] = useState("")
  const [pricingFilter, setPricingFilter] = useState("all")
  const [accessFilter, setAccessFilter] = useState("all")
  const [sortFilter, setSortFilter] = useState("popular")

  useEffect(() => {
    fetchData()
  }, []) // Only refetch data when the component mounts

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await axios.get("http://localhost:3000/api/home", {
        params: {
          search: searchTerm,
          pricing: pricingFilter,
          access: accessFilter,
          sort: sortFilter,
        },
      })
      setCategories(response.data.data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loading) {
      animateElements()
    }
  }, [loading])

  const animateElements = () => {
    gsap.utils.toArray(".category-section").forEach((section, index) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      })
    })

    gsap.utils.toArray(".tool-card").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      })
    })
  }

  const visibleCategoryKeys = Object.keys(categories).slice(0, visibleCategories)

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <Suspense fallback={<div className="min-h-[600px] bg-black" />}>
        <Hero />
      </Suspense>

      <div className="container mx-auto px-4 mb-20">
        <InfiniteScroll />
        <div className="flex flex-wrap justify-between items-center gap-5 mb-10 p-10">
          <div className="flex-1 min-w-[200px]">
            <SearchFilters onSearch={setSearchTerm} />
          </div>
          <div className="flex-1 min-w-[200px]">
            <PricingFilter onPricingChange={setPricingFilter} />
          </div>
          <div className="flex-1 min-w-[200px]">
            <AccessFilter onAccessChange={setAccessFilter} />
          </div>
          <div className="flex-1 min-w-[200px]">
            <SortFilter onSortChange={setSortFilter} />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          visibleCategoryKeys.map((category) => (
            <div key={category} className="mb-12 p-7 category-section">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-white text-2xl font-semibold">{category}</h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#2EFFD5] text-black text-sm">
                    {categories[category].length}
                  </span>
                </div>
                <Link
                  href={`/${category}`}
                  className="text-white/70 hover:text-white transition-colors border px-3 py-1.5 rounded-md"
                >
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[category].slice(0, 6).map((tool) => (
                  <div key={tool._id} className="tool-card">
                    <ToolCard
                      name={tool.name}
                      category={tool.category}
                      pricingModel={tool.pricingModel}
                      websiteUrl={tool.websiteUrl}
                      tagline={tool.tagline}
                      logo={tool.logo}
                      socialTags={tool.socialTags || []}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

