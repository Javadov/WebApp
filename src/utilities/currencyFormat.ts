const currencyFormat = new Intl.NumberFormat('en-US', { currency: 'USD' , style: 'currency'})

export const currencyFormater = (value: number) => {
    return currencyFormat.format(value)
}