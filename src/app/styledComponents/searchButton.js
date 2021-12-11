import styled from "styled-components";

export const SearchBtn = styled.button`
  color: #fff;
  background-color: ${(props) => (props.grey ? "#6c757d" : "gray")};
  font-family: inherit;
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  &:focus {
    box-shadow: 1px 0 1px 3px rgba(128, 128, 128, 0.561);
  }
`;
