import { useEffect, useRef, useState } from "react";

export default function SignInModal({ open, onClose, onSigned }) {
  const googleBtnRef = useRef(null);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  // Load Google Identity if client id provided
  useEffect(() => {
    if (!open) return;

    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    if (!clientId) return;

    function init() {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: (response) => {
          // Decode basic profile from credential
          try {
            const payload = JSON.parse(atob(response.credential.split(".")[1]));
            onSigned({
              name: payload.name || "User",
              photoUrl: payload.picture || "/logo.png",
            });
          } catch {
            onSigned({ name: "User", photoUrl: "/logo.png" });
          }
        },
      });
      if (googleBtnRef.current) {
        window.google.accounts.id.renderButton(googleBtnRef.current, {
          theme: "outline",
          size: "large",
          type: "standard",
          shape: "pill",
          text: "signin_with",
          logo_alignment: "left",
          width: 260,
        });
      }
    }

    // inject script
    const id = "google-identity";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.defer = true;
      s.id = id;
      s.onload = init;
      document.head.appendChild(s);
    } else if (window.google && window.google.accounts) {
      init();
    }
  }, [open, onSigned]);

  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card card soft-shadow"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Sign in"
      >
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold">Sign in</h3>
          <button className="btn btn-outline" onClick={onClose} aria-label="Close">
            ✕
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {/* Google */}
          <div className="space-y-3">
            <div className="text-sm text-muted">Use Google</div>
            <div ref={googleBtnRef} />
            {!import.meta.env.VITE_GOOGLE_CLIENT_ID && (
              <p className="text-xs text-muted">
                {/* Tip: set <code>VITE_GOOGLE_CLIENT_ID</code> in <code>.env</code> to enable Google sign-in. */}
              </p>
            )}
          </div>

          {/* Guest */}
          <div className="space-y-3">
            <div className="text-sm text-muted">Or continue as guest</div>
            <input
              className="input"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              placeholder="Photo URL (optional)"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
            <button
              className="btn btn-solid w-full"
              onClick={() =>
                onSigned({ name: name || "User", photoUrl: photo || "/logo.png" })
              }
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
