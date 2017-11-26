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
  t.plan(1)
  t.equal(outerspace` ${'    '} `, '      ')
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

// outerspace.before

test('before', function (t) {
  t.plan(1)
  t.equal(outerspace.before('  llo', 'he'), '  hello')
  t.end()
})

test('before multiple', function (t) {
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
  t.plan(1)
  t.equal(outerspace.before('  ', '   '), '     ')
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

// after

test('after', function (t) {
  t.plan(1)
  t.equal(outerspace.after('he  ', 'llo'), 'hello  ')
  t.end()
})

test('after multiple', function (t) {
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
  t.plan(1)
  t.equal(outerspace.after('  ', '   '), '     ')
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
