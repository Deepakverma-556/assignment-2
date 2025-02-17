import Hero from "@/components/Hero";
import Dashboard from "./test/[question]/dashboard/page";
import ToDo from "@/components/ToDo";

export default function Home() {
  return (
    <>
      <Hero />
      <ToDo/>
      <Dashboard />
    </>
  );
}
