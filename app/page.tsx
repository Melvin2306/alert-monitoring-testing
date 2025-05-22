"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-slate-900 text-white">
      <header className="w-full text-center pt-8">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          ALERT Testing Application
        </h1>
        <h2 className="text-xl text-slate-300">
          Automated Leak Examination and Reporting Tool Testing Application
        </h2>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-3xl w-full">
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
          <h3 className="text-2xl font-semibold mb-4 text-red-400">
            Test Environment
          </h3>
          <p className="mb-4 text-slate-300">
            This platform simulates darkweb leak pages used by ransomware groups
            for testing purposes only.
          </p>
          <div className="bg-red-900/30 border border-red-800 p-4 rounded-md mb-6">
            <p className="font-[family-name:var(--font-geist-mono)] text-sm">
              ⚠️ WARNING: This is a simulation environment for security testing
              and research. No actual leaked data is hosted on this platform.
            </p>
          </div>

          <h4 className="text-xl font-medium mb-3 text-slate-200">
            Ransomware Group Simulations
          </h4>
          <p className="mb-4 text-slate-300">
            The routing follows the group names, which will be implemented in
            the next development step.
          </p>

          <div className="bg-slate-700 p-4 rounded-md font-[family-name:var(--font-geist-mono)] text-sm">
            <code>/[group-name]</code>
          </div>

          <div className="mt-4 p-4 bg-slate-700 rounded-md">
            <h4 className="text-xl font-medium mb-3 text-slate-200">
              Available Simulations
            </h4>
            <ul className="list-disc pl-5">
              <li className="mb-2">
                <a
                  href="/brain-cipher"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Brain Cipher
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/0mega"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  0mega
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/Cl0p"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Cl0p^_
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-md border border-solid border-slate-600 transition-colors flex items-center justify-center bg-slate-700 hover:bg-slate-600 gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://github.com/Melvin2306/alert-monitoring-testing"
          >
            View Repository
          </a>
          <a
            className="rounded-md border border-solid border-red-800 transition-colors flex items-center justify-center bg-red-900/50 hover:bg-red-800 gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://github.com/Melvin2306/alert-monitoring"
          >
            View ALERT Repository
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-slate-400 text-sm mt-8">
        <p>Security Research Tool - For Authorized Testing Only</p>
      </footer>
    </div>
  );
}
