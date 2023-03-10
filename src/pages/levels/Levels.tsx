import { getItemFromLocalStorage } from '../../services/local-storage';
import { Level } from '../../interfaces/levels.interface';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as LevelsAPI from '../../services/levels/api';
import AddIcon from '../../components/icons/Add';
import CreateLevel from '../../modals/levels/CreateLevel';
import ErrorToast from '../../components/forms/ErrorToast copy';
import Layout from '../../components/Layout';
import SuccessToast from '../../components/forms/SuccessToast';
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
  const [showCreateLevelModal, setShowCreateLevelModal] =
    useState<boolean>(false);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [showErrorToast, setShowErrorToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const columnNames = ['id', 'name', 'developers_count'];

  useEffect(() => {
    document.title = `${t('dev_team')} - ${t('levels.plural_form')}`;

    getLevels();
  }, [take, skip, search]);

  const getLevels = async () => {
    const config = {
      params: {
        sort: 'id desc',
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
      <SuccessToast
        message={toastMessage}
        show={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
      />
      <ErrorToast
        message={toastMessage}
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
      />
      {showCreateLevelModal && (
        <CreateLevel
          onSuccess={(message: string) => {
            setToastMessage(message);
            setShowSuccessToast(true);
            getLevels();
          }}
          onError={(message: string) => {
            setToastMessage(message);
            setShowErrorToast(true);
          }}
          closeModal={() => setShowCreateLevelModal(false)}
        />
      )}
      <div className="mt-4 sm:mt-10 w-full flex justify-between items-center text-center">
        <Title>{t('levels.plural_form')}</Title>
        <AddIcon onClick={() => setShowCreateLevelModal(true)} />
      </div>
      <Table
        styles="mt-6 sm:mt-10"
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
