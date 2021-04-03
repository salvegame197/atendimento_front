import styled from 'styled-components';

export const UserContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;
