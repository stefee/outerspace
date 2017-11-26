module.exports = outerspace

const RE_LEADING = /^\s*/
const RE_TRAILING = /\s*$/

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
  const leadingSpace = firstExpr.match(RE_LEADING)[0]
  const trailingSpace = lastExpr.match(RE_TRAILING)[0]

  let acc = ''
  acc += leadingSpace || ''
  acc += strings[0] || ''
  acc += firstExpr.substring(leadingSpace.length)
  acc = strings.slice(1, -1)
      .reduce((acc, str, i) => acc + (str || '') + (exprs[i + 1] || ''), acc)
  acc += exprs.slice(strings.length - 1).join('') || ''
  acc = acc.substring(0, acc.length - trailingSpace.length)
  acc += strings[strings.length - 1] || ''
  acc += trailingSpace || ''
  return acc
}

outerspace.before = function (s, before) {
  if (!s && !before) return ''
  if (!s) return before
  if (!before) return s
  return s.match(RE_LEADING)[0] + before + s.replace(RE_LEADING, '')
}

outerspace.after = function (s, after) {
  if (!s && !after) return ''
  if (!s) return after
  if (!after) return s
  return s.replace(RE_TRAILING, '') + after + s.match(RE_TRAILING)[0]
}
