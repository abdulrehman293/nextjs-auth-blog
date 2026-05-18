import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession();

  // Extra safety check
  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Secure Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome back, <span className="font-semibold text-black">{session?.user?.email}</span>
        </p>
        <LogoutButton />
      </div>
    </main>
  );
}
