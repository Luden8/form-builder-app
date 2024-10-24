type ControlType = 'text' | 'checkbox' | 'radio'

export interface IBaseControl {
  label: string
  slug: string
  id: string | number
  required?: boolean
  type: ControlType
}

interface ITextControl extends IBaseControl{
  type: 'text'
}

interface IOption {
  label: string
  value: string
}

interface ICheckboxControl extends IBaseControl{
  type: 'checkbox'
  options: Array<IOption>
}

interface IRadioControl extends IBaseControl{
  type: 'radio'
  options: Array<IOption>
}

type Control = ITextControl | ICheckboxControl | IRadioControl

export interface IStep {
  question: string,
  id: string,
  controls: Array<Control>
}
