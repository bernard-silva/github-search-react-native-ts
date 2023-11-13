import styled from "styled-components/native";

export const Root = styled.View`
  flex: 1;
  padding: 80px 20px 20px 20px;
  background-color: #6e4bba;
`;

export const RepoRoot = styled.View`
  margin-top: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RepoList = styled.FlatList.attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
`;

export const Loading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
