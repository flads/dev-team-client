import { getItemFromLocalStorage } from '../../services/local-storage';
import { useEffect, useState } from 'react';
import { User } from '../../interfaces/users.interface';
import { useTranslation } from 'react-i18next';
import * as UsersAPI from '../../services/users/api';
import Layout from '../../components/Layout';
import Table from '../../components/table/Table';
import Title from '../../components/Title';

function Users() {
  const initialPagination = 4;
  const paginationFromLocalStorage =
    getItemFromLocalStorage('users-pagination');

  const { t } = useTranslation('common');

  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
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
    'level_id',
  ];

  useEffect(() => {
    document.title = `${t('dev_team')} - ${t('users.plural_form')}`;

    getUsers();
  }, [take, skip, search]);

  const getUsers = async () => {
    const config = {
      params: {
        sort: 'id asc',
        take,
        skip,
        search,
      },
    };

    const response = await UsersAPI.getAll(config);

    setUsers(response.users);
    setUsersCount(response.count);

    setLoading(false);
  };

  return (
    <Layout loading={loading}>
      <Title>{t('users.plural_form')}</Title>
      <Table
        styles="mt-10"
        columnNames={columnNames}
        pageRows={users}
        modelName="users"
        take={take}
        skip={skip}
        totalRowsCount={usersCount}
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

export default Users;
