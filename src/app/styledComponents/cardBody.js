import styled from "styled-components";

export const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
  word-wrap: break-word;
  box-sizing: border-box;
  display: block;
`;

export const CardTitle = styled.div`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.75rem;
  box-sizing: border-box;
  display: block;
  word-wrap: break-word;
`;
