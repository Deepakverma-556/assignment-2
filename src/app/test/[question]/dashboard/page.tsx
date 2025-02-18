"use client";
import Hero from "@/components/Hero";
import ToDo from "@/components/ToDo";
import { useParams, useRouter } from "next/navigation";

const Dashboard = () => {
  const params = useParams();
  const { question } = params;
  const router = useRouter();
  const navigateToPage = (question: string) => {
    router.push(`/test/${question}/dashboard`);
  };

  return (
    <div className="flex flex-col items-center gap-5 pt-5 justify-center overflow-hidden">
      <div className="flex gap-5">
        <button
          className="border border-black px-3 rounded-3xl"
          onClick={() => navigateToPage("question-one")}
        >
          question one
        </button>
        <button
          className="border border-black px-3 rounded-3xl"
          onClick={() => navigateToPage("question-two")}
        >
          question two
        </button>
      </div>
      {question === "question-one" && <Hero />}
      {question === "question-two" && <ToDo />}
    </div>
  );
};

export default Dashboard;
