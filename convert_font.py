from fontTools.ttLib import TTFont

input_file = "C:/Users/natal/OneDrive/Desktop/Challenge/base-apparel-coming-soon/fonts/JosefinSans-VariableFont_wght.ttf"

font = TTFont(input_file)

output_file_woff = "C:/Users/natal/OneDrive/Desktop/Challenge/base-apparel-coming-soon/fonts/JosefinSans-VariableFont_wght.woff"
font.save(output_file_woff)

output_file_woff2 = "C:/Users/natal/OneDrive/Desktop/Challenge/base-apparel-coming-soon/fonts/JosefinSans-VariableFont_wght.woff2"
font.save(output_file_woff2)

print("Fonts converted successfully!")
