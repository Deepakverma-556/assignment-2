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
    <div className="flex flex-col pt-5 bg-black">
      <div className="flex gap-5 mx-auto">
        <button
          className="border border-white px-3 text-white rounded-3xl"
          onClick={() => navigateToPage("question-one")}
        >
          question one
        </button>
        <button
          className="border border-white px-3 text-white rounded-3xl"
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
