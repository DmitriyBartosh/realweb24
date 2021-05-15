import React, { useState } from 'react'
import './ThreeBlock.scss'
import Chair from '../chair/Chair'



function ThreeBlock() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    console.log('Закрыть')
    setIsOpen(false);
  }

  return (
    <div className="threeNewLvl">
      <h2>3D презентации<br />выведут ваш продукт<br />на <span>новый уровень</span></h2>
      <button className="chairLink" onClick={openModal}>Демонстрация</button>
      {isOpen && (
        <>
        <p href="#" className="closeChair" onClick={closeModal}>Закрыть демонстрацию</p>
        <Chair />
        </>
      )}
    </div>
  )
}

export default ThreeBlock
