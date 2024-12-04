import AppDownload from "../components/AppDownload";
import LandingSection_01 from "../components/LandingSection_01";
import LandingSection_02 from "../components/LandingSection_02";
import LandingSection_03 from "../components/LandingSection_03";
import LandingSection_04 from "../components/LandingSection_04";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <LandingSection_01 />

      <LandingSection_02 />

      <LandingSection_03 />

      <LandingSection_04 />

      <AppDownload />
    </div>
  );
};

export default Home;
