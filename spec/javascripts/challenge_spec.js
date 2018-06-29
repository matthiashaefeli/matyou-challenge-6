describe('test', function() {
  it('returns a given string', function() {
    expect(test('Hello World')).toEqual('Hello World');
  });
});

describe('permutation palindrome', function() {
  it('returns true if any permutatuon of a string is a palindrome', function() {
    expect(permutationPalindrome('civic')).toBe(true);
  });

  it('returns true if any permutation of a string is a palindrome', function() {
    expect(permutationPalindrome('ivicc')).toBe(true);
  });

  it('returns false if none permutatuin of a string is a palindrome', function() {
    expect(permutationPalindrome('civi')).toBe(false);
  });

  it('returns false if none permutation of a string is a palindrome', function() {
    expect(permutationPalindrome('livci')).toBe(false);
  });
});

describe('order weight', function() {
  it('orders the given number in order or their sum', function() {
    expect(orderWeight('103 123 4444 99 2000')).toEqual('2000 103 123 4444 9');
  });

  it('orders the given number in order of their sum', function() {
		expect(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')).toEqual(
			'2000 11 11 10003 22 123 1234000 44444444 9999'
		);
	});
});

describe('removeElement', function() {
	it('removes from first array all elemnets given as second argument', function() {
		expect(removeElement([1, 2], [1])).toEqual([2]);
	});

	it('removes from first array all elements given as second argument', function() {
		expect(removeElement(['a', 'b', 'c', 'a'], ['a'])).toEqual(['b', 'c']);
	});
});

describe('anagrams', function() {
	it('returns an array with anagram from an given argument', function() {
		expect(anagram('aba', ['aba', 'abba', 'ab', 'bba', 'baa', 'aab'])).toEqual(['aba', 'baa', 'aab']);
	});

	it('returns an array with anagram from an given argument', function() {
		expect(anagram('cde', ['cdef', 'dc', 'cde', 'dec', 'dce', 'aab'])).toEqual(['cde', 'dec', 'dce']);
	});
});

describe('pairs', function() {
	it('returns a given string in pairs, given as second argument, last pair with underscore', function() {
		expect(pairs('abcd', 2)).toEqual(['ab', 'cd']);
	});

	it('returns a given string in pairs, given as second argument, last pair with underscore', function() {
		expect(pairs('abcdefghi', 2)).toEqual(['ab', 'cd', 'ef', 'gh', 'i_']);
	});

	it('returns a given string in pairs, given as second argument, last pair with underscore', function() {
		expect(pairs('abcdefgh', 2)).toEqual(['ab', 'cd', 'ef', 'gh']);
	});

	it('returns a given string in pairs, given as second argument, last pair with underscore', function() {
		expect(pairs('zzzbbbuuutttddde', 3)).toEqual(['zzz', 'bbb', 'uuu', 'ttt', 'ddd', 'e__']);
	});
});

describe('scramble', function() {
	it('returns true if the argument 1 includes argument 2 else returns false', function() {
		expect(scramble('rkqodlw', 'world')).toEqual(true);
	});

	it('returns true if the argument 1 includes argument 2 else returns false', function() {
		expect(scramble('cedewaraaossoqqyt', 'codewars')).toEqual(true);
	});

	it('returns true if the argument 1 includes argument 2 else returns false', function() {
		expect(scramble('jscripts', 'javascript')).toEqual(false);
	});
});

describe('triple double', function() {
	it('returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2', function() {
		expect(tripleDouble(451999277, 41177722899)).toEqual(1);
	});

	it('returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2', function() {
		expect(tripleDouble(1222345, 12345)).toEqual(0);
	});

	it('returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2', function() {
		expect(tripleDouble(10560002, 100)).toEqual(1);
	});
});

describe('mean', function() {
	it('returns an array, array[0] is iqual to the numbers and array[1] is same order of all letters', function() {
		var lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0'];
		expect(mean(lst)).toEqual([36, 'udiwstagwo']);
	});

	it('returns an array, array[0] is iqual to the numbers and array[1] is same order of all letters', function() {
		var lst = ['0', 'c', '7', 'x', '6', '2', '3', '5', 'w', '7', '0', 'y', 'v', 'u', 'h', 'i', 'n', 'u', '0', '0'];
		expect(mean(lst)).toEqual([30, 'cxwyvuhinu']);
	});

	it('returns an array, array[0] is iqual to the numbers and array[1] is same order of all letters', function() {
		var lst = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', 'a', 'a', 'd', 'd', 'g', 'q', 'u', 'v', 'y', 'y'];
		expect(mean(lst)).toEqual([10, 'aaddgquvyy']);
	});
});

describe('basicOp', function() {
	it('returns result of given operation', function() {
		expect(basicOp('+', 4, 7)).toEqual(11);
	});

	it('returns result of given operation', function() {
		expect(basicOp('-', 7, 4)).toEqual(3);
	});

	it('returns result of given operation', function() {
		expect(basicOp('*', 2, 3)).toEqual(6);
	});

	it('returns result of given operation', function() {
		expect(basicOp('/', 10, 2)).toEqual(5);
	});
});

describe('chooseBestSum', function() {
	it('arg1 is sum, arg2 items and arg3 the list. return best sum of list with number of items', function() {
		var lst = [50, 55, 56, 57, 58];
		expect(chooseBestSum(163, 3, lst)).toEqual(163);
	});

	it('arg1 is sum, arg2 items and arg3 the list. return best sum of list with number of items', function() {
		var lst = [50];
		expect(chooseBestSum(163, 3, lst)).toEqual(null);
	});

	it('arg1 is sum, arg2 items and arg3 the list. return best sum of list with number of items', function() {
		var lst = [91, 74, 73, 85, 73, 81, 87];
		expect(chooseBestSum(230, 3, lst)).toEqual(228);
	});
});


