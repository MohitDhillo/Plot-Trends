import Chart from "@/components/client/Chart/Chart";
import Sidebar from "@/components/client/Sidebar/main";
export default function Main() {
  return (
    <div className="flex">
      <Sidebar />
      <Chart />
    </div>
  );
}
