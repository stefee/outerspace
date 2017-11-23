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
