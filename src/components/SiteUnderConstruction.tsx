"use client";

export default function SiteUnderConstruction() {
  const contact = process.env.NEXT_PUBLIC_CONTACT;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-950 text-white p-6 text-center animate-fadeIn">
      <div className="animate-pulseSlow">
        <svg
          className="w-20 h-20 mx-auto mb-6 text-yellow-400 animate-bounceSlow"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M4.293 6.293a1 1 0 011.414 0L12 12.586l6.293-6.293a1 1 0 111.414 1.414L13.414 14l6.293 6.293a1 1 0 01-1.414 1.414L12 15.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 14 4.293 7.707a1 1 0 010-1.414z"
          />
        </svg>
      </div>

      <h1 className="text-4xl font-bold tracking-wide mb-4 animate-slideUp">Website Under Construction</h1>
      <p className="text-neutral-300 max-w-lg animate-fadeInDelay">
        We're crafting something new and exciting. Check back soon!
      </p>

      <div className="mt-8 animate-fadeInDelay2">
        <a
          href={`mailto:${contact}`}
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
        >
          Contact Us
        </a>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDelay {
          0% { opacity: 0; }
          40% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes fadeInDelay2 {
          0% { opacity: 0; }
          60% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .animate-fadeIn { animation: fadeIn 1s ease forwards; }
        .animate-slideUp { animation: slideUp 1s ease forwards; }
        .animate-fadeInDelay { animation: fadeInDelay 1.4s ease forwards; }
        .animate-fadeInDelay2 { animation: fadeInDelay2 1.8s ease forwards; }
        .animate-bounceSlow { animation: bounceSlow 2.2s ease-in-out infinite; }
        .animate-pulseSlow { animation: pulseSlow 2.2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
