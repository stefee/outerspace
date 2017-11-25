#!/usr/bin/env node

const test = require('tape')
const outerspace = require('.')

test('explode single', function (t) {
  t.plan(1)
  t.equal(outerspace`**${'\n Exclamation! \n\n'}**`, '\n **Exclamation!** \n\n')
  t.end()
})

test('explode multiple', function (t) {
  t.plan(1)
  t.equal(outerspace`**${'\n\n Holy'} ${'Exclamation '}${'Batman! \n'}**`, '\n\n **Holy Exclamation Batman!** \n')
  t.end()
})

test('explode empty string', function (t) {
  t.plan(1)
  t.equal(outerspace``, '')
  t.end()
})

test('explode only whitespace', function (t) {
  t.plan(1)
  t.equal(outerspace`  `, '  ')
  t.end()
})

test('explode empty expr', function (t) {
  t.plan(1)
  t.equal(outerspace` ${''} `, '  ')
  t.end()
})

test('explode null expr', function (t) {
  t.plan(1)
  t.equal(outerspace` ${null} `, '  ')
  t.end()
})

test('explode undefined expr', function (t) {
  t.plan(1)
  t.equal(outerspace` ${void 0} `, '  ')
  t.end()
})
