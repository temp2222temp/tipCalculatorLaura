// Will receive the input info from the bill
function billSummary() {
    numberOfPerson = parseInt(document.getElementById("numberOfPerson").value);
    mealTotal = parseFloat(document.getElementById("mealTotal").value);
    tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    province = document.getElementById("province").value;

    // Calculate tax rate based on the province
    let taxRate = 0;
    switch (province) {
      case "Alberta":
      case "Northwest Territories":
      case "Nunavut":
      case "Yukon":
          taxRate = 0.05;
          break;
      case "Saskatchewan":
          taxRate = 0.11;
          break;
      case "British Columbia":
      case "Manitoba":
          taxRate = 0.12;
          break;
      case "Ontario":
          taxRate = 0.13;
          break;
      case "Quebec":
          taxRate = 0.14;
          break;
      case "New Brunswick":
      case "Newfoundland and Labrador":
      case "Nova Scotia":
          taxRate = 0.15;
    }

    // Calculate bill details
    taxAmount = mealTotal * taxRate;
    tipAmount = mealTotal * (tipPercentage / 100);
    totalBill = mealTotal + taxAmount + tipAmount;
    costPerDiner = totalBill / numberOfPerson;

    // Will send the calculated values to HTML to be printed

    document.getElementById("totalBill").innerHTML = "$" + totalBill.toFixed(2);
    document.getElementById("tipAmount").innerHTML = "$" + tipAmount.toFixed(2) + ' (' + tipPercentage + '%)';
    document.getElementById("taxAmount").innerHTML = "$" + taxAmount;
    document.getElementById("costPerDiner").innerHTML = "$" + costPerDiner.toFixed(2);

  }