import { getItemFromLocalStorage } from '../../services/local-storage';
import { Level } from '../../interfaces/levels.interface';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as LevelsAPI from '../../services/levels/api';
import Layout from '../../components/Layout';
import Table from '../../components/table/Table';
import Title from '../../components/Title';

function Levels() {
  const modelName = 'levels';
  const initialPagination = 4;
  const paginationFromLocalStorage = getItemFromLocalStorage(
    `${modelName}-pagination`
  );

  const { t } = useTranslation('common');

  const [loading, setLoading] = useState<boolean>(true);
  const [levels, setLevels] = useState<Level[]>([]);
  const [levelsCount, setLevelsCount] = useState<number>(0);
  const [take, setTake] = useState<number>(
    paginationFromLocalStorage || initialPagination
  );
  const [skip, setSkip] = useState<number>(0);
  const [search, setSearch] = useState<string | null>(null);

  const columnNames = ['id', 'name', 'users_count'];

  useEffect(() => {
    document.title = `${t('dev_team')} - ${t('levels.plural_form')}`;

    getLevels();
  }, [take, skip, search]);

  const getLevels = async () => {
    const config = {
      params: {
        sort: 'id asc',
        take,
        skip,
        search,
      },
    };

    const response = await LevelsAPI.getAll(config);

    setLevels(response.levels);
    setLevelsCount(response.count);

    setLoading(false);
  };

  return (
    <Layout loading={loading}>
      <Title>{t('levels.plural_form')}</Title>
      <Table
        styles="mt-10"
        columnNames={columnNames}
        pageRows={levels}
        modelName={modelName}
        take={take}
        skip={skip}
        totalRowsCount={levelsCount}
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

export default Levels;
