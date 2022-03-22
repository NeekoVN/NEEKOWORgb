color1 color picker: store value in --base var
color2 color picker: store value in --complimentary2 var
(convert hsl to rgba)

--base: chọn ngẫu nhiên h = 220 đến h = 360
--complimentary1: --base + 30
--complimentary2: --base + 60

update

chọn main color, lưu vào --base
màu còn lại để js pick
--base --complimentary2

page load
> lấy color data (HSL) từ --base
> convert sang RGB
> cho vào value của color picker

update

color picker laays hsl value