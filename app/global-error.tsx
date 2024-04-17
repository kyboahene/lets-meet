"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex-center">
        <div>
          <h2 className="text-3xl text-center">Something went wrong!</h2>
          <button className="text-white" onClick={() => reset()}>
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
