var assert = require('assert')
  , genpnp = require('..');

describe('genpnp', function() {
  it('should return the correct comparing prefix', function() {
    var p;
    p = genpnp.parse('>=example-text/package-4.2-r23');
    assert.equal(p.prefix, '>=');
    p = genpnp.parse('example-text/package');
    assert.equal(p.prefix, undefined);
    p = genpnp.parse('<=example-text/package-4.2-r23');
    assert.equal(p.prefix, '<=');
    p = genpnp.parse('=example-text/package-4.2-r23');
    assert.equal(p.prefix, '=');
  })
  it('should return the correct version', function() {
    var p;
    p = genpnp.parse('>=example-text/package-4.2-r23');
    assert.equal(p.version, '4.2-r23');
    p = genpnp.parse('>=example-text/package-4.2');
    assert.equal(p.version, '4.2');
    p = genpnp.parse('>=example-text/package-r9999');
    assert.equal(p.version, 'r9999');
    p = genpnp.parse('example-text/package');
    assert.equal(p.version, undefined);
  })
  it('should return the correct name', function() {
    var p;
    p = genpnp.parse('>=example-text/package-4.2-r23');
    assert.equal(p.name, 'package');
    p = genpnp.parse('>=example-text/package-v42-2.3');
    assert.equal(p.name, 'package-v42');
    p = genpnp.parse('example-text/package-v42');
    assert.equal(p.name, 'package-v42');
  })
  it('should return the correct slot', function() {
    var p;
    p = genpnp.parse('example-text/package:4.2');
    assert.equal(p.slot, '4.2');
  })
})