import styled from "@emotion/styled";

export const Parent = styled.div`
  display: flex;
  background: black;
  color: white;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;
`;

export const Items = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Item = styled.span``;
