import { motion } from "framer-motion";
import { buildMailto, buildWhatsAppLink } from "../lib/links";
import { COACH_INFO } from "./Plans";

export default function Contact(){
  const wa = buildWhatsAppLink(
    COACH_INFO.whatsapp,
    "Hi Coach, I have a quick question."
  );
  const mail = buildMailto(
    COACH_INFO.email,
    "Fitness Coaching Inquiry",
    "Hi Coach,\n\nI'd like to know more about your coaching plans.\n"
  );

  return (
    <section id="contact" className="section">
      <div className="shell">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>
        <p className="body text-muted mt-2">Reach out any time—responses are quick.</p>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="card card-pad soft-shadow md:col-span-2">
            <h3 className="text-xl font-semibold">Message the Coach</h3>
            <p className="body text-muted mt-2">
              Prefer WhatsApp for the fastest reply. Email works too.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href={wa}
                className="rounded-xl px-6 py-3 font-medium text-black transition-transform hover:-translate-y-0.5"
                style={{ background: "var(--accent-2)" }}
              >
                Chat on WhatsApp
              </a>
              <a
                href={mail}
                className="rounded-xl px-6 py-3 border border-white/20 hover:bg-white/10 transition focus-ring"
              >
                Email Us
              </a>
            </div>
          </div>

          <div className="card card-pad soft-shadow">
            <h4 className="font-semibold">Business info</h4>
            <ul className="mt-3 text-sm text-muted space-y-1">
              <li>UPI: {COACH_INFO.upiVPA}</li>
              <li>Name: {COACH_INFO.upiName}</li>
              <li>WhatsApp: +{COACH_INFO.whatsapp}</li>
              <li>Email: {COACH_INFO.email}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}