import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SignInModal from "../components/SignInModal.jsx";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";

// Screens (portrait showcase)
import app1 from "../assets/app1.jpg";
import app2 from "../assets/app2.jpg";
import app3 from "../assets/app3.jpg";
import app4 from "../assets/app4.jpg";

// Feature images
import stepsImg from "../assets/steps.jpg";
import mealImg from "../assets/meal.jpg";
import workoutImg from "../assets/workout.jpg";

const TABS = ["Dashboard", "Analytics", "Goals", "Meals"];
const THEMES = ["Dark", "Light", "Vibrant"]; // UI labels; we lowercase on click

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  function goPlans() {
    if (location.pathname !== "/") navigate("/");
    setTimeout(() => {
      document.getElementById("plans")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  }

  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("gf_dash_user");
    return raw ? JSON.parse(raw) : null;
  });
  const [showSign, setShowSign] = useState(false);
  const [tab, setTab] = useState("Dashboard");
  const [theme, setTheme] = useState(() => localStorage.getItem("gf_dash_theme") || "dark");

  useEffect(() => { if (user) localStorage.setItem("gf_dash_user", JSON.stringify(user)); }, [user]);
  useEffect(() => { localStorage.setItem("gf_dash_theme", theme); }, [theme]);

  const [height, setHeight] = useState(173);
  const [weight, setWeight] = useState(70);
  const [steps, setSteps] = useState(8340);
  const bmi = useMemo(() => {
    const h = height / 100;
    return h ? (weight / (h * h)).toFixed(1) : 0;
  }, [height, weight]);

  return (
    <div className={`dash-page dash-theme-${theme}`}>
      {/* Top-right logo (instead of Navbar) */}
      <div className="flex justify-end items-center px-6 py-4 border-b border-white/10">
        <img
          src="/logo.png"
          alt="Get Fit"
          className="h-12 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="dash-shell pt-8 pb-16">
        <div className="dash-layout">
          {/* SIDEBAR */}
          <aside className="dash-side card soft-shadow">
            <div className="dash-side-head">
              <button className="sign-btn" onClick={() => setShowSign(true)}>
                <img
                  src={user?.photoUrl || "/logo.png"}
                  alt="avatar"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <div className="text-sm">{user ? user.name : "Sign in"}</div>
                  <div className="text-xs text-muted">{user ? "Profile" : "Use Google"}</div>
                </div>
              </button>
            </div>

            <nav className="dash-side-nav">
              <div className="dash-group">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`dash-link ${tab === t ? "active" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="dash-group">
                <div className="dash-label">Settings</div>
                <div className="dash-theme-row">
                  {THEMES.map((label) => {
                    const value = label.toLowerCase();
                    return (
                      <button
                        key={label}
                        className={`chip ${theme === value ? "chip-active" : ""}`}
                        onClick={() => setTheme(value)}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
                <a href="#help" className="dash-link">Help</a>
              </div>
            </nav>
          </aside>

          {/* MAIN */}
          <main className="dash-main">
            {tab === "Dashboard" && (
              <>
                {/* Welcome + metrics */}
                <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <div className="card soft-shadow card-pad">
                    <h2 className="text-2xl font-bold">
                      Welcome {user?.name ? user.name.split(" ")[0] : "User"}!
                    </h2>
                    <p className="text-muted mt-2">This is your dashboard overview.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <Metric label="Height" value={`${height} cm`}>
                      <input className="metric-input" type="number" value={height} onChange={(e)=>setHeight(Number(e.target.value))}/>
                    </Metric>
                    <Metric label="Weight" value={`${weight} kg`}>
                      <input className="metric-input" type="number" value={weight} onChange={(e)=>setWeight(Number(e.target.value))}/>
                    </Metric>
                    <Metric label="BMI" value={bmi}/>
                    <Metric label="Steps" value={steps.toLocaleString()}>
                      <input className="metric-input" type="number" value={steps} onChange={(e)=>setSteps(Number(e.target.value))}/>
                    </Metric>
                  </div>
                </section>

                {/* Features — equal height (items-stretch) */}
                <section className="grid md:grid-cols-3 gap-6 mt-6 items-stretch">
                  <FeatureCard title="Today’s Steps" img={stepsImg}>
                    Track your daily step streaks.
                  </FeatureCard>
                  <FeatureCard title="Custom Meal Plan" img={mealImg}>
                    Balanced macros and adjustments.
                  </FeatureCard>
                  <FeatureCard title="Exercise Planning" img={workoutImg}>
                    Progressive routines & form cues.
                  </FeatureCard>
                </section>

                {/* App showcase (portrait) */}
                <section className="card soft-shadow card-pad mt-8">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <h3 className="text-xl font-semibold">Use our app for personalized routine</h3>
                    <a href="/" className="btn btn-solid">Install Get Fit</a>
                  </div>
                  <div
                    className="grid gap-6 mt-6"
                    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
                  >
                    {[app1, app2, app3, app4].map((src, i) => (
                      <div
                        key={i}
                        className="rounded-2xl overflow-hidden bg-black/20 soft-shadow"
                        style={{ aspectRatio: "9/19", maxHeight: "560px", minHeight: "420px" }}
                      >
                        <img src={src} alt={`App ${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {tab === "Analytics" && <AnalyticsView />}

            {tab === "Goals" && (
              <PremiumGate
                title="Goals are a Premium feature"
                bullets={["Create milestones","Auto-track completion","Weekly review & habit score"]}
                onRegister={goPlans}
              />
            )}

            {tab === "Meals" && (
              <PremiumGate
                title="Meals planner is a Premium feature"
                bullets={["Personalized macro targets","Local food swaps & shopping list","Coach feedback weekly"]}
                onRegister={goPlans}
              />
            )}
          </main>
        </div>
      </div>

      <SignInModal
        open={showSign}
        onClose={()=>setShowSign(false)}
        onSigned={(p)=>{setUser(p);setShowSign(false);}}
      />
    </div>
  );
}

