import { User } from "../../models/user";
import { Container, Photo, Name, Login, Location } from "./styles";

type Props = {
  data: User;
};

export function UserCard({ data }: Props) {
  return (
    <Container>
      <Photo source={{ uri: data.avatar_url }} />
      <Name>{data.name}</Name>
      <Login>{data.login}</Login>
      <Location>{data.location}</Location>
    </Container>
  );
}
