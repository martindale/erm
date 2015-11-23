var erm = require('../');
var assert = require('assert');

describe('erm', function() {
  describe('#erm()', function () {
    it('should return an appropriate test string.', function () {
      assert.equal('ER MAH GERD.', erm('Oh my god.'));
    });
    it('should also translate other text.', function () {
      assert.equal('YER MAHTHER ERS NERC.', erm('Your mother is nice.'));
    });
    it('should be in all caps.', function () {
      var text = 'Your mother is nice.';
      var trans = erm('YER MAHTHER ERS NERC.');
      assert.equal('YER MAHTHER ERS NERC.'.toUpperCase(), trans);
    });
  });
});
