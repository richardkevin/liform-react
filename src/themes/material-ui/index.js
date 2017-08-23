import React from "react"
import PropTypes from "prop-types"
import { Field } from "redux-form"
import renderFields from '../../renderFields'
import MenuItem from "material-ui/MenuItem"

import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle,
} from "redux-form-material-ui"

const BaseInputWidget = props => {
  let type = props.schema.type
  if (props.schema.format) {
    return <DatePickerWidget {...props} />
  }
  return (
    <Field
      name={props.fieldName}
      component={TextField}
      hintText={props.label}
      floatingLabelText={props.label}
      floatingLabelFixed={true}
      disabled={props.schema.hasOwnProperty("readOnly")}
      type={type}
      fullWidth
    />
  )
}

const CheckboxWidget = props => {
  return (
    <Field name={props.fieldName} component={Checkbox} label={props.label} />
  )
}

const DatePickerWidget = props => {
  return (
    <Field
      name={props.fieldName}
      component={DatePicker}
      disabled={props.schema.hasOwnProperty("readOnly")}
      label={props.label}
      floatingLabelText={props.label}
      floatingLabelFixed={true}
      fullWidth
    />
  )
}

const TimePickerWidget = props => {
  return (
    <Field
      name={props.fieldName}
      component={TimePicker}
      disabled={props.schema.hasOwnProperty("readOnly")}
      label={props.label}
      floatingLabelText={props.label}
      floatingLabelFixed={true}
      fullWidth
    />
  )
}

const SelectFieldWidget = props => {
  let MenuItems = <div />
  if (props.schema.hasOwnProperty("enum")) {
    const options = props.schema["enum"]
    MenuItems = options.map(value =>
      <MenuItem key={value} value={value} primaryText={value} />
    )
  }

  return (
    <Field
      name={props.fieldName}
      component={SelectField}
      label={props.label}
      hintText={props.label}
      floatingLabelText={props.label}
      floatingLabelFixed={true}
      fullWidth
    >
      {MenuItems}
    </Field>
  )
}

const ObjectWidget = props =>  {
    return (
        <div>
        {props.label && <legend>{props.label}</legend>}
        {renderFields(props.schema, props.theme, props.fieldName && props.fieldName + '.', props.context)}
        </div>
    )
}

export default {
  object: ObjectWidget,
  string: BaseInputWidget,
  number: BaseInputWidget,
  boolean: CheckboxWidget,
  date: DatePickerWidget,
  time: TimePickerWidget,
  choice: SelectFieldWidget,
}
