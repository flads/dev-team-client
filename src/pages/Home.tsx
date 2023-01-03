import { useNavigate } from 'react-router-dom';
import HomeItem from '../components/home/HomeItem';
import Layout from '../components/Layout';

function Uploads() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row mt-10">
        <HomeItem title="Usuários" onClick={() => navigate('/users')} />
        <HomeItem title="Níveis" />
      </div>
    </Layout>
  );
}

export default Uploads;
