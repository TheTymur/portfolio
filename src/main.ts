// src/main.ts

interface Point3D {
  x: number;
  y: number;
  z: number;
}

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const scale = 168;

  const hexRadius = 2;
  const height = 0.7;
  const vertices: Point3D[] = [];

  const rings = 4;
  for (let r = 0; r < rings; r++) {
    const y = -height + (2 * height * r) / (rings - 1);
    const ringScale = 1 - 0.15 * Math.abs(r - (rings - 1) / 2) / ((rings - 1) / 2); // slight taper
    for (let i = 0; i < 8; i++) {

      const angle = (Math.PI / 4) * i - Math.PI / 8;
      vertices.push({
        x: Math.cos(angle) * hexRadius * ringScale,
        y,
        z: Math.sin(angle) * hexRadius * ringScale,
      });
    }
  }

  const centerTop = vertices.length;
  vertices.push({ x: 0, y: -height, z: 0 });
  const centerBottom = vertices.length;
  vertices.push({ x: 0, y: height, z: 0 });
  const centerMid = vertices.length;
  vertices.push({ x: 0, y: 0, z: 0 });

  const edges: { from: number; to: number; bright: boolean }[] = [];

  const addEdge = (a: number, b: number, bright: boolean) => {
    edges.push({ from: a, to: b, bright });
  };

  for (let r = 0; r < rings; r++) {
    const base = r * 8;
    for (let i = 0; i < 8; i++) {
      addEdge(base + i, base + ((i + 1) % 8), true);
    }
  }

  for (let r = 0; r < rings - 1; r++) {
    for (let i = 0; i < 8; i++) {
      addEdge(r * 8 + i, (r + 1) * 8 + i, true);
    }
  }

  for (let r = 0; r < rings - 1; r++) {
    for (let i = 0; i < 8; i++) {
      addEdge(r * 8 + i, (r + 1) * 8 + ((i + 1) % 8), false);
      addEdge(r * 8 + ((i + 1) % 8), (r + 1) * 8 + i, false);
    }
  }

  for (let i = 0; i < 8; i++) {
    addEdge(centerTop, i, true);
    addEdge(centerBottom, (rings - 1) * 8 + i, true);
  }

  for (let i = 0; i < 8; i++) {
    addEdge(centerMid, Math.floor(rings / 2) * 8 + i, false);
    addEdge(i, (rings - 1) * 8 + ((i + 4) % 8), false);
    addEdge(i, (rings - 1) * 8 + ((i + 3) % 8), false);
  }

  const rotateY = (p: Point3D, angle: number): Point3D => ({
    x: p.x * Math.cos(angle) + p.z * Math.sin(angle),
    y: p.y,
    z: -p.x * Math.sin(angle) + p.z * Math.cos(angle),
  });

  const rotateX = (p: Point3D, angle: number): Point3D => ({
    x: p.x,
    y: p.y * Math.cos(angle) - p.z * Math.sin(angle),
    z: p.y * Math.sin(angle) + p.z * Math.cos(angle),
  });

  const project = (p: Point3D): { x: number; y: number; depth: number } => {
    const fov = 12;
    const z = p.z + fov;
    const factor = fov / z;
    const xOffset = canvas.width / 2;
    return {
      x: p.x * factor * scale + xOffset,
      y: p.y * factor * scale + canvas.height / 2,
      depth: z,
    };
  };

  const draw = (time: number) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const angleYVal = time * 0.0006;
    const angleXVal = Math.sin(time * 0.0003) * 0.3;
    
    const stretch = 1 + 0.3  * Math.sin(time * 0.0001);

    const projected = vertices.map((v) => {
      const stretched = { x: v.x * stretch, y: v.y * stretch, z: v.z * stretch };
      let r = rotateY(stretched, angleYVal);
      r = rotateX(r, angleXVal);
      return project(r);
    });

    edges.forEach(({ from, to, bright }) => {
      const a = projected[from];
      const b = projected[to];
      const depthAlpha = Math.max(0.05, 0.9 - Math.min(a.depth, b.depth) * 0.05);
      const alpha = bright ? depthAlpha : depthAlpha * 0.25;
      const width = bright ? 3 : 1.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = `rgba(181, 255, 233, ${alpha})`;
      ctx.lineWidth = width;
      if (bright) {
        ctx.shadowColor = "rgba(181, 255, 233, 0.5)";
        ctx.shadowBlur = 6;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    });

    projected.forEach((p) => {
      const alpha = Math.max(0.3, 0.9 - p.depth * 0.06);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(181, 255, 233, ${alpha})`;
      ctx.shadowColor = "rgba(181, 255, 233, 0.7)";
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(draw);
  };

  requestAnimationFrame(draw);
});