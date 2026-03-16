import { useState } from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function CTAButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block ">
      <button
        onClick={() => setOpen(!open)}
        className="bg-accent text-white px-6 py-3 rounded-lg cursor-pointer"
      >
        Get Your FREE Website
      </button>

      {open && (
        <div className="absolute top-14 left-0 w-64 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-3">
          <a
            href="https://wa.me/2348012345678"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded"
          >
            <FaWhatsapp size={18} />
            Chat on WhatsApp
          </a>

          <a
            href="mailto:youremail@gmail.com"
            className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded"
          >
            <FaEnvelope size={18} />
            Send Email
          </a>
        </div>
      )}
    </div>
  );
}
