// Mi forma:
/*function calcularPrecioConDescuento(precio) {
  const descuento = getCouponDiscount();
  const porcentajePrecioConDescuento = 100 - descuento;

  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function showInputCoupon() {
  const input = document.getElementById("list-discount");

  input.classList.toggle("displayOff");
}

function getCouponDiscount() {
  const discount = document.getElementById("list-discount").value;

  switch (discount) {
    case "none":
      return 0;

    case "ten":
      return 10;

    case "fifteen":
      return 15;

    case "twenty-five":
      return 25;
  }
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue);

  const resultP = document.getElementById("resultP");
  resultP.innerText = `El precio final (c/Dto.) es: $${precioConDescuento}`;
}*/
////////////////////////////////////////

// Forma más profesional

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const coupons = [
    { code: "Esternocleidomastoideo", discount: 10 },
    { code: "Tibia_Y_Perone", discount: 15 },
    { code: "Biceps_Y_Triceps", discount: 25 },
  ];

  const couponInput = document.getElementById("inputDiscountCode").value;

  function getCouponDiscount() {
    const code = couponInput;
    const discount = coupons.filter((coupon) => coupon.code === code)[0]
      .discount;
    return discount;
  }

  function calcularPrecioConDescuento(precio) {
    const descuento = getCouponDiscount();
    const porcentajePrecioConDescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
  }

  function isCouponCodeValid(coupon) {
    return coupons.some((c) => c.code === coupon);
  }

  if (!isCouponCodeValid(couponInput)) {
    alert(`El código ingresado no es válido.`);
    return;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue);

  const resultP = document.getElementById("resultP");
  resultP.innerText = `El precio final (c/Dto.) es: $${precioConDescuento}`;
}
