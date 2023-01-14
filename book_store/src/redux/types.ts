export interface IBook {
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    url: string
}

export interface IBookStore {
    books: IBook[],
    searchValue: string,
    countTotal: number,
}

export interface ISettingsStore {
    currentPage: number,
    rowsPerPage: number,
}

export interface IStore {
    books: IBookStore,
    settings: ISettingsStore,
}