import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/global/navbar';
import { TracingBeam } from "@/components/ui/tracing-beam";

const ServicesPage = () => {
  return (
    <div className="bg-black-100 min-h-screen">
      <Navbar />
      <TracingBeam className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold mb-12 text-center text-white-800">Our Innovative Services</h1>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white-700">Robotic Automation Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Advanced Robots", description: "Cutting-edge robots designed to automate complex industrial processes with unparalleled precision and efficiency." },
                { title: "Flexible Integration", description: "Seamlessly integrate our robots into your existing operations, ensuring minimal disruption and maximum productivity gains." },
                { title: "Customizable Deployment", description: "Choose between leasing or purchasing options, tailoring the deployment to your business needs and financial strategy." },
                { title: "Industry-Specific Solutions", description: "Robots optimized for various industries including manufacturing, logistics, healthcare, and more." },
                { title: "Collaborative Robots", description: "Cobots designed to work alongside humans, enhancing safety and efficiency in shared workspaces." },
                { title: "AI-Powered Automation", description: "Leverage artificial intelligence to create smart, adaptive robotic systems that learn and improve over time." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white-700">Advanced Software Automation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Comprehensive System Analysis", description: "Our experts conduct an in-depth review of your existing software ecosystem, identifying optimization opportunities." },
                { title: "Tailored Software Development", description: "We create bespoke software solutions that seamlessly integrate with your operations, driving efficiency and innovation." },
                { title: "Process Automation", description: "Streamline your workflows with intelligent process automation, reducing manual tasks and boosting productivity." },
                { title: "Data Integration & Analytics", description: "Unify your data sources and gain actionable insights with our advanced analytics solutions." },
                { title: "Cloud Migration & Optimization", description: "Modernize your infrastructure with our cloud migration services, optimizing for performance and scalability." },
                { title: "Cybersecurity Enhancement", description: "Fortify your digital assets with state-of-the-art security measures integrated into your automated systems." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-white-700">Our Comprehensive Approach</h2>
            <div className="space-y-6">
              {[
                { title: "In-Depth Discovery", description: "We begin with a thorough analysis of your current processes, challenges, and objectives, ensuring our solutions are perfectly aligned with your needs." },
                { title: "Strategic Solution Design", description: "Our team of experts collaborates with you to craft customized automation strategies that drive tangible results and support your long-term goals." },
                { title: "Seamless Implementation", description: "We manage the entire implementation process, ensuring smooth integration of both robotic and software automation solutions with minimal disruption to your operations." },
                { title: "Continuous Optimization", description: "Our commitment extends beyond initial deployment. We provide ongoing support, maintenance, and optimization to maximize your ROI and adapt to evolving business needs." }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{index + 1}. {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-6 text-white-700">The Impact of Our Automation Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Dramatic Time Savings", description: "Our automation solutions significantly reduce time spent on repetitive tasks, allowing your team to focus on strategic initiatives and innovation." },
                { title: "Substantial Cost Reduction", description: "By optimizing operations and minimizing errors, our services lead to considerable cost savings across your organization." },
                { title: "Enhanced Productivity", description: "Streamlined workflows and increased accuracy result in a substantial boost to overall productivity and operational efficiency." },
                { title: "Improved Quality Control", description: "Automation ensures consistent quality in your products or services, reducing variations and enhancing customer satisfaction." },
                { title: "Scalability and Flexibility", description: "Our solutions are designed to grow with your business, easily adapting to changing demands and market conditions." },
                { title: "Data-Driven Insights", description: "Leverage the power of automation to gather and analyze data, driving informed decision-making across your organization." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </TracingBeam>
    </div>
  );
};

export default ServicesPage;