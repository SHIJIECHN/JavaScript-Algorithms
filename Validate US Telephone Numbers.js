/*传入字符串如果是美国电话号码，则返回tru */
function telephoneCheck(str) {
    let re = /^1?\s?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;
    return str.test(re);
  }

  telephoneCheck("1 555)555-5555");