function Metric({ label, value, children }) {
  return (
    <div className="card soft-shadow card-pad">
      <div className="text-xs text-muted">{label}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}

/* Equal-height FeatureCard: full-height flex column + fixed image ratio */
function FeatureCard({ title, img, children }) {
  return (
    <div className="card soft-shadow h-full flex flex-col overflow-hidden">
      {/* equal image size across cards */}
      <div className="w-full aspect-[4/3]">
        <img
          src={img}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* text area fills the rest so heights match */}
      <div className="card-pad flex-1 flex flex-col">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-muted mt-1">{children}</p>
        {/* spacer keeps bottoms aligned even if text lengths differ */}
        <div className="mt-auto" />
      </div>
    </div>
  );
}

function PremiumGate({ title, bullets, onRegister }) {
  return (
    <section className="card soft-shadow card-pad">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-muted mt-2">Unlock with any paid plan to access this section.</p>
      <ul className="list-disc list-inside mt-4 space-y-1 text-muted">
        {bullets.map((b,i)=><li key={i}>{b}</li>)}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={onRegister} className="btn btn-solid">Register & Pay</button>
        <button onClick={onRegister} className="btn btn-outline">View Plans</button>
      </div>
    </section>
  );
}

function AnalyticsView(){
  const stepsData = Array.from({length:7},(_,i)=>({day:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i],steps:Math.floor(4000+Math.random()*6000)}));
  const mealsData=[{name:"Protein",value:40},{name:"Carbs",value:35},{name:"Fat",value:25}];
  const workoutData=Array.from({length:6},(_,i)=>({week:`W${i+1}`,sessions:Math.floor(2+Math.random()*3)}));
  const colors=["#88B5D6","#9CC7BF","#E8FF65"];
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card soft-shadow card-pad"><h3 className="text-lg font-semibold mb-4">Weekly Steps</h3>
        <ResponsiveContainer width="100%" height={260}><LineChart data={stepsData}><CartesianGrid strokeDasharray="3 3" opacity={0.1}/><XAxis dataKey="day"/><YAxis/><Tooltip/><Line type="monotone" dataKey="steps" stroke="var(--accent-2)" strokeWidth={2}/></LineChart></ResponsiveContainer>
      </div>
      <div className="card soft-shadow card-pad"><h3 className="text-lg font-semibold mb-4">Macro Breakdown</h3>
        <ResponsiveContainer width="100%" height={260}><PieChart><Pie data={mealsData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>{mealsData.map((_,i)=><Cell key={i} fill={colors[i%colors.length]}/>)}</Pie><Tooltip/><Legend/></PieChart></ResponsiveContainer>
      </div>
      <div className="card soft-shadow card-pad lg:col-span-2"><h3 className="text-lg font-semibold mb-4">Workout Sessions (Last 6 weeks)</h3>
        <ResponsiveContainer width="100%" height={260}><BarChart data={workoutData}><CartesianGrid strokeDasharray="3 3" opacity={0.1}/><XAxis dataKey="week"/><YAxis/><Tooltip/><Bar dataKey="sessions" fill="var(--accent)" radius={[6,6,0,0]}/></BarChart></ResponsiveContainer>
      </div>
    </div>
  );
}