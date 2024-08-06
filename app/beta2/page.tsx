import ContactUsForm from '@/app/beta2/Contact.client';
import CTA from '@/app/beta2/CTA';
import Footer from '@/app/beta2/Footer';
import Navbar from '@/app/beta2/Navbar';
import { Archive, CircleCheck, ThumbsUp } from 'lucide-react';
import React from 'react';

const GetReviewsButton = () => {
  return (
    // <button
    //   className="btn btn-primary text-lg mt-6 px-6 tracking-wider"
    //   style={{ borderRadius: '9999px' }}
    // >
    //   Get Reviews for my SaaS
    // </button>
    <div className="join">
      <input
        type="text"
        placeholder="Enter your email"
        className="input input-bordered join-item" />
      <button className="btn btn-primary join-item text-xl">Get Reviews</button>
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white xxxtext-gray-900">
        {/* Headline and Contact Us Section */}
        {/* <div className="flex flex-col justify-center items-center text-center px-6 md:px-0 max-w-4xl mx-auto my-24">
          <h1 className="text-4xl md:text-7xl font-bold">
            Get <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">5 Star Reviews</span> for <br />your B2B SaaS
          </h1>
          <p className="my-8 text-xl md:text-2xl xxxtext-gray-600 max-w-3xl">
            Our automated review generation system helps you climb to the top of G2, Capterra, and Gartner in just 3 months.
          </p>
          <GetReviewsButton />
        </div> */}

        <div className="hero">
          <div className="hero-content flex-col md:flex-row">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold">
                Get <span className="bg-gradient-to-r from-orange-500 to-amber-300 text-transparent bg-clip-text">5 Star Reviews</span> for <br />your B2B SaaS
              </h1>
              <p className="my-8 text-xl md:text-2xl xxxtext-gray-600 max-w-3xl">
                Our automated review generation system helps you climb to the top of G2, Capterra, and Gartner in just 3 months.
              </p>
              <GetReviewsButton />
            </div>
            <img
              src="/web-design.svg"
              className="max-w-sm md:max-w-screen-sm  rounded-lg" />
          </div>
        </div>

        {/* <div className='text-center'>
          <img src="/web-design.svg" alt='test' className='mx-auto' style={{ height: '600px', width: 'auto' }} />
        </div> */}

        <StrugglingSection />
        <AutomatedSystemSection />
        <HowItWorks />

        {/* Results Section */}
        <div id="results" className="py-12 px-6 min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold xxxtext-gray-800">Proven Results for B2B SaaS Companies Like Yours</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Tuskr reached #1 in their category on G2 within 2 months, with a 200% increase in reviews and a 75% increase in lead generation.",
                "Celoxis secured top spots on Capterra and Gartner in just 90 days, with a 150% increase in reviews and a 50% increase in conversions."]
                .map(item => (
                  <div key={item} className="card bg-base-100 shadow-xl p-4 flex items-center space-x-4">
                    <div className="avatar placeholder">
                      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                        <span className="text-3xl">?</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-600 text-sm">{item}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* <ContactUsForm /> */}

        <CTA />

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;

const StrugglingSection = () => {
  const issues = [
    "You know reviews are crucial for building trust and attracting new customers, but getting them consistently is a challenge.",
    "You don't have the time or resources to manually reach out to customers and request reviews.",
    "You're not sure how to encourage customers to leave reviews on the platforms that matter most, like G2, Capterra, and Gartner."
  ];

  return (
    <div className="py-24 px-6">
      <div className="px-24 mx-auto">
        <h2 className="text-5xl font-bold xxxtext-gray-800 mb-6 text-center mb-24">Struggling to Get Reviews<br /> for Your B2B SaaS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {issues.map((issue, index) => (
            <div key={index} className="card bg-amber-50 p-8 rounded-lg flex flex-col space-y-4">
              <CircleCheck className="text-secondary w-12 h-12" /> {/* Icon with styling */}
              <p className="xxxtext-gray-600">{issue}</p>
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
      <div className="bg-primary pointer-events-none absolute start-20 aspect-square w-1/3 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"></div>
      <div className="bg-secondary pointer-events-none absolute end-40 aspect-square w-1/2 rounded-full opacity-10 blur-3xl [transform:translate3d(0,0,0)]"></div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold xxxtext-gray-800 text-center mb-12">Our Automated Review Generation<br /> System Makes It Easy</h2>
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className={`card bg-base-100 shadow-xl p-6 transform transition duration-500 ease-in-out`}>
              <div className="flex items-center space-x-4">
                <div className="avatar">
                  <div className="rounded-full p-2">
                    <ThumbsUp className="w-6 h-6 text-secondary" /> {/* Icon with theme color */}
                  </div>
                </div>
                <p className="xxxtext-gray-600 flex-1">{feature}</p>
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
    <section className='bg-neutral text-neutral-content py-24'>
      <div className="container mx-auto my-24 px-4">
        <div className="flex flex-col md:flex-row items-start justify-between space-y-8 md:space-y-0">
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold xxxtext-gray-800">How It Works?</h2>
              <p className="text-lg  my-4">Discover our simple and efficient process.</p>
            </div>
            <div className="mt-8">
              <GetReviewsButton />
            </div>
          </div>
          <div className="md:w-1/2 space-y-12">
            {steps.map(step => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="text-2xl font-bold text-white bg-secondary rounded-full h-14 w-16 flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold ">{step.heading}</h3>
                  <p className="xxxtext-gray-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};
