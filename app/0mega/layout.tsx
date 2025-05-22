import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "0mega - ALERT Simulation",
  description:
    "A simulation of the 0mega leak page for security research and testing",
};

export default function BrainCipherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
