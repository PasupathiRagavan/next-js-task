import Head from "next/head";
import CustomText from '../components/base/Text'

const Dashboard = () => {
  return (
      <section>
        {/*  <!-- Page Heading --> */}
        <div>
          <CustomText as="h1" className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Dashboard</CustomText>
          <CustomText as="p" className="mt-2 text-lg text-gray-800 dark:text-gray-400">Dashboard content goes here.</CustomText>
        </div>
      	{/*  <!-- End Page Heading --> */}
      </section>
  );
};

export default Dashboard;
