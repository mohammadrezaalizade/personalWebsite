import type { NextPage } from "next";
import HomePage from "../components/home/Home";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <HomePage />
    </MainLayout>
  );
};

export default Home;
