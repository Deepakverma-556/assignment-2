"use client";
import QuestionOne from "@/components/QuestionOne";
import QuestionTwo from "@/components/QuestionTwo";
import { useParams, useRouter } from "next/navigation";

const Dashboard = () => {
  const params = useParams();
  const { question } = params;
  const router = useRouter();
  const navigateToPage = (question: string) => {
    router.push(`/test/${question}/dashboard`);
  };

  return (
    <div className="flex items-center gap-5 justify-center py-10">
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
      {question === "question-one" && <QuestionOne />}
      {question === "question-two" && <QuestionTwo />}
    </div>
  );
};

export default Dashboard;
