module.exports = outerspace

/*
  Template function: move leading/trailing whitespace in the first/last
  template expressions to the start/end of the string (respectively).
*/
function outerspace (strings, ...exprs) {
  if (!exprs.length && !strings.length) return ''
  if (!exprs.length) return strings.join('')
  if (!strings.length) return exprs.join('')

  const firstExpr = exprs[0] || ''
  const lastExpr = exprs[exprs.length - 1] || ''
  const leadingSpace = firstExpr.match(/^\s*/)[0]
  const trailingSpace = lastExpr.match(/\s*$/)[0]

  let acc = ''
  acc += leadingSpace || ''
  acc += strings[0] || ''
  acc += firstExpr.replace(/^\s*/, '') || ''
  acc = strings.slice(1, -1)
      .reduce((acc, str, i) => acc + (str || '') + (exprs[i + 1] || ''), acc)
  acc += exprs.slice(strings.length - 1).join('') || ''
  if (acc.trim()) acc = acc.replace(/\s*$/, '')
  acc += strings[strings.length - 1] || ''
  acc += trailingSpace || ''
  return acc
}
