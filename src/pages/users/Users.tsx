import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/table/Table';
import * as UserAPI from '../../services/users/api';
import { User } from '../../interfaces/users.interface';

function Users() {
  const initialPagination = 4;

  const [users, setUsers] = useState<User[]>([]);
  const [usersCount, setUsersCount] = useState<number>(0);
  const [take, setPagination] = useState<number>(initialPagination);
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

    const response = await UserAPI.getAll(config);

    setUsers(response.users);
    setUsersCount(response.count);
  };

  const goToPage = async (page: number) => {
    setSkip((page - 1) * users.length);
  };

  return (
    <Layout>
      <div className="mt-10">
        <Table
          columnNames={columnNames}
          pageRows={users}
          modelName="users"
          take={take}
          skip={skip}
          totalRowsCount={usersCount}
          initialPagination={initialPagination}
          goToPage={(page) => goToPage(page)}
          setPagination={(pagination) => setPagination(pagination)}
          onSearch={(event) => setSearch(event.target.value)}
        />
      </div>
    </Layout>
  );
}

export default Users;
