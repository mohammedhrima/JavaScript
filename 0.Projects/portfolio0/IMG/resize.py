import PIL
from PIL import Image
image = Image.open('022.jpg')
new = image.resize((534,356))
#width,height= image.size
#print(width,height)


new.save('023.jpg')