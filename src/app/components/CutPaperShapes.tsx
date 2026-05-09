export default function CutPaperShapes() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
        pointerEvents: "none",
      }}
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        className="cut-shape-drift-1"
        d="M-50 750 Q 150 650 400 760 Q 600 870 850 800 Q 950 770 1100 820 L 1100 1050 L -50 1050 Z"
        fill="#DD2D1F"
      />
      <g className="cut-shape-drift-2">
        <path
          d="M820 100 L 970 80 L 980 590 L 830 610 Z"
          fill="#E7B53A"
          transform="rotate(-4 900 350)"
        />
      </g>
      <path
        className="cut-shape-drift-3"
        d="M50 150 Q 90 60 200 110 Q 250 250 170 350 Q 60 370 30 240 Q 25 180 50 150 Z"
        fill="#2D8F4E"
      />
      <path
        className="cut-shape-drift-4"
        d="M870 20 Q 985 10 995 130 Q 970 220 880 200 Q 820 175 870 20 Z"
        fill="#131313"
      />
      <circle
        className="cut-shape-drift-5"
        cx="700"
        cy="200"
        r="22"
        fill="#1B3F8C"
      />
    </svg>
  );
}
