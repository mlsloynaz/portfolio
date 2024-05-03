import Bio from "@/components/bio";

export default function Home() {
  return (
    <main className="relative flex min-h-screen mt-32 flex-col items-center justify-between px-12 lg:px-28">
      <div className="flex w-full 
     bg-stone-200">
        <Bio />
      </div>
    </main>
  );
}
