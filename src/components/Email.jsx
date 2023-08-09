'use client'

const Email = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    console.log(name, email, message);
  };

  return (
    <>
      <div className="my-8 lg:my-16 px-6 mx-auto lg:w-11/12">
        <section className="text-gray-800 ">
          <div className="grid lg:grid-cols-2 lg:gap-20 flex items-center">
            <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
              <div
                className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                <form onSubmit={handleContact}>
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      name="message"
                      className="resize-none form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      rows={3}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-block rounded-md hover:bg-gray-700 mt-4"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0">
              <div style={{ width: "100%" }}>
                <iframe
                  className="w-full h-[200px] lg:h-[400px]"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7977.553451004476!2d103.854608!3d1.309242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19c7b95bc097%3A0xfcc85fcf948131fc!2s26%20Desker%20Rd%2C%20Singapore%20209560!5e0!3m2!1sen!2sbd!4v1689003671227!5m2!1sen!2sbd"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Email;
