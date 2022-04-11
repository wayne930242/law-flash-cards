import { TypeData, TypeFlashCard } from './interface'

const id = '71-73'

const name = '計規 #71-73 表格'

const head: string[][] = [
  ['', '<', '<', '3hr', '2hr', '1hr'],
]
const data: TypeData[][] = [

  ['柱', '短邊寬', '<', { front: '[] cm', back: 40 }, { front: '[] cm', back: 25 }, ''],
  ['^', '鋼筋混凝土造或鋼骨鋼筋混凝土造', '<', { front: '[]', back: true }, { front: '[]', back: true }, { front: '[]', back: true }],
  ['^', '鋼骨混凝土造', '<', { front: '[]', back: 6 }, { front: '[]', back: 5 }, { front: '[]', back: true }],
  ['^', '鋼骨', '鐵絲網水泥粉刷', { front: '[]', back: 9 }, '', { front: '[]', back: 4 }],
  ['^', '^', '輕骨材', { front: '[]', back: 8 }, '^', { front: '[]', back: 3 }],
  ['^', '^', '磚、石或空心磚', { front: '[]', back: 9 }, '^', { front: '[]', back: 5 }],
  ['^', '^', '輕骨材', { front: '[]', back: 8 }, '^', { front: '[]', back: false }],

  ['梁', '鋼筋混凝土造或鋼骨鋼筋混凝土造', '<', { front: '[]', back: true }, { front: '[]', back: true }, { front: '[]', back: true }],
  ['^', '鋼骨混凝土造', '<', { front: '[]', back: false }, { front: '[]', back: 5 }, { front: '[]', back: true }],
  ['^', '鋼骨', '鐵絲網水泥粉刷', { front: '[]', back: 8 }, { front: '[]', back: 6 }, { front: '[]', back: 4 }],
  ['^', '^', '輕骨材', { front: '[]', back: 7 }, { front: '[]', back: 5 }, { front: '[]', back: 3 }],
  ['^', '^', '磚、石或空心磚', { front: '[]', back: 9 }, { front: '[]', back: 7 }, { front: '[]', back: 5 }],
  ['^', '^', '輕骨材', { front: '[]', back: 8 }, { front: '[]', back: 6 }, { front: '[]', back: 4 }],
  ['^', '^', '', '<', '<', { front: '淨高[]m', back: 4 }],

  ['牆', '鋼筋混凝土造或鋼骨鋼筋混凝土造（厚度）', '<', '', { front: '[]', back: 10 }, { front: '[]', back: 7 }],
  ['^', '鋼骨混凝土造', '<', '^', { front: '[]', back: 3 }, { front: '[]', back: 7 }],
  ['^', '鋼骨', '鐵絲網水泥粉刷', '^', { front: '[]', back: 4 }, { front: '[]', back: 3 }],
  ['^', '^', '磚、石或空心磚', '^', { front: '[]', back: 5 }, { front: '[]', back: 4 }],
  ['^', '木絲水泥板+兩面水泥砂漿', '<', '^', { front: '[]', back: '1/8' }, ''],
  ['^', '輕質泡沫混凝土板', '<', '^', { front: '[]', back: 7.5 }, '^'],
  ['^', '鋼筋混凝土版＋泡沫混凝土', '<', '^', { front: '[]', back: '5/12' }, '^'],

  ['樓地板', '鋼筋混凝土造或鋼骨鋼筋混凝土造（厚度）', '<', '', { front: '[]', back: 10 }, { front: '[]', back: 7 }],
  ['^', '鋼骨', '鐵絲網水泥粉刷或混凝土', '', { front: '[]', back: 5 }, { front: '[]', back: 4 }],
]

export const Flashcard: TypeFlashCard = {
  id,
  name,
  head,
  data,
}
