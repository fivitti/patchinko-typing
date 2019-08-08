export interface Nested {
    n: number,
    b: boolean,
    s: string,
    nn: number | null,
    bn: boolean | null,
    sn: string | null,
    no?: number,
    bo?: boolean,
    so?: string
}

export interface Item {
    nested: Nested,
    n: number,
    b: boolean,
    s: string,
    nn: number | null,
    bn: boolean | null,
    sn: string | null,
    no?: number,
    bo?: boolean,
    so?: string
}

export interface State {
    items: Record<string, Item>,
    n: number,
    b: boolean,
    s: string,
    nn: number | null,
    bn: boolean | null,
    sn: string | null,
    no?: number,
    bo?: boolean,
    so?: string
}

export function initial(): State {
    return {
        b: false,
        bn: null,
        n: 0,
        nn: null,
        s: "",
        sn: null,
        items: {
            '#0': {
                b: false,
                bn: null,
                n: 0,
                nn: null,
                s: "",
                sn: null,
                nested: {
                    b: false,
                    bn: null,
                    n: 0,
                    nn: null,
                    s: "",
                    sn: null,
                }
            }
        }
    }
}