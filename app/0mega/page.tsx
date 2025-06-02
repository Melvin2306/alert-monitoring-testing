"use client";

import Backlink from "../components/Backlink";
import Footer from "../components/Footer";

export default function OmegaPage() {
  // Table data
  const leakedData = [
    {
      company: "Rotorcraft Leasing Company",
      leaked: "100%",
      tags: "Helicopter support, pilot training, fueling service, maintenance",
      size: "1.54 TB",
      date: "2024-01-17",
      downloads: "open",
    },
    {
      company: "US Liner Company & American Made LLC",
      leaked: "100%",
      tags: "Industrial engineering, manufacturing, advanced materials, thermoplastic composite solutions",
      size: "712 GB",
      date: "2024-01-17",
      downloads: "open",
    },
    {
      company: "Aviacode (GeBBS)",
      leaked: "100%",
      tags: "Medical coding, outsourced coding, auditing & consulting",
      size: "235 GB",
      date: "2023-02-11",
      downloads: "open",
    },
    {
      company: "Nextlabs",
      leaked: "100%",
      tags: "Business services, security software & IT services, risk management software",
      size: "298 GB",
      date: "2022-10-03",
      downloads: "open",
    },
    {
      company: "Maxey Moverley",
      leaked: "100%",
      tags: "Electronics repair & refurbishment, technical service, CCTV",
      size: "152 GB",
      date: "2022-05-23",
      downloads: "open",
    },
    {
      company: "Acme Inc.",
      leaked: "100%",
      tags: "Education, high school, college, university, online learning",
      size: "152 GB",
      date: "2022-05-23",
      downloads: "open",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-[family-name:var(--font-geist-sans)] pb-16">
      <Backlink />

      {/* Loading text */}
      <div className="pb-4 pt-16 text-center text-slate-400 font-[family-name:var(--font-geist-mono)] text-sm">
        Loading...
      </div>

      {/* Logo and name */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="text-7xl font-bold mb-2 flex justify-center items-center">
          {/* Custom logo resembling the 0mega logo in the screenshot */}
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 border-4 border-white rounded-full"></div>
            <div className="absolute inset-[20%] border-4 border-white rounded-full"></div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-2">0mega</h1>
      </div>

      {/* Links */}
      <div className="flex justify-center gap-6 text-lg mb-12">
        <a href="#" className="text-blue-400 hover:underline">
          clearnet
        </a>
        <a href="#" className="text-purple-400 hover:underline">
          onion
        </a>
      </div>

      {/* Leaked data section */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2">Leaked Data</h2>
        <p className="text-lg text-slate-300 mb-6">(5 cases total)</p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-slate-400 border-b border-slate-700">
                <th className="pb-2 pl-2 sm:pl-4">company name</th>
                <th className="pb-2">leaked</th>
                <th className="pb-2">tags</th>
                <th className="pb-2 text-right whitespace-nowrap">
                  total data
                  <br />
                  size
                </th>
                <th className="pb-2 text-right whitespace-nowrap">
                  last
                  <br />
                  updated
                </th>
                <th className="pb-2 text-right pr-2 sm:pr-4">downloads</th>
              </tr>
            </thead>
            <tbody>
              {leakedData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-700 hover:bg-slate-800/50"
                >
                  <td className="py-4 pl-2 sm:pl-4">{item.company}</td>
                  <td className="py-4">{item.leaked}</td>
                  <td className="py-4">{item.tags}</td>
                  <td className="py-4 text-right">{item.size}</td>
                  <td className="py-4 text-right">{item.date}</td>
                  <td className="py-4 text-right pr-2 sm:pr-4">
                    <a href="#" className="text-blue-400 hover:underline">
                      {item.downloads}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
