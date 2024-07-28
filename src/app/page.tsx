import { FlipWords } from "../components/ui/flip-words";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import Navbar from "@/components/global/navbar";

const Page = () => {
  const words = ["Software", "Agency", "Workflow", "Business", "Manufacturing"];
  const colors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500', 'text-red-500'];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="z-10 w-full items-center justify-center font-mono text-sm lg:flex">
        <section className="mt-[-10px] w-full">
          {/* FlipWords Component */}
          <div className="h-[20rem] flex justify-center items-center px-4"> {/* Further reduced height */}
            <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
              Automate Your{" "}
              <FlipWords words={words} colors={colors} duration={2000} />{" "}
              <br />
              with YK Solutions
            </div>
          </div>
          {/* AnimatedTabs Component */}
          <div className="w-2/3 mt-8 mx-auto px-4"> {/* Further reduced width */}
            <AnimatedTabs />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Page;
