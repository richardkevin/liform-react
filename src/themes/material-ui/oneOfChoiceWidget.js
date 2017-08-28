import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import { reset } from 'redux-form'
import { connect } from 'react-redux'

import renderField from '../../renderField'


class OneOfChoiceWidget extends Component {
    state = {
        choice: 0
    }

    selectItem = (e, index, value) => {
        const { schema, context, dispatch } = this.props

        // Reset current schema properties before changing
        // This will return values back to initialState
        for (let property in schema.oneOf[this.state.choice].properties) {
            dispatch(reset(context.formName, property))
        }

        this.setState({choice: value})
    }

    render() {
        const { name, theme, context, schema } = this.props
        const currentSchema = schema.oneOf[this.state.choice]

        return (
            <div>
                <SelectField
                    fullWidth={true}
                    value={this.state.choice}
                    floatingLabelFixed={schema.title}
                    onChange={this.selectItem}
                >
                    {schema.oneOf.map((item, idx) => <MenuItem key={idx} value={idx} primaryText={item.title || idx} />)}
                </SelectField>
                {renderField(currentSchema, name, theme, name, context)}
            </div>
        )
    }
}

OneOfChoiceWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    fieldName: PropTypes.string,
    label: PropTypes.string,
    theme: PropTypes.object,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
}

export default connect()(OneOfChoiceWidget)
