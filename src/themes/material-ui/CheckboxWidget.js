import React from 'react'
import { Field } from 'redux-form'

import { Checkbox } from 'redux-form-material-ui'

const CheckboxWidget = props => {
    const { fieldName, label, schema, theme, context, ...rest } = props
    return (
        <Field component={Checkbox} name={fieldName} label={label} {...rest} />
    )
}

export default CheckboxWidget
