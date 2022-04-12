import { TypeData, TypeFlashCard } from '../interface'

const id = 'btr-76'

const name = '技規 #76'

const head: TypeData[][] = [
]

const data: TypeData[][] = [
  ['防火門', { front: '[]', back: '75 x 180' }, { front: '周邊 [] cm牆壁不燃材料', back: 15 }, '', '<'],
  ['^', '^', { front: '[]', back: '防火捲門附設' }, '^', '^'],
  ['^', '^', { front: '開啟方向[]', back: '避難方向' }, { front: '除[]外', back: '連接走廊' }, { front: '[]', back: '住宅' }],
  ['^', '^', '^', '^', { front: '[]', back: '宿舍寢室' }],
  ['^', '^', '^', '^', { front: '[]', back: '旅館客房' }],
  ['^', '^', '^', '^', { front: '[]', back: '醫院病房' }],
]

export const Flashcard: TypeFlashCard = {
  id,
  name,
  head,
  data,
}
