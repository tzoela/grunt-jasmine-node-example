var x = require('../lib/mymodule');

describe('Talon Testers', function()
{
  console.log("Running " + __filename)

  it("should find and md5 my surname", function() {
    expect(x("john")).toBe("fc6521ab309d77100bd67db0719ad2dd");
  });

  it("should return unknown name", function() {
    expect(x("some unknown name")).toBe("unknown name");
  });
});
