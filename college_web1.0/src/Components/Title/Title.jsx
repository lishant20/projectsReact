import React from 'react'
import './Title.css'

const Title = ({subtitle,title}) => {
  return (
    <div className="title">
      <p>{subtitle}</p>
      <h3>{title}</h3>
    </div>
  )
}

export default Title