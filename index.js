function addTransaction(type) {
    var description = document.getElementById('description')
    var amount = document.getElementById('amount')
     
    var table = document.getElementById('table')
    var trElements =document.createElement('tr')
    
    var descriptionTd = document.createElement('td')
    descriptionTd.innerHTML = description.value
    var amountTd = document.createElement('td')
    amountTd.innerHTML = amount.value
    var typeTd = document.createElement('td')
    typeTd.innerHTML = type

    trElements.append(descriptionTd)
    trElements.append(amountTd)
    trElements.append(typeTd)

    table.append(trElements)
}