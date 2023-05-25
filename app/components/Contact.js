"use client";

const Contact = () => {
  return (
    <section id="contact">
      <div className="mt-16 md:mt-20 md:pt-32 pb-4 md:pb-12 mb-12 md:mb-16">
        <h1 className="text-center font-bold text-4xl">Get in touch</h1>
        <hr className="w-6 h-1 mx-auto mt-4 mb-6 bg-teal-500 border-0 rounded" />
        <div className="flex align-center justify-center">
          <form className="flex flex-col w-1/2 gap-2">
            <div className="flex flex-row align-middle justify-between gap-2">
              <input
                placeholder="Email"
                className="py-4 px-4 w-1/2 rounded font-semibold bg-neutral-800 text-gray-200 dark:bg-gray-100 dark:text-gray-800 shadow-inner hover:opacity-80"
              />
              <input
                placeholder="Name"
                className="py-4 px-4 w-1/2 rounded font-semibold bg-neutral-800 text-gray-200 dark:bg-gray-100 dark:text-gray-800 shadow-inner hover:opacity-80"
              />
            </div>
            <input
              placeholder="Message"
              className="py-8 px-4 rounded font-semibold bg-neutral-800 text-gray-200 dark:bg-gray-100 dark:text-gray-800 shadow-inner hover:opacity-80"
            />
            <button
              type="submit"
              className="py-4 px-4 my-2 rounded font-semibold bg-neutral-800 text-gray-200 dark:bg-gray-100 dark:text-gray-800 shadow-inner hover:opacity-80"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
