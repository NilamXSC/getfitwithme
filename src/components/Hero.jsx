import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Stats from "./Stats.jsx";
import Tilt3D from "./Tilt3D.jsx";
import trainer from "../assets/trainer.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }
};

export default function Hero(){
  const location = useLocation();
  const navigate = useNavigate();

  function goPlans() {
    if (location.pathname !== "/") navigate("/");
    setTimeout(() => {
      document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  return (
    <section className="relative overflow-hidden section pt-36 md:pt-40">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(closest-side,#28303A,transparent)" }}
      />

      <div className="shell grid lg:grid-cols-2 gap-10 items-end">
        {/* LEFT: heading & copy */}
        <div>
          <motion.h1 className="h1-hero" initial="hidden" animate="show" variants={fadeUp}>
            Never Stop
            <span className="block mt-4">
              <motion.span
                className="inline-block -rotate-3 rounded-full px-4 py-2 text-black"
                style={{ background: "var(--accent)" }}
                initial={{ rotate: -6, scale: 0.96 }}
                animate={{ rotate: -3, scale: 1 }}
                transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.2 }}
              >
                <span className="h1-hero">Running</span>
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="body mt-6 text-muted max-w-xl"
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.1 }}
          >
            Join now for your 7 days <span className="underline decoration-[var(--accent-2)] underline-offset-4">FREE</span> trial.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial="hidden" animate="show" variants={fadeUp} transition={{ delay: 0.2 }}
          >
            <button onClick={goPlans} className="btn btn-outline focus-ring">Get Started →</button>
            <a href="/dashboard" className="btn btn-solid focus-ring">View Dashboard</a>
          </motion.div>

          <motion.div
            className="mt-10"
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
          >
            <Stats />
          </motion.div>
        </div>

        {/* RIGHT: circular avatar + intro card */}
        <div className="flex flex-col items-center lg:items-start gap-6">
          {/* Avatar circle with 3D tilt/bright */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Tilt3D className="relative avatar-circle soft-shadow">
              <img
                src={trainer}
                alt="Coach portrait"
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 20%" }}
                loading="eager"
              />
            </Tilt3D>
          </motion.div>

          {/* Intro card */}
          <motion.div
            className="card card-pad soft-shadow w-full max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="text-sm text-muted">Meet your coach</div>
            <div className="mt-1 text-xl font-semibold">Arun Verma • Certified Strength Coach</div>
            <p className="body text-muted mt-2">
              7+ years helping 300+ clients run faster, get stronger, and build habits that stick.
              Personalized plans, weekly check-ins, and smart recovery.
            </p>
          </motion.div>
        </div>
      </div>

      {/* angled banner */}
      <motion.div
        className="pointer-events-none absolute -bottom-16 left-0 right-0 h-24 -rotate-2"
        style={{ background: "linear-gradient(90deg,var(--accent),#BBD7D2)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </section>
  );
}