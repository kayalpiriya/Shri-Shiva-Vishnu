"use client";
import SubPageHero from "@/components/SubPageHero";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";

export default function GalleryMain() {
  const albums = [
    { title: "Photo Gallery", href: "/resources/gallery/photos", img: "/images/image12.png" },
    { title: "Brammothsavam", href: "/resources/gallery/brammothsavam", img: "/images/image10.png" }
  ];

  return (
    <main className="bg-cream min-h-screen pb-20">
      <SubPageHero title="Divine Gallery" subtitle="Moments of Spirituality" />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {albums.map((album) => (
            <Link key={album.title} href={album.href}>
              <motion.div whileHover={{ y: -10 }} className="relative h-[500px] rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl">
                <img src={album.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 text-white">
                  <h3 className="text-4xl font-heading font-black italic mb-4">{album.title}</h3>
                  <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] bg-white/20 px-6 py-3 rounded-full backdrop-blur-md">Explore Album <ArrowRight size={16}/></span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}