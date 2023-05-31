/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import '../App.css'

const ProjectList = ({ projectItem }) => {
  return (
    <div className='cards'>
        {projectItem.map(({ img, category}) => (
        <img key={uuidv4()} src={img} alt={category}/>))}
    </div>
  )
}
ProjectList.propTypes = {
    projectItem: PropTypes.arrayOf(PropTypes.object)
}
export default ProjectList