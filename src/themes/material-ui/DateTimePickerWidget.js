import React, { Component } from 'react'
import { DatePicker, TimePicker } from 'material-ui'

import BaseInputWidget from './BaseInputWidget'

const componentStyle = {
    display: 'grid',
    gridGap: '16px',
    gridTemplateColumns: '1fr 1fr',
}

class DateTimePickerComponent extends Component {
    handleDateChange = (e, value) => {
        this.setDateTime(value, null)
        this.timePicker.openDialog()
    }

    handleTimeChange = (e, value) => {
        this.setDateTime(null, value)
    }

    setDateTime(date, time) {
        const value = this.props.input.value
        const current = value && new Date(value) || new Date()
        date = date || current
        time = time || current

        const combined = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),

            time.getHours(),
            time.getMinutes(),
            time.getSeconds(),
            time.getMilliseconds(),
        )

        this.props.input.onChange(combined)
    }

    render() {
        const { fieldName, label, meta, input, ...rest } = this.props
        const value = input.value && new Date(input.value) || null

        return (
            <div style={componentStyle}>
                <DatePicker
                    value={value}
                    onChange={this.handleDateChange}
                    {...rest}
                    hintText="Date"
                />
                <TimePicker
                    ref={el => this.timePicker = el}
                    value={value}
                    onChange={this.handleTimeChange}
                    {...rest}
                    hintText="Time"
                    floatingLabelText=" "
                />
            </div>
        )
    }
}

const DateTimePickerWidget = props => (
    <BaseInputWidget component={DateTimePickerComponent} {...props} />
)

export default DateTimePickerWidget
