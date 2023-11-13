import styled from "styled-components/native";

export const Root = styled.View`
  flex: 1;
  padding: 80px 20px 20px 20px;
  background: #6e4bba;
`;

export const SearchRoot = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: "#6e4bba",
})`
  flex: 1;
  height: 50px;
  border-radius: 5px;
  padding: 0px 10px;
  background: rgba(255, 255, 255, 0.7);
  color: #6e4bba;
  font-size: 16px;
  border: 1px solid transparent;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background-color: #61cfbc;
  align-items: center;
  justify-content: center;
`;

export const CardRoot = styled.View`
  flex: 1;
  padding-top: 10px;
`;

export const HistoricRoot = styled.View`
  flex: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const HistoricList = styled.FlatList.attrs({
  contentContainerStyle: {},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 5px;
`;
