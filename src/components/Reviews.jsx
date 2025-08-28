import { motion } from "framer-motion";

const reviews = [
  { name: "Arjun R.",  text: "Dropped 6kg in 8 weeks and my 5K time fell by 2 minutes. Plans are super clear.", stars: 5 },
  { name: "Brenda K.", text: "Coach keeps me consistent. The weekly check-ins are gold.", stars: 5 },
  { name: "Josh P.",   text: "Great mix of strength and cardio. Recovery tips really helped.", stars: 4 },
  { name: "Karan S.",  text: "Clean diet plan, realistic scheduling, and steady progress.", stars: 5 },
];

function Stars({ n }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill={i < n ? "#FFD166" : "none"} stroke="#FFD166">
          <path d="M10 1.5l2.7 5.47 6.05.88-4.38 4.27 1.03 6.01L10 15.9l-5.4 2.83 1.03-6.01L1.25 7.85l6.05-.88L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews(){
  return (
    <section className="section">
      <div className="shell">
        <h2 className="text-3xl font-bold">Reviews from Clients</h2>
        <p className="body text-muted mt-2">A few words from runners and lifters I coach.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              className="card card-pad soft-shadow"
              initial={{opacity:0, y:16}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true, amount:0.2}}
              transition={{duration:.5, delay:i*0.04}}
            >
              <Stars n={r.stars} />
              <p className="mt-3">{r.text}</p>
              <div className="mt-4 text-sm text-muted">— {r.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}