module.exports = outerspace

/*
  Template function: move leading/trailing whitespace in the first/last
  template keys to the start/end of the string (respectively).
*/
function outerspace (strings, ...keys) {
  if (!keys.length && !strings.length) return ''
  if (!keys.length) return strings.join('')
  if (!strings.length) return keys.join('')

  const firstKey = keys[0]
  const lastKey = keys[keys.length - 1]
  const leadingSpace = firstKey.match(/^\s*/)[0]
  const trailingSpace = lastKey.match(/\s*$/)[0]

  let acc = ''
  acc += leadingSpace
  acc += strings[0]
  acc += firstKey.replace(/^\s*/, '')
  if (strings.length > 1) {
    acc = strings.slice(1, -1)
        .reduce((acc, str, i) => acc + str + (keys[i + 1] || ''), acc)
  }
  if (keys.length > strings.length) {
    acc += keys.slice(strings.length - 1).join('')
  }
  acc = acc.replace(/\s*$/, '')
  acc += strings[strings.length - 1]
  acc += trailingSpace
  return acc
}
