import { getItemFromLocalStorage } from '../../services/local-storage';
import { useEffect, useState } from 'react';
import { User } from '../../interfaces/users.interface';
import * as UsersAPI from '../../services/users/api';
import Layout from '../../components/Layout';
import Table from '../../components/table/Table';

function Users() {
  const initialPagination = 4;
  const paginationFromLocalStorage =
    getItemFromLocalStorage('users-pagination');

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
      <div className="mt-10">
        <Table
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
      </div>
    </Layout>
  );
}

export default Users;
