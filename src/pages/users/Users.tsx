import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Table from '../../components/table/Table';
import * as UserAPI from '../../services/users/api';
import { User } from '../../interfaces/users.interface';

function Users() {
  const [users, setUsers] = useState<User[]>([]);

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
  }, []);

  const getUsers = async () => {
    const response = await UserAPI.getAll();

    setUsers(response.users);
  };

  return (
    <Layout>
      <div className="mt-10">
        <Table columnNames={columnNames} rows={users} modelName="User" />
      </div>
    </Layout>
  );
}

export default Users;
