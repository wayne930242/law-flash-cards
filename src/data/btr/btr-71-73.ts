import { TypeData, TypeFlashCard } from '../interface'

const id = 'btr-71-73'

const name = '技規 #71-73'

const head: TypeData[][] = [
  ['', '<', '<', '3hr', '2hr', '1hr'],
]
const data: TypeData[][] = [

  ['柱', '短邊寬', '<', '[40]cm', '[25] cm', ''],
  ['^', '鋼筋混凝土造或鋼骨鋼筋混凝土造', '<', true, true, true],
  ['^', '鋼骨混凝土造', '<', '[6]', '[5]', true],
  ['^', '鋼骨', '鐵絲網水泥粉刷', '[9]', '', '[4]'],
  ['^', '^', '輕骨材', '[8]', '^', '[3]'],
  ['^', '^', '磚、石或空心磚', '[9]', '^', '[5]'],
  ['^', '^', '輕骨材', '[8]', '^', false],

  ['梁', '鋼筋混凝土造或鋼骨鋼筋混凝土造', '<', true, true, true],
  ['^', '鋼骨混凝土造', '<', false, '[5]', true],
  ['^', '鋼骨', '鐵絲網水泥粉刷', '[8]', '[6]', '[4]'],
  ['^', '^', '輕骨材', '[7]', '[5]', '[3]'],
  ['^', '^', '磚、石或空心磚', '[9]', '[7]', '[5]'],
  ['^', '^', '輕骨材', '[8]', '[6]', '[4]'],
  ['^', '^', '', '<', '<', '淨高[4]m'],

  ['牆', '鋼筋混凝土造或鋼骨鋼筋混凝土造（厚度）', '<', '', '[10]', '[7]'],
  ['^', '鋼骨混凝土造', '<', '^', '[3]', '[7]'],
  ['^', '鋼骨', '鐵絲網水泥粉刷', '', '[4]', '[3]'],
  ['^', '^', '磚、石或空心磚', '^', '[5]', '[4]'],
  ['^', '木絲水泥板+兩面水泥砂漿', '<', '', '[1/8]', ''],
  ['^', '輕質泡沫混凝土板', '<', '^', '[7.5]', '^'],
  ['^', '鋼筋混凝土版＋泡沫混凝土', '<', '^', '[5/12]', '^'],

  ['樓地板', '鋼筋混凝土造或鋼骨鋼筋混凝土造（厚度）', '<', '', '[10]', '[7]'],
  ['^', '鋼骨', '鐵絲網水泥粉刷或混凝土', '', '[5]', '[4]'],
]

export const Flashcard: TypeFlashCard = {
  id,
  name,
  head,
  data,
}
