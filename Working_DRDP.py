from rxn4chemistry import RXN4ChemistryWrapper
from rdkit import Chem
from rdkit.Chem import AllChem
from PIL import Image
import json
import io
import time
from rdkit.Chem.Draw import IPythonConsole
from smiles import meths1
import base64
import numpy as np

class meths():
    def in_nested_list(my_list, item):

        if item in my_list:
            return True
        else:
            return any(meths.in_nested_list(sublist, item) for sublist in my_list if isinstance(sublist, list))

    def collect_reactions(tree):
        reactions = []
        if 'children' in tree and len(tree['children']):
            reactions.append(
                AllChem.ReactionFromSmarts('{}>>{}'.format(
                    '.'.join([node['smiles'] for node in tree['children']]),
                    tree['smiles']
                ), useSmiles=True)
            )
        for node in tree['children']:
            reactions.extend(meths.collect_reactions(node))
        return reactions
    
    def NestedDictValues(d):
        for v in d.values():
            if isinstance(v, dict):
                yield from meths.NestedDictValues(v)
            else:
                yield v
    
    def main(smiles_of_product, smiles_of_reactant):
        api_key = 'apk-a0d6381bfd8b86c8e61c281591c965fa7e0a1dd63a87a9ab4f7b3f5db212f8a828346b2d8592a8416f335762347fdeb28b4918867582ae86b142296eb7b8dbf9869c19f62a59d21f9531d07e81ce9c82'
        rxn4chemistry_wrapper = RXN4ChemistryWrapper(api_key=api_key)
        rxn4chemistry_wrapper.create_project(name="pl2")
        time.sleep(2)

        response = rxn4chemistry_wrapper.predict_automatic_retrosynthesis(
            product=smiles_of_product,
            max_steps=10000,
            ai_model= '2020-07-01',
            available_smiles=smiles_of_reactant
        )
        time.sleep(13)

        while True:

            results = rxn4chemistry_wrapper.get_predict_automatic_retrosynthesis_results(
                response['prediction_id'])

            
            # print(results['status'])
            if results['status'] == 'SUCCESS':
            #if len(results['retrosynthetic_paths']) != 0:
                break
            
            time.sleep(13)
        rxn = []
        for num, i in enumerate(results['retrosynthetic_paths']):
            pre8end=[]
            pre7end=[]
            pre6end=[]
            pre5end=[]
            pre4end=[]
            pre3end=[]
            pre2end=[]
            pre1end=[]
            
            pre1smiles=[]
            pre2smiles=[]
            pre3smiles=[]
            pre4smiles=[]
            pre5smiles=[]
            pre6smiles=[]
            pre7smiles=[]
            pre8smiles=[]
            
            #print(num, 'path')
            
            if len(i['children'])>0:
                for num1, i1 in enumerate(i['children']):
                    #print(num1, 'pre1')
                    pre1smiles.append(i1['smiles'].split('.'))
                    
                    if len(i1['children'])>0:
                        for num2, i2 in enumerate(i1['children']):
                            #print(num2, 'pre2')
                            pre2smiles.append(i2['smiles'].split('.'))

                            if len(i2['children'])>0:
                                for num3, i3 in enumerate(i2['children']):
                                    #print(num3, 'pre3')
                                    pre3smiles.append(i3['smiles'].split('.'))
                                    
                                    if len(i3['children'])>0:
                                        for num4, i4 in enumerate(i3['children']):
                                            #print(num4, 'pre4') 
                                            pre4smiles.append(i4['smiles'].split('.'))

                                            if len(i4['children'])>0:
                                                for num5, i5 in enumerate(i4['children']):
                                                    #print(num5, 'pre5')
                                                    pre5smiles.append(i5['smiles'].split('.'))
                                                    
                                                    if len(i5['children'])>0:
                                                        for num6, i6 in enumerate(i5['children']):
                                                            #print(num6, 'pre6')
                                                            pre6smiles.append(i6['smiles'].split('.'))
                                                            
                                                            if len(i6['children'])>0:
                                                                for num7, i7 in enumerate(i6['children']):
                                                                    #print(num7, 'pre7')
                                                                    pre7end.append(i7['smiles'])
                                                                    
                                                                    if len(i7['children'])>0:
                                                                        for num8, i8 in enumerate(i7['children']):
                                                                            #print(num8, 'pre8')
                                                                            pre8end.append(i8['smiles'])

                                                                    #else:
                                                                        #print(i7['smiles'], '--', i6['smiles'])

                                                            #else:
                                                                #print(i6['smiles'], '--', i5['smiles'])

                                                    #else:
                                                        #print(i5['smiles'], '--', i4['smiles'])

                                            #else:
                                                #print(i4['smiles'], '--', i3['smiles'])

                                    #else:
                                        #print(i3['smiles'], '--', i2['smiles'])
                                
                            #else:
                                #print(i2['smiles'], '--', i1['smiles'])
                                
                    #else:
                        #print(i1['smiles'], '--', i['smiles'])
                            
            #else:
                #print(i['smiles'], '--', results['smiles'])
                
                
            if len(pre7smiles)>0:
                pre8smiles.append(pre7smiles[0])
            if len(pre6smiles)>0:
                pre7smiles.append(pre6smiles[0])
            if len(pre5smiles)>0:
                pre6smiles.append(pre5smiles[0])
            if len(pre4smiles)>0:
                pre5smiles.append(pre4smiles[0])
            if len(pre3smiles)>0:
                pre4smiles.append(pre3smiles[0])
            if len(pre2smiles)>0:
                pre3smiles.append(pre2smiles[0])
            if len(pre1smiles)>0:
                pre2smiles.append(pre1smiles[0])
                
            pre1smiles.append([i['smiles']])
            
            if len(meths1.flatten(pre8smiles))>1:
                rxn.append([num, meths1.flatten(pre8smiles), '-->', meths1.flatten(pre7smiles), '-->', meths1.flatten(pre6smiles), '-->', meths1.flatten(pre5smiles), '-->', meths1.flatten(pre4smiles), '-->', meths1.flatten(pre3smiles), '-->', meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre7smiles))>1:
                rxn.append([num, meths1.flatten(pre7smiles), '-->', meths1.flatten(pre6smiles), '-->', meths1.flatten(pre5smiles), '-->', meths1.flatten(pre4smiles), '-->', meths1.flatten(pre3smiles), '-->', meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre6smiles))>1:
                rxn.append([num, meths1.flatten(pre6smiles), '-->', meths1.flatten(pre5smiles), '-->', meths1.flatten(pre4smiles), '-->', meths1.flatten(pre3smiles), '-->', meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre5smiles))>1:
                rxn.append([num, meths1.flatten(pre5smiles), '-->', meths1.flatten(pre4smiles), '-->', meths1.flatten(pre3smiles), '-->', meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre4smiles))>1:
                rxn.append([num, meths1.flatten(pre4smiles), '-->', meths1.flatten(pre3smiles), '-->', meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre3smiles))>1:
                rxn.append([num, meths1.flatten(pre3smiles), '-->', meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre2smiles))>1:
                rxn.append([num, meths1.flatten(pre2smiles), '-->', meths1.flatten(pre1smiles)])
            elif len(meths1.flatten(pre1smiles))>1:
                rxn.append([num, meths1.flatten(pre1smiles)])


        # total1 = AllChem.ReactionFromSmarts('{}>>{}'.format('C1CCOC1.C1CCOC1', 'C1CCOC1'
        #     ), useSmiles=True)

        # image = Image.open(io.BytesIO(IPythonConsole._toReactionPNG(total1)))
        # (width, height) = (image.width // 15, image.height // 15)
        # im_resized = image.resize((width, height))

        # s = image.tobytes().decode("latin1")
        # json_data = np.array(im_resized).tolist()

        total = []
        totalelse = []
        for path in results['retrosynthetic_paths']:
            if '(' in smiles_of_reactant:
                for e in meths1.smiles_exchange(smiles_of_reactant):
                    if str(list(meths.NestedDictValues(path))).find(e) != -1:
                        total.append(path)
                    elif str(list(meths.NestedDictValues(path))).find(smiles_of_reactant) != -1:
                        total.append(path)
                    else:
                        totalelse.append(path)
            else:
                if str(list(meths.NestedDictValues(path))).find(smiles_of_reactant) != -1:
                    total.append(path)
                else:
                    totalelse.append(path)

        img = []
        for path in total:
            iol = []
            for reaction in meths.collect_reactions(path):
                iol.append(reaction)
            img.append(iol)

        imgelse = []
        for path in totalelse:
            iol = []
            for reaction in meths.collect_reactions(path):
                iol.append(reaction)
            imgelse.append(iol)

        return img, imgelse
        
    def protocol_nlp():

        api_key = 'apk-a0d6381bfd8b86c8e61c281591c965fa7e0a1dd63a87a9ab4f7b3f5db212f8a828346b2d8592a8416f335762347fdeb28b4918867582ae86b142296eb7b8dbf9869c19f62a59d21f9531d07e81ce9c82'
        rxn4chemistry_wrapper = RXN4ChemistryWrapper(api_key=api_key)
        rxn4chemistry_wrapper.create_project(name="pl2")
        time.sleep(2)

        results = rxn4chemistry_wrapper.paragraph_to_actions(
            'To a stirred solution of '
            '7-(difluoromethylsulfonyl)-4-fluoro-indan-1-one (110 mg, '
            '0.42 mmol) in methanol (4 mL) was added sodium borohydride '
            '(24 mg, 0.62 mmol). The reaction mixture was stirred at '
            'ambient temperature for 1 hour.'
        )
        print(results['actions'])

        response = rxn4chemistry_wrapper.predict_reaction(
            'BrBr.c1ccc2cc3ccccc3cc2c1'
        )
