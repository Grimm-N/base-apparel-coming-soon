from fontTools.ttLib import TTFont

input_file = "./fonts/JosefinSans-VariableFont_wght.ttf"

font = TTFont(input_file)

output_file_woff = "./fonts/JosefinSans-VariableFont_wght.woff"
font.flavor = 'woff'
font.save(output_file_woff)

output_file_woff2 = "./fonts/JosefinSans-VariableFont_wght.woff2"
font.flavor = 'woff2'
font.save(output_file_woff2)

print("Fonts converted successfully!")
