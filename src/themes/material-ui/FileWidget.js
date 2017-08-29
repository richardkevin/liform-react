import React from 'react'
import { TextField } from 'material-ui'

import BaseInputWidget from './BaseInputWidget'


const processFile = (onChange, e) => {
    let reader  = new FileReader()
    reader.addEventListener('load', () => onChange(reader.result), false)
    reader.readAsDataURL(e.target.files[0])
}

const FileComponent = props => {
    const {input, meta, ...rest} = props
    const inputStyle = {marginTop: '36px'}

    return (
        <TextField
            type="file"
            inputStyle={inputStyle}
            onChange={e => processFile(input.onChange, e)}
            {...rest}
        />
    )
}

const FileWidget = props => {
    return (
        <BaseInputWidget component={FileComponent} {...props} />
    )
}

export default FileWidget
