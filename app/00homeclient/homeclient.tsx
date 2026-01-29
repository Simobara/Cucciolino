"use client";
import { useState } from "react";

export default function HomeClient() {
  const [ready, setReady] = useState(false);
  const [hasCheckedSplash, setHasCheckedSplash] = useState(false);
  const [showSplash, setShowSplash] = useState(false);

  const [, setLogoOpacity] = useState(0.05);
  const [, setShowTitle] = useState(false);
  const [, setVisibleWords] = useState(0);

  // ... INCOLLA QUI tutti i tuoi useEffect e handleSplashFinish

  // ... INCOLLA QUI il tuo return (quello enorme)
}
