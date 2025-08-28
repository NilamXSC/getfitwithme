import { motion } from "framer-motion";
import Tilt3D from "./Tilt3D.jsx";

export default function Story(){
  return (
    <section className="section">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT: story text */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold"
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6}}
            >
              The idea behind <span style={{color:"var(--accent)"}}>Get Fit</span>
            </motion.h2>

            <motion.div
              className="body text-muted mt-6 max-w-3xl text-lg leading-relaxed space-y-4"
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6, delay:.05}}
            >
              <p>
                I, <strong>Arun</strong>, felt there had to be an app that paired simple workouts
                with real accountability, habit tracking, weekly reviews, and smart recovery - all in one place.
              </p>
              <p>
                <strong className="text-white">Get Fit</strong> is that tool. Not another flashy gimmick,
                but a companion designed to help real people build routines that last. When motivation dips,
                clarity and small wins keep you moving, so the app stays focused on what matters today.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Focused plans you can actually follow day by day.</li>
                <li>Gentle nudges that keep you on track without noise.</li>
                <li>Clear dashboards so you know what you did and what’s next.</li>
                <li>Smart recovery to prevent burnout and sustain progress.</li>
              </ul>
              <p>
                My goal is simple: put coaching principles, clarity, accountability and consistency,
                in your pocket so you never wonder <em>“what should I do today?”</em> again.
              </p>
            </motion.div>
          </div>

          {/* RIGHT: big circular logo with 3D tilt */}
          <motion.div
            className="mx-auto"
            initial={{opacity:0, scale:.96}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{duration:.6, delay:.1}}
          >
            <Tilt3D className="relative rounded-full soft-shadow bg-surface overflow-hidden">
              <img
                src="/logo.png"
                alt="Get Fit logo"
                className="w-full h-full object-contain p-4"
                loading="lazy"
                style={{
                  mixBlendMode: "screen", // ⬅ helps “remove” dark bg if logo has one
                }}
              />
            </Tilt3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
