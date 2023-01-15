import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HomeItem from '../components/home/HomeItem';
import Layout from '../components/Layout';

function Home() {
  const { t } = useTranslation('common');

  useEffect(() => {
    document.title = `${t('dev_team')} - ${t('home')}`;
  }, []);

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row mt-10">
        <HomeItem modelName="users" />
        <HomeItem modelName="levels" />
      </div>
    </Layout>
  );
}

export default Home;
