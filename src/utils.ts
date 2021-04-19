export const moneyFormat = (amount, currency): string => {
    return `${currency} ${(amount / 100).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}