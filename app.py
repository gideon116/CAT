from flask import render_template, Flask, request, send_file, redirect, url_for
from PIL import Image
import io
from rdkit.Chem.Draw import IPythonConsole
from requests.models import requote_uri
from Working_DRDP import meths
import os
import numpy as np
import base64


app = Flask(__name__)

connect = []
dataString = ''
post1 = ['0']

im = Image.open("./static/images/newReaction.png")
arr1 = np.asarray(im)
img1 = Image.fromarray(arr1.astype('uint8'))
data1 = io.BytesIO()
img1.save(data1, "PNG")
encoded_img_data = []
encoded_img_data.append(base64.b64encode(data1.getvalue())) ## value will be replaced

new_im = Image.open('./static/images/newReaction.png') ## value will be replaced
tests = ['0']
tests2 = ['0']

@app.route("/post1", methods=['GET', 'POST'])
def log():

    if request.method == 'POST':
        post1.append(request.json)

        list1, listelse = meths.main(request.json['product'], request.json['reactant'])
        tests2.append(len(list1))

        if len(list1) == 0:

            images = []
            for ex in listelse:
                for i in ex[::-1]: 
                    image1 = io.BytesIO(IPythonConsole._toReactionPNG(i))
                    images.append(Image.open(image1))
                break

            widths, heights = zip(*(i.size for i in images))
            total_width = max(widths)
            max_height = sum(heights)

            new_im = Image.new('RGB', (total_width, max_height), (255, 255, 255))
            x_offset = 0 

            for im in images:
                new_im.paste(im, (0, x_offset))
                x_offset += im.size[1]

            arr = np.asarray(new_im)
            img = Image.fromarray(arr.astype('uint8'))

            file_object = io.BytesIO()
            img.save(file_object, 'PNG')
            file_object.seek(0)
            tests.append('1a')
            
            encoded_img_data.append(base64.b64encode(file_object.getvalue()))

            return redirect('/result2')
        else:
            images = []
            for ex in list1:
                for i in ex[::-1]: ## i is a list of all the steps in a specific pathway
                    image1 = io.BytesIO(IPythonConsole._toReactionPNG(i))
                    images.append(Image.open(image1))
                break

            widths, heights = zip(*(i.size for i in images))
            total_width = max(widths)
            max_height = sum(heights)

            new_im = Image.new('RGB', (total_width, max_height), (255, 255, 255))
            x_offset = 0 

            for im in images:
                new_im.paste(im, (0, x_offset))
                x_offset += im.size[1]

            arr = np.asarray(new_im)
            img = Image.fromarray(arr.astype('uint8'))

            file_object = io.BytesIO()
            img.save(file_object, 'PNG')
            file_object.seek(0)
            tests.append('1b')
            
            encoded_img_data.append(base64.b64encode(file_object.getvalue()))
            return redirect('/result')

    else:
        if tests2[-1] == 0:
            return "0"
        else:
            return "1"


@app.route("/result", methods=['GET', 'POST'])
def result():

    if request.method == 'POST' or 'GET':
        return render_template("result.html", u_image = encoded_img_data[-1].decode('utf-8'))

@app.route("/result2", methods=['GET', 'POST'])
def result2():

    if request.method == 'POST' or 'GET':
        return render_template("result2.html", u_image = encoded_img_data[-1].decode('utf-8'))

        
@app.route("/")
def index():
    return render_template("main.html", u_image = encoded_img_data[-1].decode('utf-8'))

if __name__ == '__main__': 
    app.run(port=3000)







# import sys
# from Working_DRDP import meths
# from smiles import meths1
# # mylist = {'key': 'value'}
# # smiles = requests.get('127.0.0.1:3000/post12')
# # requests.post('/post1', data = json.dumps(mylist), headers={'content-type': 'application/json'})
# # print(smiles.json())
# # symbol = requests.get('http://127.0.0.1:3000/post12')
# # symbol = meths.main(sys.argv[1])
# # print(meths.main(sys.argv[1]))
# def in_nested_list(my_list, item):

#     if item in my_list:
#         return True
#     else:
#         return any(in_nested_list(sublist, item) for sublist in my_list if isinstance(sublist, list))


# # reactant = sys.argv[2]
# # product = sys.argv[1]
# reactant = 'C1CCOC1'
# product = 'CCCC(C#CC)(O)C'
# symbol = meths.main(product, reactant)

# print(symbol)

