import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showNewstring } from '../../redux/slices/string'


const StringChanger = () => {

    const newString = useSelector((store) => store.stringChanger)
    const dispatch = useDispatch()

  return (
    <div>
      <h1>  {newString || "React What"}  </h1>
      <button onClick={() => dispatch(showNewstring())}>Change String</button>
     
    </div>
  )
}

export default StringChanger
