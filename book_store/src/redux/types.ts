export interface IBook {
    error?: string
    title: string
    subtitle: string
    isbn13: string
    price: string
    image: string
    url: string
    authors?: string
    publisher?: string
    isbn10?: string
    pages?: string
    year?: string
    rating?: string
    desc?: string
    pdf?: string
    language?: string
}



export interface IBookStore {
    oneBook?: IBook,
    books: IBook[],
    searchValue: string,
    countTotal: number,
    activeBookId?: number,
    /* activeBook: IBook, */
}

export interface ISettingsStore {
    activeTab: string,
    currentPage: number,
    rowsPerPage: number,
}

export interface IStore {
    books: IBookStore,
    settings: ISettingsStore,
}