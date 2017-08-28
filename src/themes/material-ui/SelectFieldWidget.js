import React from 'react'

import MenuItem from 'material-ui/MenuItem'

import { SelectField } from 'redux-form-material-ui'

import BaseInputWidget from './BaseInputWidget'

const SelectFieldWidget = props => {
  const options = props.schema.enum || []

  return (
    <BaseInputWidget component={SelectField} {...props}>
        {options.map(value =>
            <MenuItem key={value} value={value} primaryText={value} />
        )}
    </BaseInputWidget>
  )
}

export default SelectFieldWidget
