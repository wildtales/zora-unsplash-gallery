"use client";
import { Gallery } from "./Gallery";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Gallery />
      </main>
    </QueryClientProvider>
  );
}
