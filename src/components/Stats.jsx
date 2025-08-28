const ITEMS = [
  { value: "120+", label: "Active Students" },
  { value: "160+", label: "Online Classes" },
  { value: "45+",  label: "Winning Awards" },
];

export default function Stats(){
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {ITEMS.map((it) => (
        <div
          key={it.label}
          className="card card-pad soft-shadow transition-transform hover:-translate-y-1"
        >
          <div className="text-2xl font-extrabold">{it.value}</div>
          <div className="text-sm text-muted mt-1">{it.label}</div>
        </div>
      ))}
    </div>
  );
}