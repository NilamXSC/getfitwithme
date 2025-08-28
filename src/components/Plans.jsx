import { useState } from "react";
import { motion } from "framer-motion";
import { buildUPILink } from "../lib/links";
import UPIModal from "./UPIModal";

// Coach details (also used elsewhere)
const COACH = {
  upiVPA: "trainer@okaxis",
  upiName: "Coach Arun",
  whatsapp: "919812345678",
  email: "coach@example.com",
};

const PLANS = [
  { name: "New",     price: 999,  tag: "Starter",      features: ["2 weeks access", "Basic diet sheet", "Form check 1×"] },
  { name: "Pro",     price: 1999,  tag: "Popular",      features: ["1 month access", "Customized plan", "Form checks 2×"] },
  { name: "Plus", price: 5999, tag: "Premium", features: ["8 weeks access", "Macro coaching", "Weekly 1:1 call"] },
  { name: "Royal",   price: 9999, tag: "All-in",       features: ["12 weeks access", "Full nutrition", "Unlimited chat"] },
];

function PlanCard({ plan, onPay }) {
  const upiLink = buildUPILink({
    pa: COACH.upiVPA,
    pn: COACH.upiName,
    am: plan.price,
    tn: `${plan.name} Plan`,
  });

  return (
    <motion.div
      className="card soft-shadow flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <div className="card-pad flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{plan.name}</h3>
          <span className="text-xs px-2 py-1 rounded-md" style={{ background: "var(--accent)", color: "#000" }}>
            {plan.tag}
          </span>
        </div>

        <div className="mt-4">
          <div className="text-3xl font-extrabold">₹{plan.price}</div>
          <div className="text-sm text-muted">/ plan</div>
        </div>

        <ul className="mt-6 space-y-2 text-sm text-muted flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <span className="mt-[2px]">•</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Open modal instead of navigating right away */}
        <button
          onClick={() => onPay(plan)}
          className="block w-full text-center font-semibold rounded-xl py-3 mt-6 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
          style={{ background: "var(--accent)", color: "#000" }}
        >
          Pay via UPI
        </button>

        {/* Optional direct link fallback under the button */}
        <a href={upiLink} className="mt-2 text-xs underline text-muted text-center">
          Having trouble? Open directly
        </a>
      </div>
    </motion.div>
  );
}

export default function Plans() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  function onPay(plan) {
    setSelected(plan);
    setOpen(true);
  }

  return (
    <section id="plans" className="section bg-surface/60">
      <div className="shell">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Plans
        </motion.h2>
        <p className="body text-muted mt-2">Simple pricing. Pick what fits your goals.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} onPay={onPay} />
          ))}
        </div>
      </div>

      {/* UPI Modal */}
      <UPIModal
        open={open}
        onClose={() => setOpen(false)}
        pa={COACH.upiVPA}
        pn={COACH.upiName}
        amount={selected?.price || 0}
        note={selected ? `${selected.name} Plan` : ""}
      />
    </section>
  );
}

export const COACH_INFO = COACH;
