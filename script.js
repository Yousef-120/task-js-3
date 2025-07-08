let degree = +prompt(`Enter Your Degree`);

console.log(`If With and`);
if (degree >= 50) {
  if (degree < 65) {
    console.log(`مقبول`);
  } else if (degree >= 65 && degree < 75) {
    console.log(`جيد`);
  } else if (degree >= 75 && degree < 85) {
    console.log(`جيد جدا`);
  } else if (degree >= 85 && degree <= 100) {
    console.log(`امتياز`);
  } else if (degree > 100)
  {
    console.log(`ادخل رقم من 0 الي 100`);
  }
} else if (degree == null) {
  console.log(`ادخل قيمه`);
} else if (degree < 0 ) {
  console.log(`ادخل رقم من 0 الي 100`);
} else if(degree < 50 || degree > 0) {
  console.log(`راسب`);
} else
{
  console.log(`ادخل رقم من 0 الي 100`);
}

console.log(`Nested If`);
if (degree >= 50) {
  if (degree < 65) {
    console.log(`مقبول`);
  } else if (degree >= 65) {
    if (degree < 75) {
      console.log(`جيد`);
    } else if (degree < 85) {
      console.log(`جيد جدا`);
    } else if (degree <= 100) {
      console.log(`امتياز`);
    } else {
      console.log(`ادخل رقم من 0 الي 100`);
    }
  }
} else if (degree == null) {
  console.log(`ادخل قيمه`);
} else if (degree >= 0) {
  console.log(`راسب`);
} else if (degree == null) {
  console.log(`ادخل قيمه`);
} else {
  console.log(`ادخل رقم من 0 الي 100`);
}

console.log(`Switch`);
switch (true) {
  case degree == null:
    console.log(`ادخل قيمه`);
    break;
  case degree < 0 || degree > 100:
    console.log(`ادخل رقم من 0 الي 100`);
    break;
  case degree < 50:
    console.log(`راسب`);
    break;
  case degree < 65:
    console.log(`مقبول`);
    break;
  case degree < 75:
    console.log(`جيد`);
    break;
  case degree < 85:
    console.log(`جيد جدا`);
    break;
  case degree <= 100:
    console.log(`امتياز`);
    break;

    default:
      console.log(`ادخل رقم من 0 الي 100`);
      break;
}
