import BaseInputWidget from './BaseInputWidget'
import CheckboxWidget from './CheckboxWidget'
import DatePickerWidget from './DatePickerWidget'
import EmailWidget from './EmailWidget'
import NumberWidget from './NumberWidget'
import ObjectWidget from './ObjectWidget'
import OneOfChoiceWidget from './oneOfChoiceWidget'
import PasswordWidget from './PasswordWidget'
import SearchWidget from './SearchWidget'
import SelectFieldWidget from './SelectFieldWidget'
import StringWidget from './StringWidget'
import TextareaWidget from './TextareaWidget'
import TimePickerWidget from './TimePickerWidget'
import UrlWidget from './UrlWidget'

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
