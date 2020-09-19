function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//비밀번호 패턴 체크
function checkPasswordPattern(str) {
  var pattern1 = /[0-9]/; // 숫자
  var pattern2 = /[a-zA-Z]/; // 문자
  var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
  if (
    !pattern1.test(str) ||
    !pattern2.test(str) ||
    !pattern3.test(str) ||
    str.length < 8
  ) {
    return false;
  } else {
    return true;
  }
}

//공백 여부
function checkSpace(str) {
  if (str.search(/\s/) != -1) {
    return true;
  } else {
    return false;
  }
}

//숫자인지 판단
function chechNumber(input) {
  const regex = /[^0-9]/g;
  if (!regex.test(input)) {
    return false;
  } else {
    return true;
  }
}

function checkPasswordSame(password, checkPassword) {
  if (password == checkPassword) {
    return true;
  } else {
    return false;
  }
}

//영문,숫자만 입력 가능 + 4자 이상, 12자 이하
function checkOnlyEnglishAndNum(str) {
  const regType = /^[A-Za-z0-9+]{4,12}$/;
  if (!regType.test(str)) {
    return false;
  } else {
    return true;
  }
}

export {
  validateEmail,
  checkPasswordPattern,
  checkSpace,
  chechNumber,
  checkPasswordSame,
  checkOnlyEnglishAndNum,
};
