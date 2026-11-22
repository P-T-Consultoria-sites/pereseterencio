import { useMemo } from "react";

/**
 * Decorative animated neural-network background.
 * Pure SVG + CSS, no canvas, no deps.
 */
export function NeuralNetworkBg() {
  const { nodes, edges } = useMemo(() => {
    // Deterministic pseudo-random nodes across a 100x60 viewBox
    const seed = [
      [8, 12], [22, 6], [16, 28], [30, 20], [44, 10], [38, 32],
      [54, 22], [62, 8], [70, 30], [82, 14], [90, 26], [76, 48],
      [12, 44], [28, 52], [46, 46], [60, 54], [88, 50], [50, 14],
    ];
    const nodes = seed.map(([x, y], i) => ({ id: i, x, y }));
    // Connect each node to its 2 nearest neighbors
    const edges: { a: number; b: number; key: string }[] = [];
    const seen = new Set<string>();
    nodes.forEach((n) => {
      const sorted = nodes
        .filter((m) => m.id !== n.id)
        .map((m) => ({ m, d: Math.hypot(m.x - n.x, m.y - n.y) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      sorted.forEach(({ m }) => {
        const key = [n.id, m.id].sort((x, y) => x - y).join("-");
        if (!seen.has(key)) {
          seen.add(key);
          edges.push({ a: n.id, b: m.id, key });
        }
      });
    });
    return { nodes, edges };
  }, []);

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="nn-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="oklch(0.95 0.05 260)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.85 0.18 270)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.95 0.05 260)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="nn-node">
          <stop offset="0%" stopColor="oklch(1 0 0)" stopOpacity="1" />
          <stop offset="100%" stopColor="oklch(0.85 0.18 270)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Static faint edges */}
      <g stroke="oklch(1 0 0 / 0.18)" strokeWidth="0.12">
        {edges.map((e) => {
          const a = nodes[e.a];
          const b = nodes[e.b];
          return <line key={e.key} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />;
        })}
      </g>

      {/* Traveling beams along a subset of edges */}
      <g>
        {edges.slice(0, 10).map((e, i) => {
          const a = nodes[e.a];
          const b = nodes[e.b];
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          return (
            <line
              key={`beam-${e.key}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#nn-edge)"
              strokeWidth="0.35"
              strokeLinecap="round"
              strokeDasharray={`${len * 0.25} ${len}`}
              style={{
                animation: `nn-dash ${4 + (i % 5)}s linear ${i * 0.4}s infinite`,
              }}
            />
          );
        })}
      </g>

      {/* Pulsing nodes */}
      <g>
        {nodes.map((n, i) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="1.6"
              fill="url(#nn-node)"
              style={{
                animation: `nn-pulse ${2.4 + (i % 4) * 0.5}s ease-in-out ${i * 0.15}s infinite`,
                transformOrigin: `${n.x}px ${n.y}px`,
              }}
            />
            <circle cx={n.x} cy={n.y} r="0.45" fill="oklch(1 0 0)" />
          </g>
        ))}
      </g>

      <style>{`
        @keyframes nn-dash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -200; }
        }
        @keyframes nn-pulse {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.6); opacity: 1; }
        }
      `}</style>
    </svg>
  );
}
