import React, { useState } from "react";
import { CONTACT } from "../constants";


const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key",import.meta.env.VITE_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="border-t border-stone-900 pb-20" id="contact">
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
        <form
          onSubmit={onSubmit}
          className="flex flex-col w-full max-w-lg gap-6 px-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="p-4 text-lg border border-stone-700 rounded bg-white text-black placeholder-gray-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="p-4 text-lg border border-stone-700 rounded bg-white text-black placeholder-gray-500"
          />
          <textarea
            name="message"
            placeholder="Description"
            required
            className="p-4 text-lg border border-stone-700 rounded bg-white text-black placeholder-gray-500 h-40 resize-none"
          />
          <button
            type="submit"
            className="bg-white text-black text-lg py-3 rounded border border-stone-700 hover:bg-stone-100 transition"
          >
            Submit
          </button>
          <span className="text-center text-sm text-gray-600">{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
