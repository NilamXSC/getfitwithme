import { motion } from "framer-motion";

const steps = [
  { title: "Install & Sign In", text: "Create your profile and goals." },
  { title: "Pick a Plan",       text: "Choose New, Pro, Premium or Royal." },
  { title: "Train & Track",     text: "Daily workouts and habit tracking." },
  { title: "Review & Adjust",   text: "Coach feedback and weekly tweaks." },
];

export default function UsingApp(){
  return (
    <section className="section bg-surface/60">
      <div className="shell">
        <motion.h2 className="text-3xl font-bold" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}}>
          Using the App
        </motion.h2>
        <p className="body text-muted mt-2">Four simple steps to stay on track.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i)=>(
            <motion.div key={s.title} className="card card-pad soft-shadow" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:i*0.05}}>
              <div className="text-2xl font-extrabold">{i+1}</div>
              <div className="mt-2 font-semibold">{s.title}</div>
              <div className="text-sm text-muted mt-1">{s.text}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}