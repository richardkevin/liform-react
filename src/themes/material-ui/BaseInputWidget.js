import React from 'react'
import { Field } from 'redux-form'

import { TextField } from 'redux-form-material-ui'


const BaseInputWidget = props => {
    const { fieldName, label, schema, theme, context, ...rest } = props

    return (
        <Field
            name={fieldName}
            component={TextField}
            label={label}
            hintText={label}
            floatingLabelText={label}
            floatingLabelFixed={true}
            disabled={schema.hasOwnProperty("readOnly")}
            fullWidth
            {...rest}
        />
    )
}

export default BaseInputWidget
