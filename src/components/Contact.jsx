import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-t border-stone-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>

      <div className="text-center tracking-tighter mb-10">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.Contact}</p>

        <a
          href={`mailto:${CONTACT.MailId}`}
          className="border-b text-blue-500 hover:text-blue-700"
        >
          {CONTACT.MailId}
        </a>
      </div>

      <div className="flex justify-center">
        <form className="flex flex-col w-full max-w-lg gap-6 px-4">
          <input
            type="text"
            placeholder="Name"
            className="p-4 text-lg border border-stone-700 rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-4 text-lg border border-stone-700 rounded bg-white text-black placeholder-gray-500"
          />
          <textarea
            placeholder="Description"
            className="p-4 text-lg border border-stone-700 rounded bg-white text-black placeholder-gray-500 h-40 resize-none"
          />
          <button
            type="submit"
            className="bg-white text-black text-lg py-3 rounded border border-stone-700 hover:bg-stone-100 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
