import CheckboxWidget from './CheckboxWidget'
import ColorWidget from './ColorWidget'
import DatePickerWidget from './DatePickerWidget'
import DateTimePickerWidget from './DateTimePickerWidget'
import EmailWidget from './EmailWidget'
import FileWidget from './FileWidget'
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
    'compatible-date': DatePickerWidget,
    'compatible-datetime': DateTimePickerWidget,
    boolean: CheckboxWidget,
    choice: SelectFieldWidget,
    color: ColorWidget,
    date: DatePickerWidget,
    datetime: DateTimePickerWidget,
    email: EmailWidget,
    file: FileWidget,
    integer: NumberWidget,
    money: NumberWidget,
    number: NumberWidget,
    object: ObjectWidget,
    oneOf: OneOfChoiceWidget,
    password: PasswordWidget,
    percent: NumberWidget,
    search: SearchWidget,
    string: StringWidget,
    textarea: TextareaWidget,
    time: TimePickerWidget,
    url: UrlWidget,
}
