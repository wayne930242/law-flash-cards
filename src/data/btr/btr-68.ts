import { TypeData, TypeFlashCard } from '../interface'

const id = 'btr-68'

const name = '技規 #68'

const head: TypeData[][] = [
]

const data: TypeData[][] = [
  ['廣告牌(塔)、裝飾物(塔)', {front: '[]m 以上', back: 3}, {front: '[]', back: '不燃材料'}],
  ['^', {front: '[]', back: '屋頂上'}, '^'],
]

export const Flashcard: TypeFlashCard = {
  id,
  name,
  head,
  data,
}
