export type ClipPathType = {
    shape: string;
    clipPath: string;
  };
  // Define the clipPath map
  export const clipPathArray: ClipPathType[] = [
    { shape: "square", clipPath: "inset(0)" },
    { shape: "triangle", clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" },
    { shape: "circle", clipPath: "circle(50% at 50% 50%)" },
    { shape: "ellipse", clipPath: "ellipse(25% 40% at 50% 50%)" },
    { shape: "inset", clipPath: "inset(5% 20% 15% 10%)" },
    {
      shape: "polygon1",
      clipPath:
        "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
    },
    {
      shape: "polygon2",
      clipPath:
        "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
    },
    {
      shape: "polygon3",
      clipPath:
        "polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
    },
    {
      shape: "polygon4",
      clipPath:
        "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
    },
    {
      shape: "polygon5",
      clipPath:
        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
    },
    {
      shape: "polygon6",
      clipPath: "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
    },
    {
      shape: "polygon7",
      clipPath: "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)",
    },
    {
      shape: "polygon8",
      clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
    },
    {
      shape: "polygon9",
      clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
    },
    {
      shape: "polygon10",
      clipPath:
        "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
    },
    {
      shape: "polygon11",
      clipPath:
        "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
    },
    {
      shape: "polygon12",
      clipPath:
        "polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)",
    },
    {
      shape: "polygon13",
      clipPath:
        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
    },
    {
      shape: "polygon14",
      clipPath:
        "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
    },
    {
      shape: "polygon15",
      clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
    },
    {
      shape: "polygon16",
      clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    },
    {
      shape: "polygon17",
      clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    },
    {
      shape: "polygon18",
      clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    },
    {
      shape: "polygon19",
      clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    },
    {
      shape: "polygon20",
      clipPath:
        "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    },
  ];
  export const svgPathArray: ClipPathType[] = [
    { shape: "square", clipPath: "M0,0 H100 V100 H0 Z" },
    { shape: "triangle", clipPath: "M50,0 L0,100 L100,100 Z" },
    { shape: "circle", clipPath: "M50,0 A50,50 0 1,0 50,100 A50,50 0 1,0 50,0" },
    { shape: "ellipse", clipPath: "M50,0 A25,40 0 1,0 50,100 A25,40 0 1,0 50,0" },
    { shape: "inset", clipPath: "M5,0 H95 V100 H5 Z" }, // Adjusted for inset
    {
      shape: "polygon1",
      clipPath: "M0,0 L0,100 L25,100 L25,25 L75,25 L75,75 L25,75 L25,100 L100,100 L100,0 Z",
    },
    {
      shape: "polygon2",
      clipPath: "M20,0 L0,20 L30,50 L0,80 L20,100 L50,70 L80,100 L100,80 L70,50 L100,20 L80,0 L50,30 Z",
    },
    {
      shape: "polygon3",
      clipPath: "M0,0 L100,0 L100,75 L75,75 L75,100 L50,75 L0,75 Z",
    },
    {
      shape: "polygon4",
      clipPath: "M10,25 L35,25 L35,0 L65,0 L65,25 L90,25 L90,50 L65,50 L65,100 L35,100 L35,50 L10,50 Z",
    },
    {
      shape: "polygon5",
      clipPath: "M50,0 L61,35 L98,35 L68,57 L79,91 L50,70 L21,91 L32,57 L2,35 L39,35 Z",
    },
    {
      shape: "polygon6",
      clipPath: "M75,0 L100,50 L75,100 L0,100 L25,50 L0,0 Z",
    },
    {
      shape: "polygon7",
      clipPath: "M100,0 L75,50 L100,100 L25,100 L0,50 L25,0 Z",
    },
    {
      shape: "polygon8",
      clipPath: "M0,0 L75,0 L100,50 L75,100 L0,100 Z",
    },
    {
      shape: "polygon9",
      clipPath: "M25,0 L100,0 L100,100 L25,100 L0,50 Z",
    },
    {
      shape: "polygon10",
      clipPath: "M0,20 L60,20 L60,0 L100,50 L60,100 L60,80 L0,80 Z",
    },
    {
      shape: "polygon11",
      clipPath: "M40,0 L40,20 L100,20 L100,80 L40,80 L40,100 L0,50 Z",
    },
    {
      shape: "polygon12",
      clipPath: "M0,15 L15,15 L15,0 L85,0 L85,15 L100,15 L100,85 L85,85 L85,100 L15,100 L15,85 L0,85 Z",
    },
    {
      shape: "polygon13",
      clipPath: "M20,0 L80,0 L100,20 L100,80 L80,100 L20,100 L0,80 L0,20 Z",
    },
    {
      shape: "polygon14",
      clipPath: "M50,0 L80,10 L100,35 L100,70 L80,90 L50,100 L20,90 L0,70 L0,35 L20,10 Z",
    },
    {
      shape: "polygon15",
      clipPath: "M20,0 L80,0 L100,100 L0,100 Z",
    },
    {
      shape: "polygon16",
      clipPath: "M25,0 L100,0 L75,100 L0,100 Z",
    },
    {
      shape: "polygon17",
      clipPath: "M50,0 L100,50 L50,100 L0,50 Z",
    },
    {
      shape: "polygon18",
      clipPath: "M50,0 L100,38 L82,100 L18,100 L0,38 Z",
    },
    {
      shape: "polygon19",
      clipPath: "M25,0 L75,0 L100,50 L75,100 L25,100 L0,50 Z",
    },
    {
      shape: "polygon20",
      clipPath: "M50,0 L90,20 L100,60 L75,100 L25,100 L0,60 L10,20 Z",
    },
  ];
  