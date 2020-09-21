const BASESOURCE = {
  input: { required: true, trigger: "blur" },
  textarea: { required: true, trigger: "blur" },
  select: { required: true, trigger: "blur" },
  radio: { required: true, trigger: "change" },
  checkbox: { type: "array", required: true, trigger: "change" }
};
export const typeCheck = (type, message = "格式错误") => {
  return {
    ...BASESOURCE[type],
    message
  };
};
export const RegCheck = (reg, errorMessage = "填写错误", emptyMessage) => {
  return {
    ...BASESOURCE.input,
    validator: (rule, value, callback) => {
      switch (true) {
        case value === "":
          callback(new Error(emptyMessage || errorMessage || "不能为空"));
          break;
        case !reg.test(value):
          callback(new Error(errorMessage));
          break;
        default:
          callback();
      }
    }
  };
};
export const price = (errorMessage = "价格格式错误", emptyMessage = "请填写价格") => {
  return RegCheck(/(?:^[1-9]([0-9]+)?(?:\.[0-9]{1,2})?$)|(?:^(?:0){1}$)|(?:^[0-9]\.[0-9](?:[0-9])?$)/, errorMessage, emptyMessage);
};
export const stringLen = (len = 0, message) => {
  return {
    ...BASESOURCE.input,
    validator: (rule, value, callback) => {
      if (value.length > len) {
        callback(new Error(message || "长度不能大于" + len));
      } else {
        callback();
      }
    }
  };
};
export const lessthan = (len = 0, message) => {
  return {
    ...BASESOURCE.input,
    validator: (rule, value, callback) => {
      if (value.length < len) {
        callback(new Error(message || "长度不能小于" + len));
      } else {
        callback();
      }
    }
  };
};
export const phone = (errorMessage = "手机号格式错误", emptyMessage = "请填写手机号") => {
  return RegCheck(/^(?:(?:\+|00)86)?1[3-9]\d{9}$/, errorMessage, emptyMessage);
};
export const email = (errorMessage = "邮箱格式错误", emptyMessage = "请填写正确的邮箱") => {
  return RegCheck(
    // eslint-disable-next-line no-useless-escape
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    errorMessage,
    emptyMessage
  );
};
