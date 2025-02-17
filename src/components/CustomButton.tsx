"use client";
import { useRouter } from "next/navigation";

const CustomButton = () => {
  const router = useRouter();
  const navigateToPage = (question: string) => {
    router.push(`/test/${question}/dashboard`);
  };

  return (
    <div className="flex items-center gap-5">
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
  );
};

export default CustomButton;
