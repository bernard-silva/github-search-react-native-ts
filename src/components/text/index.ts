import styled from "styled-components/native";

export const Text = styled.Text`
  color: #fff;
`;

export const TextSmallNormal = styled(Text)`
  font-size: 12px;
`;

export const TextMiddleNormal = styled(Text)`
  font-size: 16px;
`;

export const TextLargeNormal = styled(Text)`
  font-size: 20px;
`;

export const TextSmallBold = styled(TextSmallNormal)`
  font-weight: bold;
`;

export const TextMiddleBold = styled(TextMiddleNormal)`
  font-weight: bold;
`;

export const TextLargeBold = styled(TextLargeNormal)`
  font-weight: bold;
`;
