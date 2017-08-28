import React from 'react'

import renderFields from '../../renderFields'

const ObjectWidget = props =>  {
    return (
        <div>
            {props.label && <legend>{props.label}</legend>}
            {renderFields(props.schema, props.theme, props.fieldName && props.fieldName + '.', props.context)}
        </div>
    )
}

export default ObjectWidget
