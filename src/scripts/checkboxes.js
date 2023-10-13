const productCheckboxes = document.querySelectorAll('.product-check-input')

productCheckboxes.forEach((checkbox) => {

    const productWithSale = document.querySelector(`${checkbox.dataset.priceValue}`)
    const productWithoutSale =  document.querySelector(`${checkbox.dataset.oldPriceValue}`)

    
})