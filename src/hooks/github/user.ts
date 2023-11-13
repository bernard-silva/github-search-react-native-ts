import { useQuery } from "@tanstack/react-query";
import { KEYS } from "../keys";
import { getUser } from "../../services/api";
import { User } from "../../models/user";
import { AxiosError } from "axios";

async function fetcher(userName: string) {
  const user = await getUser(userName);
  return user;
}

export interface Props {
  userName: string;
  onSuccess: (data: User) => void;
  onError: (error: AxiosError | Error) => void;
}

export function useUser({ userName, onSuccess, onError }: Props) {
  return useQuery({
    queryFn: () => fetcher(userName),
    queryKey: [KEYS["USER-DETAIL"]],
    enabled: userName !== "",
    onSuccess: (data: User) => onSuccess(data),
    onError,
  });
}
