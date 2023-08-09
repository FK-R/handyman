'use client'

import faq from '../components/images/faq.png';
const FAQ = () => {
  return (



    <section className="my-20 text-gray-800 w-5/6 mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
       Frequently ask Question
      </h2>
      <div className='flex lg:flex-row flex-col-reverse gap-5 justify-center items-center '>
      <div className='accordions '>
      <div className="collapse mb-2 ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-100 text-black peer-checked:bg-zinc-200 peer-checked:text-black rounded-lg text-lg font-semibold flex justify-between items-center">
         <p>  Do you provide other all handyman services?</p>
         
        </div>
        <div className="collapse-content bg-zinc-100 text-primary-content peer-checked:bg-zinc-100 peer-checked:text-secondary-content">
          <p className='text-lg p-4'>Yes, we provide all kinds of handyman services as your need.</p>
        </div>
      </div>
      <div className="collapse mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-100 text-black peer-checked:bg-zinc-200 peer-checked:text-black rounded-lg text-lg font-semibold flex justify-between items-center">
         <p> Do you provide painting services?</p>
         
        </div>
        <div className="collapse-content bg-zinc-100 text-primary-content peer-checked:bg-zinc-100 peer-checked:text-secondary-content">
          <p className='text-lg p-4'>Yes, we also provide painting services and we have expertise to decorate your house nicely.</p>
        </div>
      </div>
      <div className="collapse mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-100 text-black peer-checked:bg-zinc-200 peer-checked:text-black rounded-lg text-lg font-semibold flex justify-between items-center">
         <p> Do you provide home renovation as well?</p>
         
        </div>
        <div className="collapse-content bg-zinc-100 text-primary-content peer-checked:bg-zinc-100 peer-checked:text-secondary-content">
          <p className='text-lg p-4'>We also do that service.</p>
        </div>
      </div>
      <div className="collapse mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-100 text-black peer-checked:bg-zinc-200 peer-checked:text-black rounded-lg text-lg font-semibold flex justify-between items-center">
         <p> Do you provide wooden floor polishing service?</p>
         
        </div>
        <div className="collapse-content bg-zinc-100 text-primary-content peer-checked:bg-zinc-100 peer-checked:text-secondary-content">
          <p className='text-lg p-4'>We gladly do that service.</p>
        </div>
      </div>
      <div className="collapse mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-100 text-black peer-checked:bg-zinc-200 peer-checked:text-black rounded-lg text-lg font-semibold flex justify-between items-center">
         <p> Do you provide security, warenty of products and quotations?</p>
         
        </div>
        <div className="collapse-content bg-zinc-100 text-primary-content peer-checked:bg-zinc-100 peer-checked:text-secondary-content">
          <p className='text-lg p-4'>Ofcourse we do that. We ensure you the best possible security and good warenty of products as requirements.we also provide quotations for our valuable customer.</p>
        </div>
      </div>

      <div className="collapse mb-2">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-slate-100 text-black peer-checked:bg-zinc-200 peer-checked:text-black rounded-lg text-lg font-semibold flex justify-between items-center">
         <p> Are your company certified?</p>
         
        </div>
        <div className="collapse-content bg-zinc-100 text-primary-content peer-checked:bg-zinc-100 peer-checked:text-secondary-content">
          <p className='text-lg p-4'>We are certified.</p>
        </div>
      </div>
      </div>
      <div>

        <img  className="rounded-lg" src={faq} alt="" />
      </div>
      </div>

    </section>




  );
};

export default FAQ;