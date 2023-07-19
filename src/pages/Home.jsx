import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import "../styles/pages/home.css";
import { userData } from "../data/dummyData";
import WidgetLg from "../components/WidgetLg";
import WidgetSm from "../components/WidgetSm";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="UserAnalytics" dataKey="Active User" grid />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
