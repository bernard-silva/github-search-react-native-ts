import axios, { AxiosError } from "axios";
import React, { useState, createRef } from "react";
import * as S from "./styles";
import { useUser } from "../../hooks/github/user";
import {
  Text,
  TextMiddleBold,
  TextMiddleNormal,
  TextSmallNormal,
} from "../../components/text";
import { UserCard } from "./user-card";
import { TextInput } from "react-native-gesture-handler";
import { useParams } from "../../hooks/params";
import { User } from "../../models/user";
import { ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useHistoricUser } from "../../hooks/storage/historic";

export function Home() {
  const searchInputRef = createRef<TextInput>();
  const [userName, setUserName] = useState("");
  const { data, append } = useParams<{ userName: string }>({ userName: "" });
  const { users, add } = useHistoricUser();
  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
  } = useUser({
    userName: data.userName,
    onError: (error: AxiosError | Error): void => {
      console.log(error);
    },
    onSuccess: (data: User) => {
      add(data);
      if (searchInputRef.current) {
        searchInputRef.current.clear();
        return;
      }
    },
  });

  return (
    <S.Root>
      <S.SearchRoot>
        <S.SearchInput
          placeholder="Digite o nome do usuário..."
          ref={searchInputRef}
          value={userName}
          onChangeText={(text: string) => setUserName(text)}
        />
        <S.SearchButton
          onPress={() => append("userName", userName)}
          activeOpacity={0.5}
        >
          {userName !== "" && isLoading && (
            <ActivityIndicator size="small" color="#090E16" />
          )}
          {(!isLoading || userName === "") && (
            <FontAwesome5 name="search" size={20} color="#090E16" />
          )}
        </S.SearchButton>
      </S.SearchRoot>
      <S.CardRoot>
        {(isError || (isSuccess && !user)) && (
          <TextMiddleNormal>Nenhum resultado encontrado...</TextMiddleNormal>
        )}
        {isSuccess && <UserCard data={user} />}
        <S.HistoricRoot>
          <TextMiddleBold>Histórico de Pesquisa</TextMiddleBold>
          <S.HistoricList
            keyboardShouldPersistTaps="handled"
            data={users}
            keyExtractor={(item: User) => String(item.id)}
            renderItem={({ item }: { item: User }) => <UserCard data={item} />}
          />
        </S.HistoricRoot>
      </S.CardRoot>
    </S.Root>
  );
}
