# <rect style="fill:#ff7f2a;fill-opacity:1;stroke:none" id="rect3087" width="1.777" height="2.586987" x="133.15073" y="126.87455" />

$PIXELS_X = 192;
$PIXELS_Y = 48;

$TOPLEFT_X = 133.15073
$TOPLEFT_Y = 126.87455
$WIDTH = 1.777
$HEIGHT = 2.586987
$SHIFT_X = $WIDTH * 1.3
$SHIFT_Y = $HEIGHT * 1.3

for j in 0..($PIXELS_Y-1) do
	y = $TOPLEFT_Y + j * $SHIFT_Y;
	for i in 0..($PIXELS_X-1) do
		x = $TOPLEFT_X + i * $SHIFT_X;
		puts("<rect style='fill:#ff7f2a;fill-opacity:1;stroke:none' id='pixel_#{i}_#{j}' width='#{$WIDTH}' height='#{$HEIGHT}' x='#{x}' y='#{y}' />");
	end
end
