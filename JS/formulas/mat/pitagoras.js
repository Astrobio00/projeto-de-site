function calcular() {
    var aValue = window.document.getElementById('aValue')
    var bValue = window.document.getElementById('bValue')
    var cValue = window.document.getElementById('cValue')
    var result = 0

    if (aValue.value == "" || aValue.value == 0) {
        result = Math.sqrt((Number.parseInt(bValue.value) * Number.parseInt(bValue.value)) + (Number.parseInt(cValue.value) * Number.parseInt(cValue.value))) 
        aValue.value = (result)
        cValue.style.backgroundColor = 'white'
        bValue.style.backgroundColor = 'white'
        aValue.style.backgroundColor = 'green'
    }

    if (bValue.value == "" || bValue.value == 0) {
        result = Math.sqrt((Number.parseInt(aValue.value) * Number.parseInt(aValue.value)) - (Number.parseInt(cValue.value) * Number.parseInt(cValue.value))) 
        bValue.value = (result)
        cValue.style.backgroundColor = 'white'
        bValue.style.backgroundColor = 'green'
        aValue.style.backgroundColor = 'white'
    }
    if (cValue.value == "" || cValue.value == 0) {
        result = Math.sqrt((Number.parseInt(aValue.value) * Number.parseInt(aValue.value)) - (Number.parseInt(bValue.value) * Number.parseInt(bValue.value))) 
        cValue.value = (result)
        cValue.style.backgroundColor = 'green'
        bValue.style.backgroundColor = 'white'
        aValue.style.backgroundColor = 'white'
    }
}
