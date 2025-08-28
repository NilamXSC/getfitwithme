export default function FAQ(){
  const items = [
    { q: "How do payments work?", a: "Tap Pay via UPI/GPay on any plan—works with GPay/PhonePe/Paytm. You’ll receive a confirmation immediately." },
    { q: "Do I get a custom plan?", a: "Yes. After purchase you’ll complete a quick form and we’ll tailor training and nutrition to your goals." },
    { q: "How are check-ins done?", a: "Weekly via WhatsApp or email. We’ll review progress, adjust macros and training, and plan the next week." },
    { q: "Can beginners join?", a: "Absolutely. We’ll start with fundamentals and progress safely." },
  ];

  return (
    <section className="section bg-surface/60">
      <div className="shell">
        <h2 className="text-3xl font-bold">FAQ</h2>
        <p className="body text-muted mt-2">Quick answers to common questions.</p>

        <div className="mt-8 space-y-3">
          {items.map((it) => (
            <details key={it.q} className="card soft-shadow">
              <summary className="card-pad cursor-pointer font-semibold">
                {it.q}
              </summary>
              <div className="card-pad pt-0 text-muted">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}