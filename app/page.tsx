"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push("/home")

  },[])
  return (
    <main className="flex min-h-screen flex-col items-center px-4">
      
      
    </main>
  );
}
