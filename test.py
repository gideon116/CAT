from rdkit import Chem
from rdkit.Chem import AllChem
from PIL import Image
import json
import io
from rdkit.Chem.Draw import IPythonConsole
import sys
from Working_DRDP import meths

list1 = meths.main('CCCC(C#CC)(O)C', 'C1CCOC1')
print(list1)
for ex in list1:
    imgg = []
    for i in ex[::-1]: ## i is a list of all the steps in a specific pathway
        image1 = io.BytesIO(IPythonConsole._toReactionPNG(i))
        imgg.append(image1)

    images = [Image.open(x) for x in imgg]
    widths, heights = zip(*(i.size for i in images))

    total_width = max(widths)
    max_height = sum(heights)

    new_im = Image.new('RGB', (total_width, max_height))

    x_offset = 0
    for im in images:
        new_im.paste(im, (0, x_offset))
        x_offset += im.size[1]

# images = []
# for ind, ex in enumerate(list1):
#     for i in ex[::-1]: ## i is a list of all the steps in a specific pathway
#         image1 = io.BytesIO(IPythonConsole._toReactionPNG(i))
#         images.append(Image.open(image1))

#     images.append(Image.open('newReaction.png'))
# widths, heights = zip(*(i.size for i in images))

# total_width = max(widths)
# max_height = sum(heights)

# new_im = Image.new('RGB', (total_width, max_height))

# x_offset = 0 
# for im in images:
#     new_im.paste(im, (0, x_offset))
#     x_offset += im.size[1]
    new_im.show()