import HeroSection from "@/components/landing/Hero";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-zinc-950">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <HeroSection />
      </div>
    </div>
  );
}
