import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-white text-gray-900">
        {/* Headline and Contact Us Section */}
        <div className="flex flex-col justify-center items-center text-center h-screen px-6 md:px-0 max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 animate-text">
                Skyrocket Your <span className="text-blue-600">B2B SaaS</span> Reviews and Dominate Top Review Sites
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600">
                Our automated review generation system helps you climb to the top of G2, Capterra, and Gartner in just 3 months.
            </p>
            <button className="mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-bold shadow-lg">
                Contact Us
            </button>
        </div>

        {/* Challenges Section */}
        <div className="py-12 px-6 min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800">Struggling to Get Reviews for Your B2B SaaS?</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["You know reviews are crucial for building trust and attracting new customers, but getting them consistently is a challenge.", 
                      "You don't have the time or resources to manually reach out to customers and request reviews.", 
                      "You're not sure how to encourage customers to leave reviews on the platforms that matter most, like G2, Capterra, and Gartner."]
                      .map(item => (
                        <div key={item} className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gray-300 rounded-md"></div> {/* Image placeholder */}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-600 text-sm">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Automated System Section */}
        <div className="py-12 bg-gray-50 px-6 min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800">Our Automated Review Generation System Makes It Easy</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["We integrate seamlessly with your existing customer data and identify your happiest customers.", 
                      "Our system automatically sends personalized review requests to these satisfied customers on a regular basis.", 
                      "We continuously monitor and optimize the messaging to ensure maximum review generation.", 
                      "You sit back and watch as the reviews come in and your rankings improve on top review sites."]
                      .map(item => (
                        <div key={item} className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gray-300 rounded-md"></div> {/* Image placeholder */}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-600 text-sm">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Results Section */}
        <div className="py-12 px-6 min-h-screen flex flex-col justify-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800">Proven Results for B2B SaaS Companies Like Yours</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["Tuskr reached #1 in their category on G2 within 2 months, with a 200% increase in reviews and a 75% increase in lead generation.", 
                      "Celoxis secured top spots on Capterra and Gartner in just 90 days, with a 150% increase in reviews and a 50% increase in conversions."]
                      .map(item => (
                        <div key={item} className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 bg-gray-300 rounded-md"></div> {/* Image placeholder */}
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-gray-600 text-sm">{item}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Footer Section */}
        <div className="py-6 bg-gray-900 text-center text-white">
            <p>Copyright © 2024 Your Company Name</p>
        </div>
    </div>
  );
}

export default LandingPage;