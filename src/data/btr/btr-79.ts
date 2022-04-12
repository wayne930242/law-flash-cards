import { TypeData, TypeFlashCard } from '../interface'

const id = 'btr-79'

const name = '技規 #79'

const head: TypeData[][] = [
  ['', { front: '總FA每[]m²', back: 1500 }, { front: '有自動滅火--[]m²', back: 3000 }]
]

const data: TypeData[][] = [
  [{ front: '依[] ([])', back: '依面積 (1hr防火 1hr阻熱)' }, '交接處 牆', { front: '突出[]公分', back: 50 }, { front: '長度[]公分', back: 90 }],
  ['^', '^', { front: '[]', back: '帷幕牆同' }, '<'],
  [{ front: '依[] ([])', back: '依用途 (1hr防火 1hr阻熱)' }, { front: 'X[]', back: '觀眾席' }, { front: '[]', back: '集會表演A1' }, '<'],
  ['^', '^', { front: '[]', back: '文教設施D2' }, '<'],
  ['^', { front: 'X[]', back: '工廠生產線' }, '<', '<'],
  ['^', { front: 'X[]', back: '教室' }, { front: '[]', back: '國小校舍D3' }, '<'],
  ['^', '^', { front: '[]', back: '校舍D4' }, '<'],
  ['^', { front: 'X[]', back: '空間太寬' }, { front: '[]', back: '體育館' }, '<'],
  ['^', '^', { front: '[]', back: '零售市場' }, '<'],
  ['^', '^', { front: '[]', back: '停車空間' }, '<'],
  [{ front: '[] ([])', back: '豎道 (1hr防火)' }, '昇降機道', { front: '[]', back: '遮煙' }, '<'],
  ['^', '^', { front: '[]', back: '併昇降機間' }, { front: '[]', back: '出入口遮煙自動關閉' }],
  ['^', '挑空', { front: 'X[]', back: '避難層直上' }, { front: '且[]', back: '天花 耐燃一級' }],
  ['^', '^', { front: '[]', back: '直下' }, { front: '[]', back: '牆' }],
  ['^', '^', { front: 'X[]', back: '連跨三層內' }, { front: '且 FA[]m²內', back: 1500 }],
  ['^', '管道間', { front: '[]', back: '維修門 1hr 防火' }, { front: '+[]', back: '遮煙' }],
  ['^', { front: '[]', back: '安全梯樓梯間' }, '<', '<'],
  ['樓層交接', '交接處 牆', { front: '突出[]公分', back: 50 }, { front: '長度[]公分', back: 90 }],
  ['^', '^', { front: '[]', back: '帷幕牆同' }, '<'],
  [{ front: '[] ([])', back: '高層 11F 以上 (1hr防火 1hr阻熱)' }, { front: '面積[]m²', back: 100 }, { front: 'FA每[]m²', back: 100 }, { front: '[]', back: 200 }],
  ['^', '^', { front: '住宅：[]m²', back: 200 }, { front: '[]', back: 400 }],
  ['^', { front: '[]m以上，耐燃[]級', back: '1.2m 以上，耐燃一級' }, { front: '住宅：[]m²', back: 200 }, { front: '[]', back: 400 }],
  ['^', '^', { front: '住宅：[]m²', back: 400 }, { front: '[]', back: 800 }],
  ['^', { front: '耐燃[]', back: '全耐燃一級' }, { front: '住宅：[]m²', back: 500 }, { front: '[]', back: 1000 }],
]

export const Flashcard: TypeFlashCard = {
  id,
  name,
  head,
  data,
}
