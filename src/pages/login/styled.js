import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 25px;
    font-size: 14px;
    border: 1px solid #ddd;
    padding: 0 10px;
    border-radius: 5px;
    margin-bottom: 8px;
    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }
`;
