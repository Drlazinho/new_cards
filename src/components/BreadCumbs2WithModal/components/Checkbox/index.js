import { InputCheckbox, LabelCheck } from "./style";
import check from '../../../../assets/check.png'

export function Checkbox({ isChecked }) {
  return (
    <>
      <InputCheckbox  type="checkbox" name="checkbox" checked={isChecked}  value="value" hidden />
      <LabelCheck >
        <div className="checkContainer">
           { isChecked && <img src={check} alt="" /> }     
        </div>
      </LabelCheck>
    </>
  )
}