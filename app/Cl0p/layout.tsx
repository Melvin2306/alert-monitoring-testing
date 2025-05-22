import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cl0p^_- LEAKS - ALERT Simulation",
  description:
    "A simulation of the Cl0p leak page for security research and testing",
};

export default function Cl0pLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
