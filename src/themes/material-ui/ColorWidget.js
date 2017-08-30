import React from 'react'
import { TextField } from 'redux-form-material-ui'

import BaseInputWidget from './BaseInputWidget'

const inputStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    opacity: '0',
    width: '100%',
    height: '90%',
}

const ColorComponent = props => {
    return (
      <div style={{ position: 'relative' }}>
          <TextField {...props} />
          <input
            style={inputStyle}
            type="color"
            onChange={e => props.input.onChange(e)}
            value={props.input.value}
          />
      </div>
    )
}

const ColorWidget = props => (
    <BaseInputWidget component={ColorComponent} {...props} />
)

export default ColorWidget
