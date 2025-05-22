import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brain Cipher - ALERT Simulation",
  description:
    "A simulation of the Brain Cipher leak page for security research and testing",
};

export default function BrainCipherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
