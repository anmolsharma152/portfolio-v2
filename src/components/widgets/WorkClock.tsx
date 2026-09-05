'use client';

import { useEffect, useState } from 'react';

function getIstClockLabel() {
  return new Intl.DateTimeFormat('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata',
  }).format(new Date());
}

export default function WorkClock() {
  const [clockLabel, setClockLabel] = useState<string>('');

  useEffect(() => {
    setClockLabel(getIstClockLabel());
    const intervalId = window.setInterval(() => {
      setClockLabel(getIstClockLabel());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <span suppressHydrationWarning className="font-mono">
      {clockLabel || '00:00:00 AM'}
    </span>
  );
}
