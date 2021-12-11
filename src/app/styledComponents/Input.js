import styled from "styled-components";

export const Input = styled.input`
  height: calc(1.5em + 1rem + 2px);
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  width: 100%;
  font-weight: 400;
  color: #495057;
  border: 1px solid #ced4da;
  font-family: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  outline: none;

  &:focus {
    box-shadow: 0 0 5px 2px rgb(45, 186, 230);
  }
`;
