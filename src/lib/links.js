// src/lib/links.js
export function buildWhatsAppLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function buildMailto(email, subject, body = "") {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildUPILink({ pa, pn, am, tn }) {
  const base = `upi://pay?pa=${encodeURIComponent(pa)}&pn=${encodeURIComponent(pn)}&am=${encodeURIComponent(String(am))}&cu=INR`;
  return tn ? `${base}&tn=${encodeURIComponent(tn)}` : base;
}
