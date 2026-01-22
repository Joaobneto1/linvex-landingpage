export function OrganicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave shape top-right */}
      <svg
        className="absolute -top-40 -right-40 w-[800px] h-[800px] opacity-[0.03]"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M800 400C800 621.503 621.503 800 400 800C178.497 800 0 621.503 0 400C0 178.497 178.497 0 400 0C621.503 0 800 178.497 800 400Z"
          fill="url(#gradient1)"
        />
        <defs>
          <linearGradient id="gradient1" x1="0" y1="0" x2="800" y2="800">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0099FF" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wave shape bottom-left */}
      <svg
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] opacity-[0.04]"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M600 300C600 465.685 465.685 600 300 600C134.315 600 0 465.685 0 300C0 134.315 134.315 0 300 0C465.685 0 600 134.315 600 300Z"
          fill="url(#gradient2)"
        />
        <defs>
          <linearGradient id="gradient2" x1="600" y1="600" x2="0" y2="0">
            <stop offset="0%" stopColor="#0076CE" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#001233" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Curved line accent */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 opacity-[0.08]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="#0076CE"
        />
      </svg>
    </div>
  );
}
