import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface NeuralBackgroundProps {
  className?: string;
  /**
   * Color of the particles. 
   * Defaults to a cyan/indigo mix if not specified.
   */
  color?: string;
  /**
   * The opacity of the trails (0.0 to 1.0).
   * Lower = longer trails. Higher = shorter trails.
   * Default: 0.1
   */
  trailOpacity?: number;
  /**
   * Number of particles. Default: 800
   */
  particleCount?: number;
  /**
   * Speed multiplier. Default: 1
   */
  speed?: number;
}

export default function NeuralBackground({
  className,
  color = "#6366f1", // Default Indigo
  trailOpacity = 0.15,
  particleCount = 600,
  speed = 1,
}: NeuralBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Track when container has valid dimensions
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkDimensions = () => {
      const { clientWidth, clientHeight } = container;
      if (clientWidth > 0 && clientHeight > 0) {
        setIsReady(true);
      }
    };

    // Check immediately
    checkDimensions();

    // Use ResizeObserver to detect when container gets valid dimensions
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setIsReady(true);
        }
      }
    });

    resizeObserver.observe(container);

    // Fallback: check after a short delay (for mobile browsers that may be slow)
    const fallbackTimer = setTimeout(checkDimensions, 100);

    return () => {
      resizeObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    // Only run animation when container is ready with valid dimensions
    if (!isReady) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- CONFIGURATION ---
    let width = container.clientWidth;
    let height = container.clientHeight;
    
    // Safety check: don't initialize with invalid dimensions
    if (width <= 0 || height <= 0) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 }; // Start off-screen
    let isAnimating = true;

    // --- PARTICLE CLASS ---
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      age: number;
      life: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        // Random lifespan to create natural recycling
        this.life = Math.random() * 200 + 100; 
      }

      update() {
        // 1. Flow Field Math (Simplex-ish noise)
        // We calculate an angle based on position to create the "flow"
        const angle = (Math.cos(this.x * 0.005) + Math.sin(this.y * 0.005)) * Math.PI;
        
        // 2. Add force from flow field
        this.vx += Math.cos(angle) * 0.2 * speed;
        this.vy += Math.sin(angle) * 0.2 * speed;

        // 3. Mouse Repulsion/Attraction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150;

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          // Push away
          this.vx -= dx * force * 0.05;
          this.vy -= dy * force * 0.05;
        }

        // 4. Apply Velocity & Friction
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95; // Friction to stop infinite acceleration
        this.vy *= 0.95;

        // 5. Aging
        this.age++;
        if (this.age > this.life) {
          this.reset();
        }

        // 6. Wrap around screen
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = 0;
        this.vy = 0;
        this.age = 0;
        this.life = Math.random() * 200 + 100;
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = color;
        // Fade in and out based on age
        const alpha = 1 - Math.abs((this.age / this.life) - 0.5) * 2;
        context.globalAlpha = alpha;
        context.fillRect(this.x, this.y, 1.5, 1.5); // Tiny dots are faster than arcs
      }
    }

    // --- INITIALIZATION ---
    const init = () => {
      // Get fresh dimensions
      width = container.clientWidth;
      height = container.clientHeight;
      
      // Safety check
      if (width <= 0 || height <= 0) return;

      // Handle High-DPI screens (Retina)
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Clear canvas completely on init to prevent visual artifacts
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, width, height);

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // --- ANIMATION LOOP ---
    const animate = () => {
      if (!isAnimating) return;

      // "Fade" effect: Instead of clearing the canvas, we draw a semi-transparent rect
      // This creates the "Trails" look.
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`; 
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // --- RESIZE HANDLER with ResizeObserver ---
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0 && (newWidth !== width || newHeight !== height)) {
          width = newWidth;
          height = newHeight;
          init();
        }
      }
    });

    resizeObserver.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Handle touch events for mobile
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      }
    };

    const handleTouchEnd = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Start
    init();
    animate();

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      isAnimating = false;
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isReady, color, trailOpacity, particleCount, speed]);

  return (
    <div 
      ref={containerRef} 
      className={cn(
        "relative w-full h-full overflow-hidden",
        // Fallback background while canvas initializes
        !isReady && "bg-[#030014]",
        className
      )}
    >
      <canvas 
        ref={canvasRef} 
        className={cn(
          "block w-full h-full transition-opacity duration-300",
          isReady ? "opacity-100" : "opacity-0"
        )} 
      />
    </div>
  );
}