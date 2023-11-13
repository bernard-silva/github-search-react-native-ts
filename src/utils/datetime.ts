export function Datetime(value: string) {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
  }).format(new Date(value));
}
