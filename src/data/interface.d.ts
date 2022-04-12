export type TypeData =
  string | boolean

export type TypeCard = {
  front: string,
  back: string | boolean,
}

export type TypeFlashCard = {
  id: string,
  name: string,
  data: TypeData[][],
  head: TypeData[][],
}
