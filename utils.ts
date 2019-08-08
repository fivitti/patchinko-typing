import { PS } from "patchinko/explicit";
import { PatchRequest, PSPatchInstruction } from "patchinko";

export function PSD<T>(obj: Record<string, T>): PSPatchInstruction<Record<string, T>> {
    return PS(obj);
}