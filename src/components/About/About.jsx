import './About.scss'
import { useState } from 'react'

const checkSelectionAndRange = (selection)=>{
  const {type} = selection
  return !(type!=='Range'||selection.getRangeAt(0).collapsed)
}

function About(){
  const [isSelected,setSelected] = useState(false)
  const handleMouseUp = (e)=>{
    const selection = document.getSelection()
    if(!checkSelectionAndRange(selection)) return
    const range = selection.getRangeAt(0)
    if(CSS.highlights){
      CSS.highlights.set('show-result',new Highlight(range))
      selection.removeAllRanges()
      setSelected(true)
    }
  }
  const clearnAllSelect = ()=>{
    console.log('clean!')
    setSelected(false)
    CSS.highlights&&CSS.highlights.clear();
  }
  return (
    <div className="about-wrapper">
      <div className="about-container glass-card" onMouseUp={handleMouseUp}>
          <p>关于我……也不知道有什么好说的</p>
          <p>往下划可以看我写过的一些小项目噢，有一些还挺有趣的~</p>
          <p>此外还可以点点页面上的其他东西...比如拖拽一下头像！</p>
          <p>鼠标选中这段话也会有惊喜噢╰(*°▽°*)╯ 试试吧！</p>
      </div>
      { isSelected?
        <button onClick={clearnAllSelect}>clearn</button>
        :<></>}
    </div>
  )
}

export default About