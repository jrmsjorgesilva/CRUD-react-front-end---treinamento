// import { useState } from 'react'
import Info from './Info'

const Infos = ({ infos }) => {
    
  return (
    <div className='container'>
        {infos.map((info) => (
            <Info key={info.id} info={ info } />
        ))}
    </div>
  )
}

export default Infos