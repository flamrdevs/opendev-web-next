import type { Metadata } from "next";

import { Button } from "@/components/ui.ts";

export const metadata: Metadata = {
  title: "button",
  description: "button",
};

export default function ButtonPage() {
  return (
    <main className="flex items-center justify-center w-dvw h-dvh overflow-hidden">
      <Button>button</Button>
    </main>
  );
}
