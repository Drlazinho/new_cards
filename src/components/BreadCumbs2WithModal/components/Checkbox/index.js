import { InputCheckbox, LabelCheck } from "./style";
import check from '../../../../assets/check.png'

export function Checkbox({ checked }) {
  return (
    <>
      <InputCheckbox  type="checkbox" name="checkbox" checked={checked}  value="value" hidden />
      <LabelCheck >
        <div className="checkContainer">
           { checked && <img src={check} alt="" /> }     
        </div>
      </LabelCheck>
    </>
  )
}