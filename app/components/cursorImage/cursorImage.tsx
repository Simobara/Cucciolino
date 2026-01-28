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
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const targetRef = useRef({ x: 0, y: 0 });
  const [maskInset, setMaskInset] = useState<MaskInset>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!visible) setVisible(true);
      targetRef.current = { x: e.clientX + offsetX, y: e.clientY + offsetY };
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [visible, offsetX, offsetY]);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      setPos((current) => {
        const t = targetRef.current;
        const ease = 0.14;

        const nextX = current.x + (t.x - current.x) * ease;
        const nextY = current.y + (t.y - current.y) * ease;

        if (Number.isFinite(nextX) && Number.isFinite(nextY)) {
          const followerRect = {
            left: nextX - size / 2,
            top: nextY - size / 2,
            right: nextX + size / 2,
            bottom: nextY + size / 2,
          };

          const elements = document.elementsFromPoint(nextX, nextY);

          const targetImg = elements.find((el) => {
            const isFollower =
              (el as HTMLElement).dataset?.cursorFollower === "true";
            return el.tagName === "IMG" && !isFollower;
          }) as HTMLElement | undefined;

          if (targetImg) {
            const imgRect = targetImg.getBoundingClientRect();

            const interLeft = Math.max(followerRect.left, imgRect.left);
            const interTop = Math.max(followerRect.top, imgRect.top);
            const interRight = Math.min(followerRect.right, imgRect.right);
            const interBottom = Math.min(followerRect.bottom, imgRect.bottom);

            if (interRight > interLeft && interBottom > interTop) {
              setMaskInset({
                top: interTop - followerRect.top,
                left: interLeft - followerRect.left,
                bottom: followerRect.bottom - interBottom,
                right: followerRect.right - interRight,
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

  const clipPath =
    maskInset && maskInset.top >= 0
      ? `inset(${maskInset.top}px ${maskInset.right}px ${maskInset.bottom}px ${maskInset.left}px)`
      : "inset(100% 100% 100% 100%)";

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
      }}
    >
      {/* COLOR */}
      <Image
        src={src}
        alt="cursor trailing color"
        width={size}
        height={size}
        data-cursor-follower="true"
        className="pointer-events-none select-none"
        style={{ width: size, height: size }} // ✅ evita warning
      />

      {/* GRAY OVERLAY */}
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
          width: size, // ✅ evita warning
          height: size, // ✅ evita warning
          filter: "grayscale(1)",
          clipPath,
          transition: "clip-path 0.14s ease-out",
        }}
      />
    </div>
  );
}
