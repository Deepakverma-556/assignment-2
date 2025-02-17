import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();
    const params = useParams()
  const { question } = params

  return (
    <div>
      <h1>Dashboard for {question}</h1>
    </div>
  );
};

export default Dashboard;
