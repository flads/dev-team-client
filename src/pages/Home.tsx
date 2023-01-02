import HomeItem from '../components/home/HomeItem';
import Layout from '../components/Layout';

function Uploads() {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row mt-10">
        <HomeItem title="Usuários" />
        <HomeItem title="Níveis" />
      </div>
    </Layout>
  );
}

export default Uploads;
