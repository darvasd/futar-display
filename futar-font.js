/* The pixels of each character are encoded column by column.
Each pixel in a column has a power of two assigned to it, from top
to bottom, starting from 1. The numbers below are the sums of these
assigned numbers.

E.g. 1+4+16+64 = 85 is a 7-pixel tall, dotted vertical line.
A 3-pixel wide vertical line like this will be encoded as [85, 85, 85].
*/

var DIGITS = {
	"1" : [66,127,64],
	"2" : [66,97,81,73,70],
	"3" : [33,65,69,75,49],
	"4" : [24,20,18,127,16],
	"5" : [71,69,69,69,57],
	"6" : [60,74,73,73,48],
	"7" : [1,113,9,5,3],
	"8" : [54,73,73,73,54],
	"9" : [6,73,73,41,30],
	"0" : [62,65,65,65,62],
	"'" : [3],
	"*" : [42,28,8,28,42],
	" " : [0,0,0,0],
	
	"," : [64,48],
	"." : [64],
	"a" : [32,84,84,84,120],
	"á" : [32,84,86,85,120],
	"b" : [127,72,68,68,56],
	"c" : [56,68,68,68,32],
	"d" : [56,68,68,72,127],
	"e" : [56,84,84,84,24],
	"é" : [56,84,86,85,24],
	"f" : [8,126,9,1],
	"g" : [8,84,84,84,60],
	"h" : [127,8,4,4,120],
	"i" : [68,125,64],
	"í" : [72,122,65],
	"j" : [64,68,61],
	"k" : [127,16,40,68],
	"l" : [65,127,64],
	"m" : [124,8,4,124,8,4,124],
	"n" : [124,8,4,4,120],
	"o" : [56,68,68,68,56],
	"ó" : [48,72,74,73,48],
	"ö" : [48,74,72,74,48],
	"ő" : [48,74,73,74,49],
	"p" : [124,20,36,36,24],
	"q" : [24,36,36,20,124],
	"r" : [124,8,4,4],
	"s" : [8,84,84,84,32],
	"t" : [4,63,68,64],
	"u" : [60,64,64,64,60],
	"ú" : [60,64,66,65,60],
	"ű" : [56,66,65,66,57],
	"ü" : [60,65,64,65,60],
	"v" : [28,32,64,32,28],
	"w" : [28,32,64,48,64,32,28],
	"x" : [68,40,16,40,68],
	"y" : [76,80,32,16,12],
	"z" : [68,100,84,76,68],

	"!" : [95],
	"Á" : [120,20,22,21,120],
	"A" : [126,17,17,17,126],
	"B" : [127,73,73,73,54],
	"C" : [62,65,65,65,34],
	"D" : [127,65,65,34,28],
	"É" : [124,86,85,84],
	"E" : [127,73,73,65],
	"F" : [127,9,9,1],
	"G" : [62,65,65,73,121],
	"H" : [127,8,8,8,127],
	"Í" : [122,1],
	"I" : [127],
	"J" : [32,64,64,32,31],
	"K" : [127,8,20,34,65],
	"L" : [127,64,64,64,64],
	"M" : [127,2,4,8,4,2,127],
	"N" : [127,4,8,16,127],
	"Ó" : [56,68,70,69,56],
	"O" : [62,65,65,65,62],
	"Ő" : [56,70,69,70,57],
	"Ö" : [57,68,68,68,57],
	"P" : [127,9,9,9,6],
	"Q" : [62,65,65,97,62,64],
	"R" : [127,9,25,41,70],
	"S" : [70,73,73,73,49],
	"T" : [1,1,127,1,1],
	"Ú" : [60,64,66,65,60],
	"U" : [63,64,64,64,63],
	"Ű" : [60,66,65,66,61],
	"Ü" : [61,64,64,64,61],
	"V" : [31,32,64,32,31],
	"W" : [63,64,64,48,64,64,63],
	"X" : [65,34,20,8,20,34,65],
	"Y" : [3,4,120,4,3],
	"Z" : [97,81,73,69,67],
	"-" : [8,8,8,8,8],

	"(" : [62,65],
	")" : [65,62],
	"/" : [32,16,8,4,2],

};