function basicTeenager(age) {

  if (age > 12 && age <= 20) {
    return 'You are a teenager!';
  }

}

function teenager(age) {if (age > 12 && age <= 20 ) {
  return `You are a teenager!`
} else {
  return `You are not a teenager`// executed if `conditionToTest` is falsey
}

}

function ageChecker(age) {if (age > 12 && age <= 20 ) {
  return `You are a teenager!`
} else if (age < 13 ){
  return `You are a kid`// executed if `conditionToTest` is falsey
} else { return `You are a grownup`} }

function ternaryTeenager(age) {
  return (age = age > 12 && age < 19 ? 'You are a teenager' : 'You are not a teenager');
}

function switchAge(age) {
  switch(age)
  {case 13:
    return 'You are a teenager';
  case 14:
    return 'You are a teenager';
  case 15:
    return 'You are a teenager';
  case 16:
    return 'You are a teenager';
  case 17:
    return 'You are a teenager';
  case 18:
    return 'You are a teenager';
  case 19:
    return 'You are a teenager';
  default:
    return 'You have an age';}
}
