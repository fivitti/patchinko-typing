export interface MiniNested {
    s: string,
    sn: string | null
}

export interface MiniItem {
    s: string,
    sn: string | null,
    nested: MiniNested,
    nestedo?: MiniNested
    nestedn: MiniNested | null
}

export interface MiniState {
    s: string,
    sn: string | null,
    items: Record<string, MiniItem>
}