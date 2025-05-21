import ModuleCard from "../components/dashboard/ModuleCard";
import UserProfileCard from "../components/dashboard/UserProfileCard";

const Home = () => {
  return (
    <div className="fade-in">
      
      <UserProfileCard />

      <ModuleCard />

    </div>
  );
};

export default Home;
