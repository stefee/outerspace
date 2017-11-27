#!/usr/bin/env node

const test = require('tape')
const outerspace = require('.')

// outerspace

test('outerspace single', function (t) {
  t.plan(1)
  t.equal(outerspace`**${'\n Exclamation! \n\n'}**`, '\n **Exclamation!** \n\n')
  t.end()
})

test('outerspace multiple', function (t) {
  t.plan(1)
  t.equal(outerspace`**${'\n\n Holy'} ${'Exclamation '}${'Batman! \n'}**`, '\n\n **Holy Exclamation Batman!** \n')
  t.end()
})

test('outerspace empty string', function (t) {
  t.plan(1)
  t.equal(outerspace``, '')
  t.end()
})

test('outerspace only whitespace', function (t) {
  t.plan(1)
  t.equal(outerspace`  `, '  ')
  t.end()
})

test('outerspace empty expr', function (t) {
  t.plan(1)
  t.equal(outerspace` ${''} `, '  ')
  t.end()
})

test('outerspace only whitespace expr', function (t) {
  t.plan(4)
  t.equal(outerspace` ${'    '} `, '      ')
  t.equal(outerspace` ${'    '}\n `, '     \n ')
  t.equal(outerspace` \n${'    '} `, ' \n     ')
  t.equal(outerspace` ${' \n   '} `, '  \n    ')
  t.end()
})

test('outerspace null expr', function (t) {
  t.plan(1)
  t.equal(outerspace` ${null} `, '  ')
  t.end()
})

test('outerspace undefined expr', function (t) {
  t.plan(1)
  t.equal(outerspace` ${void 0} `, '  ')
  t.end()
})

// outerspace.wrap

test('wrap', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('hi ', '   he  ', 'llo'), '   hi hello  ')
  t.end()
})

test('wrap multiple words', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('hi ', '   he  \n ', 'llo world'), '   hi hello world  \n ')
  t.end()
})

test('wrap empty', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('', '', ''), '')
  t.end()
})

test('wrap only whitespace', function (t) {
  t.plan(3)
  t.equal(outerspace.wrap('  ', '   ', '\n '), '     \n ')
  t.equal(outerspace.wrap(' \n', '   ', '  '), ' \n     ')
  t.equal(outerspace.wrap(' ', '  \n ', '  '), '   \n   ')
  t.end()
})

test('wrap empty first argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('', 'hello', ' world'), 'hello world')
  t.equal(outerspace.wrap('', 'hello ', 'world'), 'helloworld ')
  t.end()
})

test('wrap empty second argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello', '', ' world'), 'hello world')
  t.equal(outerspace.wrap('hello ', '', 'world'), 'hello world')
  t.end()
})

test('wrap empty third argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello ', 'world', ''), 'hello world')
  t.equal(outerspace.wrap('hello', ' world', ''), ' helloworld')
  t.end()
})

test('wrap null first argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap(null, 'hello', ' world'), 'hello world')
  t.equal(outerspace.wrap(null, 'hello ', 'world'), 'helloworld ')
  t.end()
})

test('wrap null second argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello', null, ' world'), 'hello world')
  t.equal(outerspace.wrap('hello ', null, 'world'), 'hello world')
  t.end()
})

test('wrap null third argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello ', 'world', null), 'hello world')
  t.equal(outerspace.wrap('hello', ' world', null), ' helloworld')
  t.end()
})

test('wrap undefined first argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap(void 0, 'hello', ' world'), 'hello world')
  t.equal(outerspace.wrap(void 0, 'hello ', 'world'), 'helloworld ')
  t.end()
})

test('wrap undefined second argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello', void 0, ' world'), 'hello world')
  t.equal(outerspace.wrap('hello ', void 0, 'world'), 'hello world')
  t.end()
})

test('wrap undefined third argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello ', 'world', void 0), 'hello world')
  t.equal(outerspace.wrap('hello', ' world', void 0), ' helloworld')
  t.end()
})

test('wrap empty first argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('', '   ', '\n'), '\n   ')
  t.end()
})

test('wrap empty second argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '', '\n'), '   \n')
  t.end()
})

test('wrap empty third argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '\n', ''), '\n   ')
  t.end()
})

test('wrap null first argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap(null, '   ', '\n'), '\n   ')
  t.end()
})

test('wrap null second argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', null, '\n'), '   \n')
  t.end()
})

test('wrap null third argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '\n', null), '\n   ')
  t.end()
})

test('wrap undefined first argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap(void 0, '   ', '\n'), '\n   ')
  t.end()
})

test('wrap undefined second argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', void 0, '\n'), '   \n')
  t.end()
})

test('wrap undefined third argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '\n', void 0), '\n   ')
  t.end()
})

// outerspace.before

test('before', function (t) {
  t.plan(1)
  t.equal(outerspace.before('  llo', 'he'), '  hello')
  t.end()
})

test('before multiple words', function (t) {
  t.plan(1)
  t.equal(outerspace.before('  \n llo world', 'he'), '  \n hello world')
  t.end()
})

test('before empty', function (t) {
  t.plan(1)
  t.equal(outerspace.before('', ''), '')
  t.end()
})

test('before only whitespace', function (t) {
  t.plan(2)
  t.equal(outerspace.before('  ', '   '), '     ')
  t.equal(outerspace.before('  ', ' \n'), ' \n  ')
  t.end()
})

test('before empty first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('', 'hello'), 'hello')
  t.end()
})

test('before empty second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('hello', ''), 'hello')
  t.end()
})

test('before null first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before(null, 'hello'), 'hello')
  t.end()
})

test('before null second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('hello', null), 'hello')
  t.end()
})

test('before empty first argument, whitespace second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('', '   '), '   ')
  t.end()
})

test('before empty second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('   ', ''), '   ')
  t.end()
})

test('before null first argument, whitespace second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before(null, '   '), '   ')
  t.end()
})

test('before null second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('   ', null), '   ')
  t.end()
})

test('before undefined first argument, whitespace second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before(void 0, '   '), '   ')
  t.end()
})

test('before undefined second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('   ', void 0), '   ')
  t.end()
})

// outerspace.after

test('after', function (t) {
  t.plan(1)
  t.equal(outerspace.after('he  ', 'llo'), 'hello  ')
  t.end()
})

test('after multiple words', function (t) {
  t.plan(1)
  t.equal(outerspace.after('he  \n ', 'llo world'), 'hello world  \n ')
  t.end()
})

test('after empty', function (t) {
  t.plan(1)
  t.equal(outerspace.after('', ''), '')
  t.end()
})

test('after only whitespace', function (t) {
  t.plan(2)
  t.equal(outerspace.after('  ', '   '), '     ')
  t.equal(outerspace.after('  ', '\n '), '  \n ')
  t.end()
})

test('after empty first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('', 'hello'), 'hello')
  t.end()
})

test('after empty second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('hello', ''), 'hello')
  t.end()
})

test('after null first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after(null, 'hello'), 'hello')
  t.end()
})

test('after null second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('hello', null), 'hello')
  t.end()
})

test('after empty first argument, whitespace second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('', '   '), '   ')
  t.end()
})

test('after empty second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('   ', ''), '   ')
  t.end()
})

test('after null first argument, whitespace second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after(null, '   '), '   ')
  t.end()
})

test('after null second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('   ', null), '   ')
  t.end()
})

test('after undefined first argument, whitespace second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after(void 0, '   '), '   ')
  t.end()
})

test('after undefined second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('   ', void 0), '   ')
  t.end()
})
