// pages/page.tsx

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { CheckIcon } from 'lucide-react';
import Navbar from '@/components/global/navbar';
import { FlipWords } from "../components/ui/flip-words";
import { BackgroundBeams } from "../components/ui/background-beams"; // Import BackgroundBeams directly

const Page = () => {
    const words = ["Software", "Agency", "Workflow", "Business", "Technology"];
    const colors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500','text-red-500'];
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <section className="mt-[-10px] w-full">

                    {/* FlipWordsDemo Component */}
                    <div className="h-[40rem] flex justify-center items-center px-4">
                        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                            Automate Your{" "}
                            <FlipWords words={words} colors={colors} duration={3000} />{" "}
                            <br />
                            with YK Solutions
                        </div>
                    </div>

                    {/* Other Content Sections Here */}
                    <div className="h-[40rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                        <div className="max-w-2xl mx-auto p-4">
                            <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                                Request a Consultation
                            </h1>
                            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                             Welcome to YK Solutions, a leading provider in software and robotics business solutions.
                             We automate workflow through robotics, and we review, optimize, and enhance software 
                             to ensure your business operates at its peak efficiency.
                            </p>
                            <input
                                type="text"
                                placeholder="Enter an Email."
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                            />
                            <input
                                type="text"
                                placeholder="Enter a Name."
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                            />
                            <input
                                type="text"
                                placeholder="Enter a Company."
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                            />
                            <input
                                type="text"
                                placeholder="Enter a Message."
                                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700"
                            />
                        </div>
                        <BackgroundBeams />
                    </div>
                    
                </section>
            </div>
        </main>
    );
}

export default Page;
