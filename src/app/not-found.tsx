import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "not-found",
  description: "not-found",
};

export default function NotFound() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <h1 className="font-mono font-bold text-xl">404 | not found</h1>
    </main>
  );
}
