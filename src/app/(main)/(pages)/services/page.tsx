import React from 'react';
import Image from 'next/image';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Robotic Automation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Advanced Robots</h3>
            <p>Our robotic automation solutions feature advanced, industry-leading robots designed to automate a wide range of industrial processes with precision and efficiency.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Flexible Integration</h3>
            <p>These robots are highly flexible and easy to integrate into your existing operations, ensuring a seamless transition and maximum impact on your productivity.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Leasing or Purchasing</h3>
            <p>Businesses have the option to either lease or purchase our robotic automation solutions, allowing for flexibility in deployment and capital investment.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Software Automation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Comprehensive Review</h3>
            <p>Our team of experts will conduct a thorough review of your existing business software, identifying areas for improvement and optimization.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Custom Development</h3>
            <p>We will develop custom software solutions tailored to your unique needs, ensuring seamless integration with your operations and maximizing efficiency.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Integrated Approach</h3>
            <p>By combining our software automation expertise with our robotic automation solutions, we provide a comprehensive and integrated approach to streamlining your workflows.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Comprehensive Approach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Client Assessment", description: "We start by conducting a thorough analysis of your current processes and identifying areas for improvement, ensuring our solutions address your unique challenges." },
            { title: "Solution Design", description: "Our experts collaborate with you to develop customized automation solutions that align with your business objectives and deliver tangible results." },
            { title: "Seamless Implementation", description: "We ensure a smooth integration of our robotic and software automation solutions into your workflows, minimizing disruption and maximizing the impact on your operations." },
            { title: "Ongoing Support", description: "Our commitment to your success extends beyond the initial implementation, as we provide continuous assistance, maintenance, and optimization to ensure maximum efficiency and return on investment." }
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{index + 1}. {step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Benefits of Automation</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Save Time</h3>
            <p>Our automation solutions streamline repetitive tasks, freeing up your employees to focus on more strategic and value-added activities.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reduce Costs</h3>
            <p>By enhancing operational efficiency and minimizing errors, our solutions help you achieve significant cost savings for your business.</p>
          </div>
          <div className="bg-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Increase Productivity</h3>
            <p>With improved workflows and increased accuracy, your team can accomplish more in less time, boosting overall productivity and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
