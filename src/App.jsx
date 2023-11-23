import { useState } from 'react'
import './App.css'
import CardContainer from './Component/CardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d'>

 
      <CardContainer type="معكسر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
      <CardContainer type="معكسر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
      <CardContainer type="معكسر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
      <CardContainer type="معكسر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
      <CardContainer type="معكسر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
      <CardContainer type="معكسر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
    </div>
  )
}

export default App
