import React from 'react'

function Navbar() {
  return (
    <div className='nave'>
        
        <nav>
           
        <ul>
            <div className='thesing'>
            <h2 className='' >تسجيل الدخول</h2>
            </div>
            <li><a href="#"> مركز الاختبارات</a></li>
            <li><a href="#">الاكادميات التابعة</a></li>
            <li><a href="#">حول الاكادمية</a></li>
            <li><a href="#">المعسكرات والبرامج</a></li>
            <li className='me-5'><a href="#">الرئيسية</a></li>
            <li><img width={200} src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt="" /></li>
        </ul>
        </nav>
    </div>
  )
}

export default Navbar