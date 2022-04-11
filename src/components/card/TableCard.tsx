import React, { useContext } from 'react'

import { GlobalContext } from '../Flashcards'
import { TypeCard } from '../../data/interface'
import { BackSide } from './BackSide'
import { FrontSide } from './FrontSide'

export const TableCard = ({
  data,
}: {
  data: TypeCard | string,
}) => {
  const { reveal } = useContext(GlobalContext)

  if (typeof data === 'string') {
    return (<div>
      {data}
    </div>)
  }

  return (
    <>
      {reveal
        ? <BackSide data={data} />
        : <FrontSide data={data} />
      }
    </>
  )
}
