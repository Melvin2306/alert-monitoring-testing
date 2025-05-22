import Link from "next/link";
import React from "react";

function Backlink() {
  return (
    <div className="fixed top-5 left-5">
      <Link href="/" className="text-gray-400 hover:text-white">
        ← Back to ALERT Home
      </Link>
    </div>
  );
}

export default Backlink;
