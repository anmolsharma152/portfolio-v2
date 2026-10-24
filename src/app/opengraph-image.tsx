import { ImageResponse } from 'next/og';

export const alt = 'Anmol Sharma';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          backgroundColor: '#000000',
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.10), transparent 45%), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 28px 28px, 28px 28px',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '24px',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: '#34d399',
            }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.7)',
              letterSpacing: '-0.5px',
            }}
          >
            ANMOL SHARMA
          </span>
        </div>
        <h1
          style={{
            fontSize: 60,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '24px',
            letterSpacing: '-1.5px',
          }}
        >
          Anmol Sharma
        </h1>
        <p
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}
        >
          AI/ML & Systems Engineer: execution sandboxes, hybrid retrieval, and async agent runtimes.
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
