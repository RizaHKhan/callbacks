//Object property shorthand

const name = 'Andrew'
const Userage = 34

const  user = {
    name,
    Userage,
    location: 'Ottawa'
}

console.log(user)

//object destructuring
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined    
}

const {label:newLabel, price, stock, salesPrice} = product

console.log(newLabel)

console.log(stock)


const transition = (type, {  }) => {
    
}

transaction('order', product)