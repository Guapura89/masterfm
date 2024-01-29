"use client";
import { useAlertContext } from "@/context/AppContext";
import LoginForm from "@/components/LoginForm";
import { Alert } from "@/components/Alert";

// 763dd0f7fc1df732f088620c03c54a7c

export default function Home() {
  const context = useAlertContext();
  return (
    <main className="min-h-screen  relative p-0 sm:p-2 flex items-center bg-gradient-to-b lg:bg-gradient-to-r from-purple-500 to-pink-700">
      <LoginForm />
      <Alert props={context.alert} />
    </main>
  );
}
