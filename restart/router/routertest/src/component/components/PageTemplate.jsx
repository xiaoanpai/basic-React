import MainMenu from './MainMenu'
import React from 'react'

const PageTemplate = ({ children }) =>
    <div>
        <MainMenu />
        {children}
    </div>

export default PageTemplate
