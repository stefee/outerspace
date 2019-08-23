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
  t.plan(2)
  t.equal(outerspace`*${''}/`, '*/')
  t.equal(outerspace` ${''} `, '  ')
  t.end()
})

test('outerspace only expr', function (t) {
  t.plan(1)
  t.equal(outerspace`${'hey'}`, 'hey')
  t.end()
})

test('outerspace only whitespace expr', function (t) {
  t.plan(1)
  t.equal(outerspace`${' \n  '}`, ' \n  ')
  t.end()
})

test('outerspace empty before', function (t) {
  t.plan(2)
  t.equal(outerspace`${'hey '}*`, 'hey* ')
  t.equal(outerspace`${'hey '} `, 'hey  ')
  t.end()
})

test('outerspace empty before, whitespace expr', function (t) {
  t.plan(2)
  t.equal(outerspace`${'  \n '}*`, '  \n *')
  t.equal(outerspace`${'  \n '} `, '  \n  ')
  t.end()
})

test('outerspace empty after', function (t) {
  t.plan(2)
  t.equal(outerspace`*${' hey'}`, ' *hey')
  t.equal(outerspace` ${' hey'}`, '  hey')
  t.end()
})

test('outerspace empty after, whitespace expr', function (t) {
  t.plan(2)
  t.equal(outerspace`*${'  \n '}`, '*  \n ')
  t.equal(outerspace` ${'  \n '}`, '   \n ')
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
  t.equal(outerspace` ${undefined} `, '  ')
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
  t.equal(outerspace.wrap('', '\nhello\n', ' world'), '\nhello world\n')
  t.equal(outerspace.wrap('', '\nhello \n', 'world'), '\nhelloworld \n')
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
  t.equal(outerspace.wrap('hello ', '\nworld\n', ''), '\nhello world\n')
  t.equal(outerspace.wrap('hello', '\nworld\n', ''), '\nhelloworld\n')
  t.end()
})

test('wrap null first argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap(null, '\nhello\n', ' world'), '\nhello world\n')
  t.equal(outerspace.wrap(null, '\nhello \n', 'world'), '\nhelloworld \n')
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
  t.equal(outerspace.wrap('hello ', '\nworld\n', null), '\nhello world\n')
  t.equal(outerspace.wrap('hello', '\n world\n', null), '\n helloworld\n')
  t.end()
})

test('wrap undefined first argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap(undefined, '\nhello\n', ' world'), '\nhello world\n')
  t.equal(outerspace.wrap(undefined, '\nhello \n', 'world'), '\nhelloworld \n')
  t.end()
})

test('wrap undefined second argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello', undefined, ' world'), 'hello world')
  t.equal(outerspace.wrap('hello ', undefined, 'world'), 'hello world')
  t.end()
})

test('wrap undefined third argument', function (t) {
  t.plan(2)
  t.equal(outerspace.wrap('hello ', '\nworld\n', undefined), '\nhello world\n')
  t.equal(outerspace.wrap('hello', '\n world\n', undefined), '\n helloworld\n')
  t.end()
})

test('wrap empty first argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('', '   ', '\n'), '   \n')
  t.end()
})

test('wrap empty second argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '', '\n'), '   \n')
  t.end()
})

test('wrap empty third argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '\n', ''), '   \n')
  t.end()
})

test('wrap null first argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap(null, '   ', '\n'), '   \n')
  t.end()
})

test('wrap null second argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', null, '\n'), '   \n')
  t.end()
})

test('wrap null third argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '\n', null), '   \n')
  t.end()
})

test('wrap undefined first argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap(undefined, '   ', '\n'), '   \n')
  t.end()
})

test('wrap undefined second argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', undefined, '\n'), '   \n')
  t.end()
})

test('wrap undefined third argument, whitespace other arguments', function (t) {
  t.plan(1)
  t.equal(outerspace.wrap('   ', '\n', undefined), '   \n')
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
  t.equal(outerspace.before('', ' hello\n'), ' hello\n')
  t.end()
})

test('before empty second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('\nhello\n', ''), '\nhello\n')
  t.end()
})

test('before null first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before(null, ' hello\n'), ' hello\n')
  t.end()
})

test('before null second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('\nhello\n', null), '\nhello\n')
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
  t.equal(outerspace.before(undefined, '   '), '   ')
  t.end()
})

test('before undefined second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.before('   ', undefined), '   ')
  t.end()
})

// outerspace.after

test('after', function (t) {
  t.plan(2)
  t.equal(outerspace.after('he  ', 'llo'), 'hello  ')
  t.equal(outerspace.after('he  ', 'llo\n'), 'hello\n  ')
  t.end()
})

test('after multiple words', function (t) {
  t.plan(2)
  t.equal(outerspace.after('he  \n ', 'llo world'), 'hello world  \n ')
  t.equal(outerspace.after('he  \n ', 'llo world\n'), 'hello world\n  \n ')
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
  t.equal(outerspace.after('', 'hello\n'), 'hello\n')
  t.end()
})

test('after empty second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('hello\n', ''), 'hello\n')
  t.end()
})

test('after null first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after(null, 'hello\n'), 'hello\n')
  t.end()
})

test('after null second argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('hello\n', null), 'hello\n')
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
  t.equal(outerspace.after(undefined, '   '), '   ')
  t.end()
})

test('after undefined second argument, whitespace first argument', function (t) {
  t.plan(1)
  t.equal(outerspace.after('   ', undefined), '   ')
  t.end()
})
