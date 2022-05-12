/**
 * @author ramkishore
 */

// const {add} = require("../../src/math");
import add from '../../src/math';

test("Can add numbers", () => {
   //GIVEN
   const n1 = 25;
   const n2 = 35;
   const expected = 60;

   //WHEN
    const actual = add(n1, n2);

    //THEN
    expect(actual).toBe(expected);
});