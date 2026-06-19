"use client";

import heroImage from "@/assets/hero.png";

const ALT =
  "Marko Asaulyuk — illustrated portrait against the San Francisco skyline";

function blockSave(e: React.SyntheticEvent) {
  e.preventDefault();
}

export function HeroPortrait() {
  return (
    <div
      className="absolute inset-0 select-none overflow-hidden bg-background [user-drag:none] [-webkit-user-drag:none]"
      onContextMenu={blockSave}
      onDragStart={blockSave}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={heroImage.src}
        alt={ALT}
        width={heroImage.width}
        height={heroImage.height}
        draggable={false}
        className="h-full w-full object-cover object-center"
        onContextMenu={blockSave}
        onDragStart={blockSave}
      />
      <div
        className="pointer-events-none absolute inset-0 mix-blend-color"
        style={{ backgroundColor: "rgba(150, 90, 30, 0.55)" }}
        aria-hidden="true"
      />
    </div>
  );
}
