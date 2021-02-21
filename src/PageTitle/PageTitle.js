import React from 'react'
import './PageTitle.css'

const PageTitle = ({ title }) => {
  return (
    <div className="pageTitle">
      <h1>{title}</h1>
    </div>
  )
}

export default PageTitle
