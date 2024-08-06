import { FlipWords } from "../components/ui/flip-words";
import { AnimatedTabs } from "@/components/ui/AnimatedTabs";
import Navbar from "@/components/global/navbar";

const Page = () => {
  const words = ["Software", "Agency", "Workflow", "Business", "Manufacturing"];
  const colors = ['text-purple-500', 'text-purple-500', 'text-purple-500', 'text-purple-500', 'text-purple-500'];

  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      
      <div className="flex-grow flex flex-col justify-center items-center px-4 pt-24 pb-48">
        <div className="text-center mb-48">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
            <span className="text-gray-400">Automate Your </span>
            <FlipWords 
              words={words} 
              colors={colors} 
              duration={2000} 
              className="text-purple-500"
            />
            <br />
            <span className="text-gray-400">with YK Solutions</span>
          </h1>
        </div>
        
        <div className="w-full max-w-4xl">
          <AnimatedTabs />
        </div>
      </div>
      
      <div className="pb-24"></div>
    </main>
  );
}

export default Page;