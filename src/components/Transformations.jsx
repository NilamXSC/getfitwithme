import { motion } from "framer-motion";

import arjunBefore  from "../assets/transformation/arjun-before.jpg";
import arjunAfter   from "../assets/transformation/arjun-after.jpg";
import brendaBefore from "../assets/transformation/brenda-before.jpg";
import brendaAfter  from "../assets/transformation/brenda-after.jpg";
import joshBefore   from "../assets/transformation/josh-before.jpg";
import joshAfter    from "../assets/transformation/josh-after.jpg";
import karanBefore  from "../assets/transformation/karan-before.jpg";
import karanAfter   from "../assets/transformation/karan-after.jpg";

const clients = [
  { name: "Arjun",  weeks: 4,  before: arjunBefore,  after: arjunAfter  },
  { name: "Brenda", weeks: 6,  before: brendaBefore, after: brendaAfter },
  { name: "Josh",   weeks: 20, before: joshBefore,    after: joshAfter   },
  { name: "Karan",  weeks: 4, before: karanBefore,   after: karanAfter  },
];

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Transformations(){
  return (
    <section className="section">
      <div className="shell">
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Client Transformations
        </motion.h2>
        <p className="body text-muted mt-2">Real consistency. Real results.</p>

        {/* Bigger layout: 1 col on mobile, 2 cols on md+, generous height */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((c, i) => (
            <motion.article
              key={c.name}
              className="card soft-shadow overflow-hidden"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={reveal}
            >
              {/* large media area */}
              <div className="grid grid-cols-2 gap-0">
                <figure className="relative aspect-[4/5]">
                  <img src={c.before} alt={`${c.name} before`} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-md" style={{ background: "rgba(0,0,0,.55)" }}>
                    Before
                  </span>
                </figure>
                <figure className="relative aspect-[4/5]">
                  <img src={c.after} alt={`${c.name} after`} className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute left-2 top-2 text-xs font-semibold px-2 py-1 rounded-md" style={{ background: "rgba(0,0,0,.55)" }}>
                    After
                  </span>
                </figure>
              </div>

              <div className="card-pad">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{c.name}</h3>
                  <span className="text-sm text-muted">{c.weeks} weeks</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}