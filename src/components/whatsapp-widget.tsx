"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IconBrandWhatsapp, IconX } from "@tabler/icons-react";

export const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "9663614603";
  const message = encodeURIComponent(
    "Hi Prodone! I'd like to schedule a meeting to discuss my project. When would be a good time for a call?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 rounded-2xl border border-red-500/30 bg-neutral-900 p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                  <IconBrandWhatsapp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Prodone Support</h4>
                  <p className="text-xs text-green-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <IconX className="h-5 w-5" />
              </button>
            </div>
            <div className="mb-4 rounded-xl bg-neutral-800 p-4">
              <p className="text-sm text-neutral-300">
                👋 Hey there! Want to discuss your project? Request a meeting with us on WhatsApp and we&apos;ll get back to you within hours!
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-medium text-white transition-colors hover:bg-green-600"
            >
              <IconBrandWhatsapp className="h-5 w-5" />
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/30 transition-colors hover:bg-green-600"
      >
        {isOpen ? (
          <IconX className="h-6 w-6 text-white" />
        ) : (
          <IconBrandWhatsapp className="h-7 w-7 text-white" />
        )}
      </motion.button>
    </div>
  );
};
