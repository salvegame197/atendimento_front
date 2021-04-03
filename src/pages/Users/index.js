import React, { useEffect, useState } from 'react';
import { get } from 'lodash';

import { FaUserCircle, FaUserClock } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import { UserContainer } from './styled';

import axios from '../../services/axios';

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/user/all');
      // eslint-disable-next-line no-console
      console.log(response.data);
      setUsers(response.data);
    }
    getData();
  }, []);

  return (
    <Container>
      <h1>User</h1>
      <UserContainer>
        {users.map((user) => (
          // eslint-disable-next-line no-underscore-dangle
          <div key={String(user._id)}>
            {get(user, 'user.name', false) ? (
              <FaUserCircle size={36} />
            ) : (
              <FaUserClock size={36} />
            )}
            <span>{user.name}</span>
            <span>{user.email}</span>
          </div>
        ))}
      </UserContainer>
    </Container>
  );
}
