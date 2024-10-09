import { BaseCheck, OnChangeProps, setOnChange } from "./checks/BaseCheck";
import DebugCheck from "./checks/impl/DebugCheck";
import LogPerformanceCheck from "./checks/impl/LogPerformanceCheck";
import ObjectIDCheck from "./checks/impl/ObjectIDCheck";

const checks: BaseCheck[] = [
  new ObjectIDCheck(),
  new LogPerformanceCheck(),
  new DebugCheck()
];


export function init(onChange?: OnChangeProps | undefined) {
  if (onChange) {
    setOnChange(onChange);
  }
  checks.forEach(check => {
    check._enable();
  });
}