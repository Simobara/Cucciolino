"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CursorElasticImageProps = {
  src?: string;
  size?: number;
  offsetX?: number;
  offsetY?: number;
};

type MaskInset = {
  top: number;
  right: number;
  bottom: number;
  left: number;
} | null;

export default function CursorElasticImage({
  src = "/iconss/pizza.png",
  size = 120,
  offsetX = 20,
  offsetY = 20,
}: CursorElasticImageProps) {
  const [visible, setVisible] = useState(false);

  // posizione dell'immagine cursore (quella che vedi)
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  // target che segue il mouse
  const targetRef = useRef({ x: 0, y: 0 });

  // porzione della copia in GRIGIO che deve essere visibile
  const [maskInset, setMaskInset] = useState<MaskInset>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);

      // il cursore elastico insegue questa posizione
      targetRef.current = {
        x: e.clientX + offsetX,
        y: e.clientY + offsetY,
      };
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible, offsetX, offsetY]);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      setPos((current) => {
        const t = targetRef.current;
        const ease = 0.14; // 0.1–0.2 = elastico morbido

        const nextX = current.x + (t.x - current.x) * ease;
        const nextY = current.y + (t.y - current.y) * ease;

        // calcoliamo qui l'overlap con le immagini della pagina
        if (
          typeof document !== "undefined" &&
          Number.isFinite(nextX) &&
          Number.isFinite(nextY)
        ) {
          const followerRect = {
            left: nextX - size / 2,
            top: nextY - size / 2,
            right: nextX + size / 2,
            bottom: nextY + size / 2,
          };

          // prendiamo tutti gli elementi sotto il centro del cursore
          const elements = document.elementsFromPoint(nextX, nextY);

          // cerchiamo la prima IMG vera della pagina che NON è il cursore
          const targetImg = elements.find((el) => {
            const tag = el.tagName;
            const isFollower =
              (el as HTMLElement).dataset?.cursorFollower === "true";
            return tag === "IMG" && !isFollower;
          }) as HTMLElement | undefined;

          if (targetImg) {
            const imgRect = targetImg.getBoundingClientRect();

            const interLeft = Math.max(followerRect.left, imgRect.left);
            const interTop = Math.max(followerRect.top, imgRect.top);
            const interRight = Math.min(followerRect.right, imgRect.right);
            const interBottom = Math.min(followerRect.bottom, imgRect.bottom);

            if (interRight > interLeft && interBottom > interTop) {
              // abbiamo una vera intersezione: calcoliamo gli inset
              const topInset = interTop - followerRect.top;
              const leftInset = interLeft - followerRect.left;
              const bottomInset = followerRect.bottom - interBottom;
              const rightInset = followerRect.right - interRight;

              setMaskInset({
                top: topInset,
                right: rightInset,
                bottom: bottomInset,
                left: leftInset,
              });
            } else {
              setMaskInset(null);
            }
          } else {
            setMaskInset(null);
          }
        }

        return { x: nextX, y: nextY };
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [size]);

  if (!visible) return null;

  // clip-path per la parte grigia:
  const clipPath =
    maskInset && maskInset.top >= 0
      ? `inset(${maskInset.top}px ${maskInset.right}px ${maskInset.bottom}px ${maskInset.left}px)`
      : "inset(100% 100% 100% 100%)"; // nascondi tutto se non c'è overlap

  return (
    <div
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 99999,
        willChange: "transform",
      }}
    >
      {/* Immagine a COLORI (base) */}
      <Image
        src={src}
        alt="cursor trailing color"
        width={size}
        height={size}
        data-cursor-follower="true"
        className="pointer-events-none select-none"
      />

      {/* Copia GRIGIA sopra, ritagliata solo dove tocca l'immagine della pagina */}
      <Image
        src={src}
        alt="cursor trailing grayscale overlap"
        width={size}
        height={size}
        data-cursor-follower="true"
        className="pointer-events-none select-none"
        style={{
          position: "absolute",
          inset: 0,
          filter: "grayscale(1)",
          clipPath,
          transition: "clip-path 0.14s ease-out",
        }}
      />
    </div>
  );
}
