export default function Footer(){
  return (
    <footer className="pt-16" style={{ background: "var(--footer)" }}>
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold">Get Fit</div>
            <div className="text-sm text-muted mt-2">© 2025 GET FIT. All Rights reserved.</div>
          </div>

          {/* Support */}
          <div>
            <div className="font-semibold">Support</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#contact" className="hover:underline">How to reach coach</a></li>
              <li><a href="#contact" className="hover:underline">Join community</a></li>
            </ul>
          </div>

          {/* Follow us */}
          <div>
            <div className="font-semibold">Follow us</div>
            <div className="mt-3 flex gap-3">
              <a className="social" href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm5.5-.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"/></svg>
              </a>
              <a className="social" href="#" aria-label="YouTube">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M23 7.2s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17.7 3.7 12 3.7 12 3.7s-5.7 0-8.1.3c-.4.1-1.3.1-2.1.9C1.2 5.6 1 7.2 1 7.2S.8 8.9.8 10.7v1.6c0 1.8.2 3.5.2 3.5s.2 1.6.8 2.3c.8.8 1.9.8 2.3.9c1.7.2 7.2.3 7.9.3c0 0 5.7 0 8.1-.3c.4-.1 1.3-.1 2.1-.9c.6-.7.8-2.3.8-2.3s.2-1.7.2-3.4v-1.6c0-1.8-.2-3.5-.2-3.5ZM9.8 13.9V7.9l6 3l-6 3Z"/></svg>
              </a>
              <a className="social" href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M13.5 22v-8h2.7l.4-3h-3.1V9.4c0-.9.2-1.5 1.6-1.5H17V5.2c-.8-.1-1.5-.2-2.3-.2c-2.3 0-3.9 1.4-3.9 3.9V11H8v3h2.8v8h2.7z"/></svg>
              </a>
              <a className="social" href="#" aria-label="Twitter/X">
                <svg viewBox="0 0 24 24" className="h-5 w-5"><path fill="currentColor" d="M3 3h4.6l4.4 6.7L16.4 3H21l-7 9.7L21 21h-4.6l-4.6-7L7.6 21H3l7.2-8.9L3 3z"/></svg>
              </a>
            </div>
          </div>

          {/* Support (right column stays empty space on md for layout symmetry) */}
          <div />
        </div>

        {/* bottom bar centered */}
        <div className="mt-10 border-t border-white/10 py-6 text-center text-sm text-muted">
          Created by <span className="font-semibold">Nilam Chakraborty</span>
        </div>
      </div>
    </footer>
  );
}
