import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 3rem;
  margin-top: 3rem;

  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) &, &-md, &-sm {
    max-width: 720px;
  }
`;
