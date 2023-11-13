import { Card } from "../../../components/card";
import { NavigationProp } from "../../../models/navigation";
import { User } from "../../../models/user";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import * as S from "./styles";
import {
  TextLargeBold,
  TextMiddleNormal,
  TextSmallNormal,
} from "../../../components/text";
import { FontAwesome5 } from "@expo/vector-icons";
import { Compact } from "../../../utils/compact";

type Props = {
  data: User;
};

export function UserCard({ data }: Props) {
  const navigation = useNavigation<NavigationProp>();
  const followers = Compact(data.followers);
  const public_repos = Compact(data.public_repos);
  return (
    <Pressable
      onPress={() => navigation.navigate("Repos", { userName: data.login })}
    >
      <Card>
        <S.Root>
          <S.ProfileRoot>
            <S.Photo source={{ uri: data.avatar_url }} />
            <S.ProfileIconGroup>
              <S.ProfileIcon>
                <FontAwesome5 name="users" size={12} color="#FFF" />
                <TextSmallNormal>{followers}</TextSmallNormal>
              </S.ProfileIcon>
              <S.ProfileIcon>
                <FontAwesome5 name="book" size={12} color="#FFF" />
                <TextSmallNormal>{public_repos}</TextSmallNormal>
              </S.ProfileIcon>
            </S.ProfileIconGroup>
          </S.ProfileRoot>
          <S.Detail>
            <TextLargeBold>{data.name}</TextLargeBold>
            <TextMiddleNormal>{data.login}</TextMiddleNormal>
            <TextMiddleNormal>{data.location}</TextMiddleNormal>
          </S.Detail>
        </S.Root>
      </Card>
    </Pressable>
  );
}
