"use client";
import { useState } from "react";
import Backlink from "../components/Backlink";
import Footer from "../components/Footer";

interface LeakEntry {
  name: string;
  url?: string;
  timestamp?: string;
  isUpdate?: boolean;
  isSecurityBreach?: boolean;
  isPaid?: boolean;
}

export default function BrainCipherPage() {
  // Data for the company cards at the top
  const featuredCompanies = [
    { name: "iycsa.com.co", timestamp: "02:19:48:30" },
    { name: "edisoft.es", timestamp: "02:19:48:30" },
    { name: "valedolobo.com", timestamp: "02:19:48:31" },
    { name: "soundtransit.org", timestamp: "02:19:48:31" },
    { name: "ruizre.es", timestamp: "02:19:48:31" },
    { name: "ddecor.com", timestamp: "02:19:48:31" },
  ];

  // Data for the list entries below
  const leakEntries: LeakEntry[] = [
    { name: "mbmdubai.com" },
    { name: "neatem.fr", isUpdate: true },
    {
      name: "Pulmonary Physicians of South Florida Clinics",
      isSecurityBreach: true,
    },
    {
      name: "It seems that it was easier to pay and calmly fix everything.",
      isPaid: true,
    },
    { name: "Royce Corporation" },
    { name: "G-ONE AUTO PARTS DE MÉXICO, S.A. DE C.V." },
    { name: "COOPERATIVA TELEFONICA DE CALAFATE LTD." },
    { name: "Basilio Advogados" },
    { name: "Berridge Manufacturing Co." },
    { name: "CHRISTODOULOS G. VASSILIADES & CO. LLC" },
    { name: "K&S Tool & Mfg Co." },
    { name: "rmn.fr" },
    { name: "beinlaw.co.il - Prof. Bein & Co." },
    { name: "cyceron.fr" },
    { name: "fabamaq.com" },
    { name: "Mars 2 LLC" },
    { name: "Family Wealth Advisors Ltd." },
    { name: "Cole Technologies Group" },
  ];

  const [activeTab, setActiveTab] = useState("main");

  // Get a Tailwind color class based on index
  const getColorClass = (index: number) => {
    const colorClasses = [
      "bg-blue-600", // blue
      "bg-red-600", // red
      "bg-green-700", // green
      "bg-purple-600", // purple
      "bg-teal-600", // teal
      "bg-pink-600", // pink
      "bg-amber-600", // amber
      "bg-indigo-600", // indigo
      "bg-emerald-600", // emerald
      "bg-violet-600", // violet
    ];
    return colorClasses[index % colorClasses.length];
  };

  // Generate company initials from name
  const getInitials = (name: string) => {
    if (name.includes(".")) {
      // For domain names
      return name.split(".")[0].substring(0, 2).toUpperCase();
    }

    // For company names
    const words = name.split(" ");
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }

    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }

    return name.substring(0, 2).toUpperCase();
  };

  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)]">
      {/* Navigation bar */}
      <nav className="flex justify-between items-center p-5 border-b border-gray-800">
        <h1 className="text-2xl font-bold">brain cipher</h1>
        <div className="flex gap-2">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "main"
                ? "bg-red-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("main")}
          >
            Main
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "faq"
                ? "bg-red-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("faq")}
          >
            FAQ
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "rules"
                ? "bg-red-700"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("rules")}
          >
            Rules
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto p-6">
        {/* Featured company cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {featuredCompanies.map((company, index) => {
            const colorClass = getColorClass(index);
            const initials = getInitials(company.name);

            return (
              <div
                key={index}
                className="border border-gray-800 rounded-md overflow-hidden bg-gray-900"
              >
                <div className="p-4">
                  {/* Company logo placeholder */}
                  <div
                    className={`h-40 flex items-center justify-center mb-4 relative ${colorClass} shadow-inner rounded-sm transition-all duration-300 hover:brightness-110`}
                  >
                    <span className="text-4xl font-bold text-white drop-shadow-sm">
                      {initials}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-lg">{company.name}</span>
                    <div className="flex items-center mt-2 text-gray-400">
                      <span className="inline-block mr-2">🕒</span>
                      <span>{company.timestamp}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 bg-red-700 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                  Open <span className="ml-2 font-bold">›</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Leak list entries */}
        <div className="space-y-4">
          {leakEntries.map((entry, index) => {
            const colorClass = getColorClass(index);
            const initials = getInitials(entry.name);

            return (
              <div
                key={index}
                className="p-4 border border-gray-800 rounded bg-gray-900 flex items-center"
              >
                {/* Company logo placeholder */}
                <div
                  className={`h-10 w-10 rounded flex-shrink-0 mr-4 flex items-center justify-center ${colorClass} shadow-sm transition-all duration-300 hover:brightness-110 border border-gray-700/30`}
                >
                  <span className="text-sm font-bold text-white drop-shadow-sm">
                    {initials}
                  </span>
                </div>

                <div className="flex-grow">
                  <span>
                    {entry.name}
                    {entry.isUpdate && (
                      <span className="ml-2 text-yellow-500 font-medium">
                        {" "}
                        | Update!
                      </span>
                    )}
                    {entry.isSecurityBreach && (
                      <span className="ml-2 text-red-500 font-medium">
                        {" "}
                        | Data security breach!
                      </span>
                    )}
                  </span>
                </div>

                {!entry.isPaid && (
                  <button className="px-4 py-2 bg-red-700 hover:bg-red-600 rounded ml-4 transition-all duration-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    View
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Backlink />
      <Footer />
    </div>
  );
}
