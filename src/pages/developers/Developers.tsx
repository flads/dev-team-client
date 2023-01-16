import { Developer } from '../../interfaces/developers.interface';
import { getItemFromLocalStorage } from '../../services/local-storage';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as DevelopersAPI from '../../services/developers/api';
import AddIcon from '../../components/icons/Add';
import Layout from '../../components/Layout';
import Table from '../../components/table/Table';
import Title from '../../components/Title';

function Developers() {
  const initialPagination = 4;
  const paginationFromLocalStorage = getItemFromLocalStorage(
    'developers-pagination'
  );

  const { t } = useTranslation('common');

  const [loading, setLoading] = useState<boolean>(true);
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [developersCount, setDevelopersCount] = useState<number>(0);
  const [take, setTake] = useState<number>(
    paginationFromLocalStorage || initialPagination
  );
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string | null>(null);

  const columnNames = [
    'id',
    'name',
    'gender',
    'birthdate',
    'age',
    'hobby',
    'level',
  ];

  useEffect(() => {
    document.title = `${t('dev_team')} - ${t('developers.plural_form')}`;

    getDevelopers();
  }, [take, skip, search]);

  const getDevelopers = async () => {
    const config = {
      params: {
        sort: 'developers.id desc',
        take,
        skip,
        search,
      },
    };

    const response = await DevelopersAPI.getAll(config);

    setDevelopers(response.developers);
    setDevelopersCount(response.count);

    setLoading(false);
  };

  return (
    <Layout loading={loading}>
      <div className="mt-4 sm:mt-10 w-full flex justify-between items-center text-center">
        <Title>{t('developers.plural_form')}</Title>
        <AddIcon />
      </div>
      <Table
        styles="mt-6 sm:mt-10"
        columnNames={columnNames}
        pageRows={developers}
        modelName="developers"
        take={take}
        skip={skip}
        totalRowsCount={developersCount}
        initialPagination={initialPagination}
        goToPage={(page) => setSkip((page - 1) * take)}
        setPagination={(pagination) => {
          setTake(pagination);
          setSkip(0);
        }}
        onSearch={(event) => setSearch(event.target.value)}
      />
    </Layout>
  );
}

export default Developers;
