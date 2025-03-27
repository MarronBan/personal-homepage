import "./Intro.scss"
import avatar from "../../assets/avatar.png"
import { useTypewriter , Cursor } from 'react-simple-typewriter'
import { motion } from "motion/react"
import { useRef } from "react"

function Intro(){
  const constraintsRef = useRef(null)
  const [text] = useTypewriter({
    words:["是一名前端开发工程师","想去码头整点薯条"],
    loop:true,
    typeSpeed:70,
    deleteSpeed:50,
    delaySpeed:1500,
  })
  return (
    <div className="intro-wrapper">
      <motion.div className="avatar-wrapper" ref={constraintsRef}>
        <motion.div className="avatar" drag dragConstraints={constraintsRef}>
          <img src={avatar} alt="avatar" />
        </motion.div>
      </motion.div>
      <div className="intro-text">
        <p><span>你好呀！</span></p>
        <p>
          <span>我{text}</span>
          <Cursor />
        </p>
        
      </div>
      <div className="button-list">
        <button className="button-item">
          查看简历
        </button>
        <button className="button-item">
          稀土掘金
        </button>
      </div>
    </div>
  )
}

export default Intro