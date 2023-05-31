import data from '../data/data'
import { useState } from 'react'
import ProjectList from './ProjectList'
import Toolbar from './Toolbar'
import '../App.css'

export default function Portfolio() {
    const filters = new Set(data.map(({ category }) => category))
    const [selected, setData] = useState("All")
    const projectsToRender = selected === 'All' ? data : data.filter(({ category }) => category === selected)
    console.log(projectsToRender)
    const handleSelectFilter = (filter) => setData(filter)
  return (
    <div className='container'>
        <Toolbar
            selected={selected}
            filters={filters}
            handleSelectFilter={handleSelectFilter}
        />
        <ProjectList projectItem={projectsToRender}/>
    </div>
  )
}
