let monthInvoicing = [
  {
    city: 'SP',
    invoicing: 67836.43
  },
  {
    city: 'RJ',
    invoicing: 36678.66
  },
  {
    city: 'MG',
    invoicing: 29229.88
  },
  {
    city: 'ES ',
    invoicing: 27165.48
  },
  {
    city: 'Outros ',
    invoicing: 19849.53
  },
]
let totalInvoicing = 0
let percentage = 0

monthInvoicing.forEach(state => {
  totalInvoicing += state.invoicing
})
console.log(totalInvoicing)

monthInvoicing.forEach(state =>{
  percentage = (state.invoicing * 100 / totalInvoicing).toFixed(2)
  console.log(`O estado de ${state.city} corresponde a ${percentage}% do faturamento total`)
})