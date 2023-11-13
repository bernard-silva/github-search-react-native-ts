import styled from "styled-components/native";

export const Root = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: max-content;
`;

export const ProfileRoot = styled.View`
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

export const ProfileIconGroup = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const ProfileIcon = styled.View`
  gap: 4px;
  flex-direction: row;
  align-items: center;
`;

export const Detail = styled.View`
  flex: 1;
  gap: 2px;
  padding-top: 5px;
`;

export const Photo = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 9999px;
  object-fit: cover;
`;
