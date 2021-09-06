from flask import render_template, Flask, request, redirect
from PIL import Image
import io
from rdkit.Chem.Draw import IPythonConsole
from Working_DRDP import meths
import numpy as np
import base64


app = Flask(__name__)

connect = []
dataString = ''
post1 = ['0']

im = Image.open("./static/images/reset-page.png")
arr1 = np.asarray(im)
img1 = Image.fromarray(arr1.astype('uint8'))
data1 = io.BytesIO()
img1.save(data1, "PNG")
encoded_img_data = []
encoded_img_data.append(base64.b64encode(data1.getvalue())) ## value will be replaced

new_im = Image.open('./static/images/reset-page.png') ## value will be replaced
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

            arr = np.asarray(new_im)
            return {'arg':arr.tolist()}

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
            return {'arg':arr.tolist()}

    else:
        if tests2[-1] == 0:
            return "0"
        else:
            return "1"


dataA = []
@app.route("/resulta", methods=['GET', 'POST'])
def resulta():
    
    if request.method == 'POST':
        dataA.clear()
        dataA.append(request.json['dataaa'])

        return 'base64.b64encode(file_object.getvalue())'


@app.route("/result", methods=['GET', 'POST'])
def result():
    if request.method == 'GET':
        img = Image.fromarray(np.asarray(dataA[-1]).astype('uint8'))

        file_object = io.BytesIO()
        img.save(file_object, 'PNG')
        file_object.seek(0)
        tests.append('1b')
        
        return render_template("result.html", u_image = base64.b64encode(file_object.getvalue()).decode('utf-8'))

@app.route("/result2", methods=['GET', 'POST'])
def result2():
    if request.method == 'GET':
        img = Image.fromarray(np.asarray(dataA[-1]).astype('uint8'))

        file_object = io.BytesIO()
        img.save(file_object, 'PNG')
        file_object.seek(0)
        tests.append('1a')
        
        return render_template("result2.html", u_image = base64.b64encode(file_object.getvalue()).decode('utf-8'))
    
        
@app.route("/")
def index():

    return render_template("main.html", u_image = encoded_img_data[-1].decode('utf-8'))

if __name__ == '__main__': 
    app.run(port=3000)
