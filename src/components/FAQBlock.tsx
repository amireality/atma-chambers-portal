import { useState } from "react";
import { FAQ } from "@/lib/faqData";
import { motion, AnimatePresence } from "framer-motion";

export function FAQBlock({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id} className="border border-[#23120B]/10 bg-white rounded-sm overflow-hidden">
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F4F0E8] transition-colors"
            >
              <span className="font-display text-xl text-[#23120B]">{faq.question}</span>
              <span className="text-[#B99A62] ml-4 font-light text-2xl transition-transform duration-300" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                +
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 pt-0 text-sm font-light leading-relaxed text-[#23120B]/80 border-t border-[#23120B]/5">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
