
import ContactUsForm from '@/app/beta1/Contact.client';
import Navbar from '@/app/beta1/Navbar';
import { Archive, CircleCheck, ThumbsUp } from 'lucide-react';
import React from 'react';

const GetReviewsButton = () => {
  return (
    <button
      // className="text-lg mt-6 py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-bold shadow-lg tracking-wider"
      className="btn btn-primary"
    >
      Get Reviews for my SaaS
    </button>
  )
}

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-900">
        {/* Headline and Contact Us Section */}
        <div className="flex flex-col justify-center items-center text-center  px-6 md:px-0 max-w-4xl mx-auto my-24">
          <h1 className="text-4xl md:text-7xl font-bold">
            Get <span className="bg-gradient-to-r from-blue-500 to-teal-400 animate-text text-transparent bg-clip-text">5 Star Reviews</span> for <br />your B2B SaaS
          </h1>
          <p className="my-8 text-xl md:text-2xl text-gray-600 max-w-3xl">
            Our automated review generation system helps you climb to the top of G2, Capterra, and Gartner in just 3 months.
          </p>
          <GetReviewsButton />
        </div>

        <div className='text-center'>
          <img src="/web-design.svg" alt='test' className='mx-auto' style={{ height: '600px', width: 'auto' }} />
        </div>

        {/* Challenges Section */}
        {/* <div id="challenges" className="py-12 px-6 min-h-screen flex flex-col justify-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-800">Struggling to Get Reviews for Your B2B SaaS?</h2>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {["You know reviews are crucial for building trust and attracting new customers, but getting them consistently is a challenge.",
                                "You don't have the time or resources to manually reach out to customers and request reviews.",
                                "You're not sure how to encourage customers to leave reviews on the platforms that matter most, like G2, Capterra, and Gartner."]
                                .map(item => (
                                    <div key={item} className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-gray-300 rounded-md">
                                                <Archive />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-600 text-sm">{item}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div> */}
        <StrugglingSection />

        {/* Automated System Section */}
        {/* <div id="how-it-works" className="py-12 bg-gray-50 px-6 min-h-screen flex flex-col justify-center">
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
                                            <div className="w-16 h-16 bg-gray-300 rounded-md"></div> 
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-gray-600 text-sm">{item}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div> */}
        <AutomatedSystemSection />

        <HowItWorks />

        {/* Results Section */}
        <div id="results" className="py-12 px-6 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800">Proven Results for B2B SaaS Companies Like Yours</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Tuskr reached #1 in their category on G2 within 2 months, with a 200% increase in reviews and a 75% increase in lead generation.",
                "Celoxis secured top spots on Capterra and Gartner in just 90 days, with a 150% increase in reviews and a 50% increase in conversions."]
                .map(item => (
                  <div key={item} className="bg-white p-4 shadow-lg rounded-lg flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-600 text-sm">{item}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <ContactUsForm />

        {/* Footer Section */}
        <div className="py-6 bg-gray-900 text-center text-white">
          <p>Copyright © 2024 Your Company Name</p>
        </div>
      </div>
    </>
  );
}

const StrugglingSection = () => {
  const issues = [
    "You know reviews are crucial for building trust and attracting new customers, but getting them consistently is a challenge.",
    "You don't have the time or resources to manually reach out to customers and request reviews.",
    "You're not sure how to encourage customers to leave reviews on the platforms that matter most, like G2, Capterra, and Gartner."
  ];

  return (
    <div className="py-24 px-6">
      <div className="px-24 mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center mb-12">Struggling to Get Reviews<br /> for Your B2B SaaS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="bg-blue-100 p-12 rounded-lg flex flex-col space-y-4">
              <CircleCheck className="text-blue-700 w-12 h-12" /> {/* Icon with styling */}
              <p className="text-gray-600">{issue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AutomatedSystemSection = () => {
  const features = [
    "We integrate seamlessly with your existing customer data and identify your happiest customers.",
    "Our system automatically sends personalized review requests to these satisfied customers on a regular basis.",
    "We continuously monitor and optimize the messaging to ensure maximum review generation.",
    "You sit back and watch as the reviews come in and your rankings improve on top review sites."
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 text-center mb-12">Our Automated Review Generation<br /> System Makes It Easy</h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className={`bg-white p-6 rounded-lg shadow-md transform transition duration-500 ease-in-out`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-blue-100"> {/* Light shade of theme color */}
                  <ThumbsUp className="w-6 h-6 text-blue-500" /> {/* Icon with theme color */}
                </div>
                <p className="text-gray-600 flex-1">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      heading: "Step One: Integration",
      text: "Our system integrates seamlessly with your existing platforms without any hassle."
    },
    {
      number: '02',
      heading: "Step Two: Identification",
      text: "Automatically identify your happiest customers based on their interaction and feedback."
    },
    {
      number: '03',
      heading: "Step Three: Automation",
      text: "Send out personalized review requests automatically to the identified satisfied customers."
    }
  ];

  return (
    <section className='bg-blue-100 py-24'>
      <div className="container mx-auto my-24 px-4">
        <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold text-gray-800">How It Works?</h2>
              <p className="text-lg  my-4">Discover our simple and efficient process.</p>
            </div>
            <div>
              <GetReviewsButton />
            </div>
          </div>
          <div className="md:w-1/2 space-y-12">
            {steps.map(step => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="text-2xl font-bold text-white bg-blue-500 rounded-full h-14 w-16 flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold ">{step.heading}</h3>
                  <p className="xxx-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default LandingPage;