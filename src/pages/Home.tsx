import HomeItem from '../components/home/HomeItem';
import Layout from '../components/Layout';

function Home() {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row mt-10">
        <HomeItem modelName="users" />
        <HomeItem title="Níveis" />
      </div>
    </Layout>
  );
}

export default Home;
