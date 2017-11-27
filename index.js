module.exports = outerspace

const RE_LEADING = /^\s*/
const RE_TRAILING = /\s*$/

/*
  Template function: move leading/trailing whitespace in the first/last
  expressions to the start/end of the string (respectively).
*/
function outerspace (strings, ...exprs) {
  if (!exprs.length && !strings.length) return ''
  if (!exprs.length) return strings.join('')
  if (!strings.length) return exprs.join('')

  // capture first expression through to last expression and strings between
  let s = ''
  s += exprs[0] || ''
  s = strings.slice(1, -1)
      .reduce((acc, str, i) => acc + (str || '') + (exprs[i + 1] || ''), s)
  s += exprs.slice(strings.length - 1).join('') || ''

  return outerspace.wrap(strings[0], s, strings[strings.length - 1])
}

/*
  Wrap first and third arguments around second and move leading/trailing
  whitespace in second argument to the start/end of the return (respectively).
  If second argument is only whitespace, concatenate arguments in order instead.
*/
outerspace.wrap = function (before, s, after) {
  if (!s) return (before || '') + (after || '')
  if (!s.trim()) return (before || '') + (s || '') + (after || '')
  let acc = ''
  acc += s.match(RE_LEADING)[0] || ''
  acc += before || ''
  acc += s.trim() || ''
  acc += after || ''
  acc += s.match(RE_TRAILING)[0] || ''
  return acc
}

/*
  Prepend second argument to first and move leading whitespace in first to the
  start of the return.
  If first argument is only whitespace, concatenate arguments (second + first).
*/
outerspace.before = function (s, before) {
  if (!s) return before || ''
  if (!s.trim()) return (before || '') + (s || '')
  return s.match(RE_LEADING)[0] + (before || '') + s.replace(RE_LEADING, '')
}

/*
  Append second argument to first and move trailing whitespace in first to the
  end of the return.
  If first argument is only whitespace, concatenate arguments (first + second).
*/
outerspace.after = function (s, after) {
  if (!s) return after || ''
  if (!s.trim()) return (s || '') + (after || '')
  return s.replace(RE_TRAILING, '') + (after || '') + s.match(RE_TRAILING)[0]
}
