export type TypeData =
  string | TypeCard

export type TypeCard = {
  front: string,
  back: string | number | boolean,
}

export type TypeFlashCard = {
  id: string,
  name: string,
  data: TypeData[][],
  head: TypeData[][],
}
