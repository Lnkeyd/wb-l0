// Инпут, текст, кнопка, итого

const payCheckbox = document.querySelector('#instant-pay__input')
const payDescription = document.querySelector('.checkout-instant-pay__description')
const payButton = document.querySelector('.instant-pay__button')
const finalPriceValue = document.querySelector('.checkout-with-sale__value-sum')
const finalPriceCurr = document.querySelector('.checkout-with-sale__curr')

payCheckbox.addEventListener('change', () => {

    if (payCheckbox.checked) {
        console.log('Checked1')
        payDescription.style = 'display: none;'
        payButton.textContent = `Оплатить ${FINAL_PRICE.toLocaleString()} ${finalPriceCurr.textContent}`
    } else {
        console.log('NOT Checked1')
        payDescription.style = 'display: block;'
        payButton.textContent = `Заказать`
    }
})
