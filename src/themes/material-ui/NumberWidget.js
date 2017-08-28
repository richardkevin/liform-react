import React from 'react'

import BaseInputWidget from './BaseInputWidget'

const NumberWidget = props => (
    <BaseInputWidget type="number" normalize={parseFloat} {...props} />
)

export default NumberWidget
