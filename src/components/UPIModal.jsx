import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { buildUPILink } from "../lib/links";

export default function UPIModal({
  open,
  onClose,
  pa,      // VPA (e.g., trainer@okaxis)
  pn,      // Payee name (e.g., Coach Arun)
  amount,  // number
  note,    // string like "Pro Plan"
}) {
  const upiLink = useMemo(
    () =>
      buildUPILink({
        pa,
        pn,
        am: amount,
        tn: note || "Get Fit Plan",
      }),
    [pa, pn, amount, note]
  );

  const [qr, setQr] = useState("");

  useEffect(() => {
    let mounted = true;
    if (open) {
      QRCode.toDataURL(upiLink, { margin: 1, scale: 6 })
        .then((url) => mounted && setQr(url))
        .catch(() => mounted && setQr(""));
    } else {
      setQr("");
    }
    return () => {
      mounted = false;
    };
  }, [open, upiLink]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card card soft-shadow"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="UPI Payment"
      >
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">Pay via UPI</h3>
          <button className="btn btn-outline" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        {/* QR + actions */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-black/20 p-4 grid place-items-center">
            {qr ? (
              <img src={qr} alt="UPI QR" className="w-[220px] h-[220px]" />
            ) : (
              <div className="text-sm text-muted">Generating QR…</div>
            )}
          </div>

          <div className="space-y-4">
            <Field label="Payee">
              <Copyable text={pn} />
            </Field>
            <Field label="VPA">
              <Copyable text={pa} mono />
            </Field>
            <Field label="Amount">
              <Copyable text={`₹${amount}`} />
            </Field>
            {note ? (
              <Field label="Note">
                <Copyable text={note} />
              </Field>
            ) : null}

            <a
              href={upiLink}
              className="block w-full text-center font-semibold rounded-xl py-3 focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
              style={{ background: "var(--accent)", color: "#000" }}
            >
              Pay in UPI App
            </a>

            <p className="text-xs text-muted">
              Tip: On mobile, tap <strong>Pay in UPI App</strong>. On desktop, open your UPI app
              and scan the QR, or copy the link below.
            </p>

            <CopyRow upiLink={upiLink} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function Copyable({ text, mono }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }
  return (
    <div className="flex items-center justify-between gap-3">
      <div className={mono ? "font-mono text-sm" : ""}>{text}</div>
      <button className="btn btn-outline px-3 py-1 text-sm" onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

function CopyRow({ upiLink }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(upiLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }
  return (
    <div className="flex items-center gap-2">
      <input
        className="flex-1 rounded-lg bg-black/20 border border-white/10 px-3 py-2 text-xs overflow-hidden text-ellipsis"
        readOnly
        value={upiLink}
      />
      <button className="btn btn-outline px-3 py-2 text-sm" onClick={copy}>
        {copied ? "Copied" : "Copy Link"}
      </button>
    </div>
  );
}