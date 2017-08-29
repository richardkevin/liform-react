import React from 'react'
import BaseInputWidget from './BaseInputWidget'

import { DatePicker } from 'redux-form-material-ui'

const DatePickerWidget = props => {
    const { fieldName, label, schema, theme, context, ...rest } = props
    return (
      <BaseInputWidget component={DatePicker} format={(value, name) => value || null} {...props} />
    )
}

export default DatePickerWidget
