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
      <main className="xxxbg-white xxxtext-gray-900 bg-base-200">
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
        {/* 
        <div className="hero">
          <div className="hero-content flex-col md:flex-row flex min-h-[calc(100vh-4rem)] items-center justify-center px-2 py-10 text-center xl:justify-start xl:pe-0 xl:ps-10 xl:text-start">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-center">
                We build you automatons that gets you 5 star reviews
              </h1>
              <p className="my-8 text-xl md:text-2xl xxxtext-gray-600 max-w-3xl">
                Once implemented our automated review generation system helps you climb to the top of G2, Capterra, and Gartner in just 3 months.
              </p>
              <GetReviewsButton />
            </div>
          </div>
        </div> */}

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-4xl">
              <h1 className="text-7xl font-bold">
                <span className='[&::selection]:text-base-content brightness-150 contrast-150 [&::selection]:bg-blue-700/20'>We build you automations that gets you</span>
                <span className="inline-grid max-w-2xl">
                  {/* <span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] before:content-[attr(data-text)] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" aria-hidden="true" data-text="component library"></span> */}
                  <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">5 Star Reviews</span>
                </span>
              </h1>
              {/* <span className="inline-grid"><span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] [:root[dir=rtl]_&amp;]:leading-[1.35] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]" aria-hidden="true">endless possibilities</span><span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 leading-tight motion-reduce:!opacity-100 [&amp;::selection]:bg-blue-700/20 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [@supports(color:oklch(0%_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">endless possibilities</span></span> */}
              <p className="text-base-content/70 font-title py-4 font-light md:text-lg xl:text-2xl">
                Once implemented our automated review generation system helps you climb to the top of <span className='text-error'>G2</span>, <span className='text-error'>Capterra</span> and <span className='text-error'>Gartner</span>  in just 3 months.
              </p>
              <button className="text-lg px-10 btn btn-info rounded-full mt-4">Get Started</button>
            </div>
          </div>
        </div>

        {/* <section>
          <p>
            Never ask for review again in your life, Our system does the work for you.
          </p>
        </section> */}

        <div className="min-h-[200vh] w-full px-2 lg:px-10">
          <div className="sticky top-0 pt-40 text-center">
            <div className="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-10 blur-3xl"></div>
            <h2 className="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none will-change-auto motion-reduce:!transform-none transform:scale(0.7);opacity:0">Never ask for review again in your life, Our system does the work for you.</h2>
            <div className="h-32"></div>
          </div>
        </div>

        <section className='w-full px-2 lg:px-10'>
          <div className='container mx-auto flex justify-between h-full pt-40'>
            <div className='h-[300px] sticky top-[300px] text-5xl bold flex'>
              <span className='mr-4'>who is this for?</span>
              <span>
                <picture>
                  <source srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.webp" type="image/webp" />
                  <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f914/512.gif" alt="🤔" width="64" height="64" />
                </picture>
              </span>

            </div>
            <div className='flex flex-col gap-[100px] sticky font-light text-3xl'>
              <div className='w-[600px] h-[300px] sticky top-[300px] bg-base-200'>
                <span className='text-error'>you have problems getting consistent reviews</span>, we step up a 360 system for you which just works.

              </div>
              <div className='w-[600px] h-[300px] sticky top-[300px] bg-base-200'>
                <span className='text-error'>you do not want to waste time or resources</span>
                {` to manually reach out to customers and request reviews.`}
              </div>
              <div className='w-[600px] h-[300px] sticky top-[300px] bg-base-200'>
                <span className='text-error'>you are not sure how to encourage customers to leave reviews</span>
                {` on the platforms that matter most, like G2, Capterra, and Gartner.`}
              </div>

            </div>

          </div>
        </section>

        <section id="pricing" className='min-h-100vh px-2 w-full lg:px-10 block pt-40 text-center'>
          <h3 className='text-[clamp(2rem,6vw,4rem)] font-light leading-none'>
            You know what is great we charge you 1 time fee of $499 and {`that's`} it, <br /><span className='text-success'>hassle free reviews for life</span>
          </h3>
        </section>



        <section className='flex flex-col gap-2 items-center text-4xl py-40 my-10 mx-10 min-h-100vh px-2 lg:px-10'>
          {/* xs */}
          <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
            {/* <input
              type="radio"
              name="rating-5"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked /> */}
            {/* <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" /> */}
          </div>
          {/* sm */}
          <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input
              type="radio"
              name="rating-6"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            {/* <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" /> */}
          </div>
          {/* md */}
          <div className="rating rating-md">
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
            <input
              type="radio"
              name="rating-7"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
            {/* <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" defaultChecked />
            <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" /> */}
          </div>
          {/* lg */}
          <div className="rating rating-lg">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
            />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" defaultChecked />
            {/* <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400"  /> */}
          </div>

          <div className="rating">
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" style={{ height: "3rem", width: "3rem" }} />
            <input
              type="radio"
              name="rating-8"
              className="mask mask-star-2 bg-orange-400"
              style={{ height: "3rem", width: "3rem" }}
            />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" style={{ height: "3rem", width: "3rem" }} />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" style={{ height: "3rem", width: "3rem" }} />
            <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" style={{ height: "3rem", width: "3rem" }} defaultChecked />
          </div>
          <button className="text-lg px-10 btn btn-info rounded-full mt-8">Get Started</button>
        </section>



        {/* Footer Section */}
        <Footer />
      </main>
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
