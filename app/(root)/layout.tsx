import type { Metadata } from "next";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Shilp UI",
    default: "Shilp UI - Craft, Compose, Create.",
  },
  description:
    "Beautifully crafted UI components for building modern web applications.",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className=" relative flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
}
