// import { BaseCheck } from "../BaseCheck";

// export default class ErrorCheck extends BaseCheck {
//     check(): void {
//         console.log(Object.defineProperties(new Error, {
//             message: {
//                 get() {
//                     // this.onDetect('Error', 'Error detected');
//                 }
//             },
//             toString: {
//                 value() {
//                     if ((new Error).stack?.includes('toString@')){
//                         this.onDetect('Error', 'Error detected');
//                     }
//                 }
//             }
//         }));
//     }
//     enable(): void {
//         setInterval(this.check, 10);
//     }

// }