import { TypeData, TypeFlashCard } from '../interface'

const id = 'btr-76'

const name = '技規 #76 防火門窗'

const head: TypeData[][] = [
]

const data: TypeData[][] = [
  ['防火門', '[75 x 180]', '周邊[15]cm牆壁不燃材料', '', '<'],
  ['^', '^', '[防火捲門附設]', '^', '^'],
  ['^', '^', '開啟方向[避難方向]', 'X[連接走廊]', '[住宅]'],
  ['^', '^', '^', '^', '[宿舍寢室]'],
  ['^', '^', '^', '^', '[旅館客房]'],
  ['^', '^', '^', '^', '[醫院病房]'],
]

export const Flashcard: TypeFlashCard = {
  id,
  name,
  head,
  data,
}
