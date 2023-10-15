export function updateCheckupPointDates() {
    const products = document.querySelectorAll('.delivery-products-same-date');

    const startDate = document.querySelector('.checkup-point-dates__start')
    const endDate = document.querySelector('.checkup-point-dates__end')

    const filtered = []
    products.forEach(item => {
        item.style.display === 'none' ?  '' : filtered.push(item)
    })

    if (!filtered.length) return

    const startDateNew = filtered[0].firstElementChild.firstElementChild.textContent
    const endDateNew = filtered[filtered.length - 1].firstElementChild.lastElementChild.previousElementSibling.textContent

    startDate.textContent = startDateNew 
    endDate.textContent = endDateNew
    
}