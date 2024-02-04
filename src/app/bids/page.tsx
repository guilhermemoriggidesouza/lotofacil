import { unstable_noStore } from "next/cache";

export default function Home() {
    unstable_noStore()
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        </main>
    );
}

