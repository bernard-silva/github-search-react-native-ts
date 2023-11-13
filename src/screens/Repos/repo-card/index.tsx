import { Card } from "../../../components/card";
import { NavigationProp } from "../../../models/navigation";
import { User } from "../../../models/user";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Linking } from "react-native";
import * as S from "./styles";
import {
  TextLargeBold,
  TextMiddleNormal,
  TextSmallNormal,
} from "../../../components/text";
import { FontAwesome5 } from "@expo/vector-icons";
import { Compact } from "../../../utils/compact";
import { Repo } from "../../../models/repo";
import { Datetime } from "../../../utils/datetime";

type Props = {
  data: Repo;
};

export function RepoCard({ data }: Props) {
  const createdAt = Datetime(data.created_at);
  const pushedAt = Datetime(data.pushed_at);
  return (
    <Pressable onPress={() => Linking.openURL(data.html_url)}>
      <Card>
        <S.Root>
          <S.Header>
            <TextLargeBold>{data.name}</TextLargeBold>
            <FontAwesome5 name="arrow-right" size={20} color="#FFF" />
          </S.Header>
          <S.Detail>
            <TextMiddleNormal>Data de criação: {createdAt}</TextMiddleNormal>
            <TextMiddleNormal>Linguagem: {data.language}</TextMiddleNormal>
            <TextMiddleNormal>Data de modificação: {pushedAt}</TextMiddleNormal>
          </S.Detail>
        </S.Root>
      </Card>
    </Pressable>
  );
}
