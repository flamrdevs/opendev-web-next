import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "opendev-web-next",
  description: "opendev-web-next",
};

export default function Index() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <h1 className="font-mono font-bold text-xl">opendev</h1>
    </main>
  );
}
