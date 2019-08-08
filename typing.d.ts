/* | Create by: Slawomir Figiel <https://github.com/fivitti>
 * | Type definitions for patchinko v0.1.0
 * | Typescript: 3.5.3
 * 
 * Inspired by and based on:
 * | Definitions by: Jules Samuel Randolph <https://github.com/jsamr>
 * | Source: https://gist.github.com/jsamr/1e95b21d9d6f609f320c60ee917ab306
 * | Type definitions for patchinko v4.1.0
 * | Project: patchinko
 * | Typescript: 3.1.6
 */  

declare module 'patchinko' {
  export const DSymbol: unique symbol;
  export const SSymbol: unique symbol;
  export const PSSymbol: unique symbol;
  export type PatchInstructionSymbol = typeof DSymbol | typeof SSymbol | typeof PSSymbol;

  export interface DPatchInstruction { [DSymbol]: any }
  export interface SPatchInstruction<T> { [SSymbol]: T }
  export interface PSPatchInstruction<T> { [PSSymbol]: T }
  export type PatchInstruction<T> = PSPatchInstruction<T> | SPatchInstruction<T> | DPatchInstruction;

  export type Primitive<T> = T extends number ? number :
    T extends string ? string :
    T extends boolean ? boolean :
    T extends null ? null :
    never;

  export type NonPrimitive<T> = T extends Primitive<T> ? never : T;

  export type PatchRequest<M> = { [P in keyof M]?: P extends PatchInstructionSymbol ? never : 
      M[P] |
      SPatchInstruction<M[P] extends object ? M[P] : Primitive<M[P]>> |
      DPatchInstruction |
      PSPatchInstruction<PatchRequest<NonPrimitive<M[P]>>> };

  export type P = <M extends object>(m: M, ...pp: PatchRequest<M>[]) => M

  export type PS = <M extends object>(p: PatchRequest<M>) => PSPatchInstruction<M>

  export type D = DPatchInstruction

  export type S = <M>(closure: (m: M) => M) => SPatchInstruction<M>

  export interface Overloaded extends DPatchInstruction {
      /* P  */ <M extends object>(m: M, ...pp: PatchRequest<M>[]): M
      /* PS */ <M extends object>(p: PatchRequest<M>): PSPatchInstruction<M>
      /* S  */ <M>(closure: (m: M) => M): SPatchInstruction<M>
  }
  export const immutable: Overloaded
  export const constant: Overloaded
  export const P: P
  export const PS: PS
  export const D: D
  export const S: S
}

declare module 'patchinko/immutable' {
  import { immutable } from 'patchinko'
  export = immutable
}

declare module 'patchinko/constant' {
  import { constant } from 'patchinko'
  export = constant
}

declare module 'patchinko/explicit' {
  export { P, PS, D, S } from 'patchinko'
}