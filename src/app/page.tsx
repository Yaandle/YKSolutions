// pages/page.tsx

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { CheckIcon } from 'lucide-react';
import Navbar from '@/components/global/navbar';
import { FlipWords } from "../components/ui/flip-words";

const Page = () => {
    const words = ["Software", "Hardware", "Robotics", "Business"];
    const colors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500'];
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Navbar />
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <section className="mt-[-10px]">

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
                    
                </section>
            </div>
        </main>
    );
}

export default Page;
