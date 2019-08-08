import { P, S, PS, D } from "patchinko/explicit";
import { State, Item } from "./model";
import { PatchRequest } from "patchinko";
import { PSD } from "./utils";
import { MiniState, MiniItem } from "./mini-state";

const id = "#0";

const detailPS: PatchRequest<MiniState> = {
    items: PSD({
        [id]: PS({
            s: S((m) => m + "123"),
            sn: S(() => null),
            // nested: PS({
            //     s: D,
            //     sn: ""
            // }),
            nestedo: undefined,
            nestedn: {
                s: "",
                sn: null
            }
        })
    })
}

const onlyItemPS: PatchRequest<MiniItem> = {
    s: S(m => m + "123"),
    nested: PS({
        s: S(m => m + "123"),
        sn: S(m => m + "123")
    })    
}

const onlyItemS: PatchRequest<MiniItem> = {
    s: S(m => m + "123"),
    nested: S(n => ({
        s: "",
        sn: null
    }))    
}

const nestedOptional: PatchRequest<MiniState> = {
    items: PSD({
        [id]: PS({
            nestedo: PS({
                s: "",
                sn: null
            })
        })
    })
}