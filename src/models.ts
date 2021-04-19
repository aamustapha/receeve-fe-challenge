export interface Address {
    address: string,
    city: string,
    state: string,
    zip: number,
    country: string
}

export interface Person {
    title?: string,
    firstName: string,
    lastName: string,
    address: Address,
    mobilePhone: string,
    email: string
}

export interface Account {
    id: string;
    debtor: Person;
}

export interface Claim {
    id: string,
    accountId: string,
    currency: string,
    baseAmount: number,
    fees: number,
    dueDate: string,
    status: string
}