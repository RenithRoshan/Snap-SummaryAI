import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
  return (
   <header>
      <section className="container">
        <article className="logo">
            <FontAwesomeIcon icon={faRobot} size="2x" className="headerIcon"/>
            <h1>SnapSummaryAI</h1>
        </article>
        <nav>
            <a href="#home" className="active">Home</a>
            <a href="#features">Feature</a>
            <a href="#about">About</a>
        </nav>
      </section>
   </header>
  )
}

export default Header