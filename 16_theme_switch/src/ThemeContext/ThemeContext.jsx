import React, { createContext } from 'react'
import { ThemeDataContext } from '../../../15_children_as_props/src/context/ThemeContext'



const ThemeProvider = (props) => {
  return (
      <div>
      <ThemeDataContext.Provider>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeProvider