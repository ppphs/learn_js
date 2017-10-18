function serializeForm (form) {
  if (!form || form.nodeName.toUpperCase() !== 'FORM') {
    return
  }
  
  let result = [], field, fieldName, fieldType

  for (let i = 0, len = form.length; i < len; i++) {
    field = form.elements[i]
    fieldName = field.name
    fieldType = field.type

    if (field.disabled || !fieldName) { // 如果输入框禁用或者没有name属性就跳过这次循环
      continue
    }

    switch (fieldType) {
      case 'text':
      case 'password':
      case 'hidden':
      case 'textarea':
        result.push(encodeURIComponent(fieldName) + '=' + encodeURIComponent(field.value))
        break
      case 'radio': // 单选
      case 'checkbox': // 多选
        if (field.checked) {
          result.push(encodeURIComponent(fieldName) + '=' + encodeURIComponent(field.value))
        }
        break
      case 'select-one': // 单选下拉框
      case 'select-multiple': // 多选下拉框
        for (let i = 0, len = field.options.length; i < len; i++) {
          let option = field.options[i]
          if (option.selected) {
            result.push(encodeURIComponent(fieldName) + '=' + encodeURIComponent(option.value || option.text))
          }
        }
        break
      case 'file':
      case 'submit':
        break
      default:
        break
    }
  }
  return result.join('&') // 返回url查询格式，开头是&还是？要另作处理
}
