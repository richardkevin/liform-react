import React from 'react'
import BaseInputWidget from './BaseInputWidget'

import { TimePicker } from "redux-form-material-ui"

const TimePickerWidget = props => {
    const { fieldName, label, schema, theme, context, ...rest } = props
    return (
      <BaseInputWidget component={TimePicker} format={(value, name) => value || null} {...props} />
    )
}

export default TimePickerWidget
