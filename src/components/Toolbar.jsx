import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import cn from 'classnames'
import '../App.css'
import PropTypes from 'prop-types'

const Toolbar = ({ handleSelectFilter, filters, selected}) => {
    return (
        <div className="toolbar">
        {["All", ...filters].map((filter) => (
          <button
            key={uuidv4()}
            className={cn({ "App-link": selected === filter })}
            onClick={() => handleSelectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    )
}

Toolbar.propTypes = {
    handleSelectFilter: PropTypes.func,
    filters: PropTypes.object,
    selected: PropTypes.string,
}

export default Toolbar