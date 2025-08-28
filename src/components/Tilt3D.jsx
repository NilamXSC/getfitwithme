import { useRef } from "react";

/**
 * Tilt3D — lightweight parallax/3D tilt wrapper
 * usage: <Tilt3D className="your-classes">{children}</Tilt3D>
 */
export default function Tilt3D({
  children,
  className = "",
  max = 12,      // max tilt in degrees
  lift = 12,     // translateZ on hover (px)
}) {
  const ref = useRef(null);

  function setVars(x, y, hovering = true) {
    const el = ref.current;
    if (!el) return;
    // x,y are -0.5..0.5
    const rx = (-y * max).toFixed(2) + "deg";
    const ry = ( x * max).toFixed(2) + "deg";
    el.style.setProperty("--rx", rx);
    el.style.setProperty("--ry", ry);
    el.style.setProperty("--elev", hovering ? lift + "px" : "0px");
    el.style.setProperty("--mx", ((x + 0.5) * 100).toFixed(1) + "%");
    el.style.setProperty("--my", ((y + 0.5) * 100).toFixed(1) + "%");
  }

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (("touches" in e ? e.touches[0].clientX : e.clientX) - r.left) / r.width;
    const py = (("touches" in e ? e.touches[0].clientY : e.clientY) - r.top) / r.height;
    const x = Math.min(1, Math.max(0, px)) - 0.5;
    const y = Math.min(1, Math.max(0, py)) - 0.5;
    setVars(x, y, true);
  }

  function onLeave() { setVars(0, 0, false); }

  return (
    <div
      ref={ref}
      className={`t3d ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onTouchStart={onMove}
      onTouchMove={onMove}
      onTouchEnd={onLeave}
    >
      {children}
    </div>
  );
}
