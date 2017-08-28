import React from "react"
import PropTypes from "prop-types"
import { Field } from "redux-form"
import renderFields from '../../renderFields'
import MenuItem from "material-ui/MenuItem"
import OneOfChoiceWidget from "./oneOfChoiceWidget"

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
    const { fieldName, label, schema, theme, context, ...rest } = props

    return (
        <Field
            name={fieldName}
            component={TextField}
            hintText={label}
            floatingLabelText={label}
            floatingLabelFixed={true}
            disabled={props.schema.hasOwnProperty("readOnly")}
            fullWidth
            {...rest}
        />
    )
}

const StringWidget = (props) => {
    return (
        <BaseInputWidget type="text" {...props} />
    )
}

const TextareaWidget = props => (
    <BaseInputWidget multiLine {...props} />
)

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
        disabled={props.schema.hasOwnProperty('readOnly')}
        label={props.label}
        floatingLabelText={props.label}
        floatingLabelFixed={true}
        fullWidth
        {...props}
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

const UrlWidget = props => (
    <BaseInputWidget type="url" {...props} />
)

const SearchWidget = props => (
    <BaseInputWidget type="search" {...props} />
)

const PasswordWidget = props => (
    <BaseInputWidget type="password" {...props} />
)

const EmailWidget = props => (
    <BaseInputWidget type="email" {...props} />
)

const NumberWidget = props => (
    <BaseInputWidget type="number" normalize={parseFloat} {...props} />
)

export default {
    object: ObjectWidget,
    string: StringWidget,
    number: NumberWidget,
    integer: NumberWidget,
    boolean: CheckboxWidget,
    date: DatePickerWidget,
    email: EmailWidget,
    time: TimePickerWidget,
    choice: SelectFieldWidget,
    password: PasswordWidget,
    percent: NumberWidget,
    textarea: TextareaWidget,
    url: UrlWidget,
    money: NumberWidget,
    search: SearchWidget,
    oneOf: OneOfChoiceWidget,
}
