export default function CTA() {
  return (
    <div className="mx-4 md:mx-8 mb-8 card bg-base-100 from-base-200 not-prose outline-base-content/5 relative overflow-hidden bg-gradient-to-b font-sans shadow-lg outline -outline-offset-1 md:flex-row-reverse">
      <div className="bg-accent -left-1/5 pointer-events-none absolute bottom-[-50%] aspect-square w-3/4 -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
      <div className="bg-primary pointer-events-none absolute bottom-[-120%] left-1/2 aspect-square w-full -translate-x-1/2 rounded-full opacity-20 blur-3xl"></div>
      <div className="bg-base-100 pointer-events-none absolute -top-3/4 right-1/4 z-[3] aspect-square w-1/2 rounded-full opacity-60 blur-3xl"></div>
      <div className="card-body relative isolate z-[3]">
        <h2 className="card-title text-base-content text-xl contrast-200 [text-wrap:balance] sm:w-[250%] sm:text-2xl md:text-4xl lg:text-3xl xl:text-4xl"><span><span className="font-black">Still doubtfull?</span> <br /> <span className="font-light">{`Let's connect over a quick call`}</span></span></h2>
        <a className="btn btn-primary group" href="/store">Contact Us</a>
      </div>
    </div>
  );
}