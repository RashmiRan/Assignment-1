function tipcal() {
  let tip = 0;
  let total = 0;
  let billAmt = document.getElementById("bill_amount").value;
  let noOfPax = document.getElementById("paxx_no").value;
  let perc = document.getElementById("tip_perc").value;

  if (validate(billAmt, noOfPax)) {
    tip = billAmt * (perc / 100);
    total = (Number(billAmt) + Number(tip)) / Number(noOfPax);
  }
  document.getElementById("tip_total").value = tip;
  document.getElementById("total_bill").value = total;
}

function validate(x, y) {
  if (isNaN(x) || isNaN(y)) {
    alert(" Enter valid data");
    return false;
  } else {
    alert("Valid");
    return true;
  }
}
