import Link from "next/link";
import { Star, Heart, Share2, CheckCircle2, Download, FileText, LayoutDashboard, Flag } from "lucide-react";
import ImageGallery from "@/components/ImageGallery";

const STATIC_DESIGN_IDS = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"];

export const dynamicParams = false;

export function generateStaticParams() {
  return STATIC_DESIGN_IDS.map((id) => ({ id }));
}

// Mock fetching design data
export default async function DesignDetail({ params }: { params: Promise<{ id: string }> }) {
  // In Next.js 15, params is a Promise that needs to be awaited
  const { id } = await params;
  
  // Simulated DB Design Object
  const design = {
    id,
    title: "Sleek 3-Floor Mountain Cabin",
    vendor: {
      name: "Urban Nest Architects",
      avatar: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80&w=150&h=150",
      rating: 4.8,
      sales: 1205
    },
    price: 149.99,
    description: "A modern, minimalist 3-story cabin designed specifically for sloping and mountainous terrains. This comprehensive blueprint includes full electrical schematics, plumbing layouts, and structural reinforcements for snow loads. Floor-to-ceiling glass fronts provide uninterrupted panoramic views while maintaining superior thermal efficiency.",
    style: "Rustic Modern",
    buildingType: "Residential",
    specs: {
      bedrooms: 3,
      bathrooms: 2.5,
      floors: 3,
      sqft: 2450,
      foundation: "Concrete Pier",
    },
    features: [
      "AutoCAD (.dwg) & Revit (.rvt) source files included",
      "High-res PDF Plan Sets (A1 / Arch D)",
      "Material Estimation List (CSV)",
      "3D Renderings & Walkthrough Video",
      "Structural Engineering Notes"
    ],
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
    ]
  };

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-8 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex text-sm text-zinc-500 mb-8">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/search" className="hover:text-zinc-900 dark:hover:text-white">Designs</Link>
          <span className="mx-2">/</span>
          <Link href="/search?category=residential" className="hover:text-zinc-900 dark:hover:text-white">Residential</Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-900 dark:text-zinc-50 font-medium truncate">{design.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Gallery & Content */}
          <div className="w-full lg:w-[60%] flex flex-col gap-10">
            <ImageGallery images={design.images} />
            
            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">About this Design</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {design.description}
              </p>
            </section>

            {/* Specifications Matrix */}
            <section className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6">Specifications</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
                <div>
                  <span className="block text-sm text-zinc-500 mb-1">Building Type</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{design.buildingType}</span>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 mb-1">Style</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{design.style}</span>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 mb-1">Total Area</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{design.specs.sqft} sq ft</span>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 mb-1">Bedrooms / Baths</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{design.specs.bedrooms} Bed, {design.specs.bathrooms} Bath</span>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 mb-1">Floors</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{design.specs.floors}</span>
                </div>
                <div>
                  <span className="block text-sm text-zinc-500 mb-1">Foundation</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-50">{design.specs.foundation}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right: Sticky Sidebar (Purchase Info, Vendor) */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div className="sticky top-24">
              
              <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight pr-8">{design.title}</h1>
                  <span className="absolute top-8 right-8 text-2xl font-bold text-indigo-600 dark:text-indigo-400">${design.price}</span>
                </div>
                
                <div className="flex items-center gap-4 mb-8 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-zinc-900 dark:text-zinc-50">4.8</span>
                    <span>(124 reviews)</span>
                  </div>
                  <span>•</span>
                  <span>1.4k saves</span>
                </div>

                {/* What's Included */}
                <div className="mb-8">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50 mb-3 text-sm tracking-wide uppercase">What's Included</h3>
                  <ul className="space-y-3">
                    {design.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-zinc-600 dark:text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3">
                  <Link href="/cart" className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-center shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" /> Buy & Download Now
                  </Link>
                  <button className="w-full py-4 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-bold rounded-xl text-center transition-all flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" /> Save to Wishlist
                  </button>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                  <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" /> Share
                  </button>
                  <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-red-600 dark:hover:text-red-500 transition-colors">
                    <Flag className="w-4 h-4" /> Report
                  </button>
                </div>
              </div>

              {/* Vendor Info Component */}
              <div className="mt-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-zinc-900 dark:text-zinc-50">About the Architect</h3>
                  <Link href={`/vendors`} className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline">View Profile</Link>
                </div>
                <div className="flex items-center gap-4">
                  <img src={design.vendor.avatar} alt={design.vendor.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-50">{design.vendor.name}</h4>
                    <p className="text-sm text-zinc-500">{design.vendor.sales} Sales | {design.vendor.rating} ★ Rating</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
