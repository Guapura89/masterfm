"use client";
import Gallery from "@/components/Gallery";
import { useRouter } from "next/navigation";

export default function Home(): JSX.Element {
  const route = useRouter();
  return (
    <main className="">
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 min-h-screen max-h-screen">
        <div className="bg-dark lg:order-2 text-white flex flex-col items-start justify-center p-4 md:p-10">
          <h1 className="my-4 md:text-4xl lg:text-6xl">
            <strong>Discover the Soundtrack of Your Life</strong>
          </h1>
          <p className="my-4 md:text-xl lg:text-2xl">
            Unleash your inner music with our beatifully curated collection of
            albums
          </p>

          <button onClick={() => route.push('/login')} className="px-4 py-2 my-4 font-bold lg:w-1/3 lg:py-3 hover:bg-gradient-to-tr hover:text-white transition duration-150 ease-linear from-purple-500 to-pink-700 bg-white text-dark rounded-lg">
            Explore Now
          </button>
        </div>
        <div className="bg-[url('/background/wallpaper.jpg')] bg-cover bg-center"></div>
      </div>

      <Gallery />
    </main>
  );
}
