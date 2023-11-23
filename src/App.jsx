import { useState } from 'react'
import './App.css'
import CardContainer from './Component/CardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d'>

    
    <div className='maincont container  '>


        <CardContainer type="معسكر" name=" امن سيبراني" city="الرياض" time="1/9/2023"/>
        <CardContainer type="برنامج" name=" سويفت" city="الرياض" time="1/9/2023"/>
        <CardContainer type="برنامج" name=" حوسبة سحابية" city="الرياض" time="1/9/2023"/>
        <CardContainer type="معسكر" name=" اساسيات Security+" city="عن بعد" time="1/9/2023"/>
        <CardContainer type="معسكر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
        <CardContainer type="برنامج" name="جافا سكربت" city="الرياض" time="1/9/2023"/>

        <CardContainer type="معسكر" name="جافا" city="الرياض" time="1/9/2023"/>
        <CardContainer type="برنامج" name="اختبار الاختراق للمبتدئين " city="الرياض" time="1/9/2023"/>
        <CardContainer type="برنامج" name="تطبيقات إنترنت الاشياء" city="الرياض" time="1/9/2023"/>
        <CardContainer type="معسكر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
        <CardContainer type="معسكر" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
        <CardContainer type="برنامج" name="جافا سكربت" city="الرياض" time="1/9/2023"/>

        <CardContainer type="مغلق" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
        <CardContainer type="مغلق" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
        <CardContainer type="مغلق" name="جافا سكربت" city="الرياض" time="1/9/2023"/>
        
      </div>

    </div>
  )
}

export default App
