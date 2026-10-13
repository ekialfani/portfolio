import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

function Contacts() {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        },
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setForm(initialForm);
    } catch (error) {
      console.error("Failed to send email:", error);

      setStatus({
        type: "error",
        message: "Failed to send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="w-full min-h-[86vh] py-10">
      <h2 className="text-sm text-gray-500 font-medium mb-1">Get in Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-6">
        <div>
          <h1 className="text-3xl font-bold">Let's Work Together</h1>

          <p className="text-sm text-gray-500 mt-5 max-w-[340px] leading-6">
            I'm always open to discussing new projects, creative ideas or
            opportunities. Feel free to reach out through the form or other
            channels below.
          </p>

          <ul className="mt-8">
            <li className="mb-5">
              <a
                className="flex items-center gap-x-4"
                href="mailto:ekii.dev@gmail.com"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-gray-200 border border-gray-400 flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-gray-800"
                    icon={faEnvelope}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Email</p>
                  <p className="text-xs text-gray-500">ekii.dev@gmail.com</p>
                </div>
              </a>
            </li>

            <li className="mb-5">
              <a
                className="flex items-center gap-x-4"
                href="https://www.linkedin.com/in/eki-alfani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 shrink-0 rounded-full bg-gray-200 border border-gray-400 flex justify-center items-center">
                  <FontAwesomeIcon
                    className="text-gray-800"
                    icon={faLinkedin}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">LinkedIn</p>
                  <p className="text-xs text-gray-500">
                    linkedin.com/in/eki-alfani
                  </p>
                </div>
              </a>
            </li>

            <li className="mb-6 flex items-center gap-x-4">
              <div className="w-8 h-8 shrink-0 rounded-full bg-gray-200 border border-gray-400 flex justify-center items-center">
                <FontAwesomeIcon
                  className="text-gray-800"
                  icon={faLocationDot}
                />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Location</p>
                <p className="text-xs text-gray-500">Lombok, Indonesia</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          className="bg-white p-6 sm:p-8 border border-gray-200 rounded-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className="text-sm w-full py-2 px-3 border border-gray-200 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 rounded-md"
              placeholder="Your name"
              required
              maxLength={100}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="text-sm w-full py-2 px-3 border border-gray-200 focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 rounded-md"
              placeholder="you@example.com"
              required
              maxLength={254}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full min-h-28 border border-gray-200 p-3 text-sm focus:outline-none focus:border-gray-700 focus:ring-1 focus:ring-gray-700 rounded-md"
              placeholder="Type your message here..."
              required
              maxLength={5000}
            />
          </div>

          {status.message && (
            <p
              role="status"
              aria-live="polite"
              className={`mb-4 text-sm ${
                status.type === "success" ? "text-green-700" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="text-sm font-semibold py-2.5 px-4 bg-black text-white rounded-md flex items-center gap-x-2 transition-colors hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            <span>{isSending ? "Sending..." : "Send Message"}</span>

            {!isSending && <FontAwesomeIcon icon={faArrowRight} />}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
