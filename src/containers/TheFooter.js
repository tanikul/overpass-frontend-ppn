import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://bems.co.th" target="_blank" rel="noopener noreferrer">Bems.co.th</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
