"use client";

import Backlink from "../components/Backlink";
import Footer from "../components/Footer";

export default function Cl0pPage() {
  // Navigation links
  const navLinks = [
    "HOME",
    "HOW TO DOWNLOAD?",
    "ARCHIVE",
    "ARCHIVE2",
    "ARCHIVE3",
    "ARCHIVE4",
    "ARCHIVE5",
    "ARCHIVE6",
    "ARCHIVE7",
    "ARCHIVE8",
    "ARCHIVE9",
    "ARCHIVE10",
    "IMSPLGROUP.COM",
    "DURAYDUNCAN.COM",
    "MORRISGROUP.CO",
    "COMPANY's_PART1",
    "COMPANY's PART2",
    "COMPANY's PART3",
    "COMPANY's PART4",
    "COMPANY's PART5",
    "CALTON.COM",
    "CHECKCITY.COM",
  ];

  // Published companies list
  const publishedCompanies = [
    "OBJECTIF-EMBALLAGES.FR",
    "KOLCRAFT.COM",
    "INTERFACTURA.COM",
    "REESEPHARMACEUTICAL.COM",
    "PITSCO.COM",
    "UPPERLAKESFOODS.COM",
    "MAHARTOOL.COM",
    "JEFFREYCOURT.COM",
    "MARELLI.COM",
    "APTEAN.COM",
    "JAGGEDPEAK.COM",
    "IOVATE.COM",
    "RACKSPACE.COM",
    "HOMEDEPOT.COM.MX",
    "INNOVSYS.COM",
    "INTELEKTECHNOLOGIES.COM",
    "INTERCHARGE.DE",
    "INNOVADOR.COM.MX",
    "ID-GP.COM",
    "IUSA.MX",
    "IDPE.CO",
    "JAYAAPPARELGROUP.COM",
    "JENNE.COM",
    "JOBAR.COM",
    "JOHNPAULRICHARD.COM",
    "JPWEST.COM",
    "JDADELIVERS.COM",
    "KEELEWAREHOUSING.COM",
    "KIKKERLAND.COM",
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white font-[family-name:var(--font-geist-sans)] pb-16">
      <Backlink />

      {/* Header */}
      <header className="py-6 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">CL0P^_- LEAKS</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-red-400 text-sm uppercase"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* First green section */}
        <div className="bg-green-100/10 border-l-4 border-green-500 px-6 py-5 mb-6">
          <div className="text-green-400 font-bold mb-2">DEAR COMPANIES</div>
          <div className="text-green-300 mb-2">
            BELOW ARE THE NEW RELEVANT EMAILS:
          </div>
          <div className="text-green-300 mb-1">support@pubstorm.com</div>
          <div className="text-green-300 mb-2">support@pubstorm.net</div>
          <div className="text-green-300 font-[family-name:var(--font-geist-mono)]">
            * ALL OLD EMAILS DO NOT WORK ANYMORE
          </div>
        </div>

        {/* Red section */}
        <div className="bg-red-100/10 border-l-4 border-red-500 px-6 py-5 mb-6">
          <div className="text-red-400 font-bold mb-2">DEAR COMPANIES.</div>
          <div className="text-red-300 mb-2">
            CLOP IS ONE OF TOP ORGANIZATION OFFER PENETRATION TESTING SERVICE
            AFTER THE FACT.
          </div>
          <div className="text-red-300 mb-2">
            THIS IS ANNOUNCEMENT TO EDUCATE COMPANIES WHO USE PROGRESS MOVEIT
            PRODUCT THAT CHANCE IS THAT WE DOWNLOAD ALOT OF YOUR DATA AS PART OF
            EXCEPTIONAL EXPLOIT.
          </div>
          <div className="text-red-300 mb-2">
            WE ARE THE ONLY ONE WHO PERFORM SUCH ATTACK AND RELAX BECAUSE YOUR
            DATA IS SAFE.
          </div>
        </div>

        {/* Second green section */}
        <div className="bg-green-100/10 border-l-4 border-green-500 px-6 py-5 mb-6">
          <div className="text-green-400 font-bold mb-2">DEAR COMPANIES</div>
          <div className="text-green-300 mb-4">
            Below you can find a list of companies that were notified but
            ignored and did not contact us.
          </div>

          <div className="text-green-300 mb-2">emails us here:</div>
          <div className="text-green-300 mb-1">unlock@he1p-me.com</div>
          <div className="text-green-300 mb-1">unlock@cl-leaks.com</div>
          <div className="text-green-300 mb-8">support@he1p-center.com</div>

          {/* Published files list */}
          <div className="space-y-4">
            {publishedCompanies.map((company, index) => (
              <div key={index} className="text-red-400 font-bold">
                {company} FULL FILES PUBLISHED VIA TOR
              </div>
            ))}

            {/* Show that there are more items */}
            <div className="text-slate-300 mt-4">
              ... and {120 - publishedCompanies.length} more companies
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
