import React from 'react';
import { BackgroundBeams } from "../components/ui/background-beams";

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white py-16">
            <div className="container mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold mb-12">
                    Contact Us
                </h1>
                
                <div className="max-w-3xl mx-auto bg-neutral-900 p-8 rounded-lg shadow-lg">
                    <p className="text-neutral-400 text-center mb-8">
                        Have questions about our services or want to discuss how we can help automate your business? 
                        Get in touch with us using the form below or through our contact information.
                    </p>

                    <form action="https://formsubmit.co/mindofyk@gmail.com" method="POST" className="space-y-6">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your Email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Enter your Company"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your Message"
                            className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-500 h-32"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 text-lg font-semibold"
                        >
                            Send Message
                        </button>
                    </form>
                </div>


            </div>
            <BackgroundBeams />
        </div>
    );
};

export default ContactPage;