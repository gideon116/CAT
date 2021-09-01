from rxn4chemistry import RXN4ChemistryWrapper
import time
from rxn4chemistry import RXN4ChemistryWrapper
from rdkit.Chem import AllChem
from Working_DRDP import meths

# api_key = 'apk-7de5c27fec662e73174ab59c4889a54933eb67b6aafcb5cc6d41ce03709eecda8fd15bb89fed084cfd86a0f9b7a7b2f0c6fbcb3eb960f43a877cdf84f74304e98952c1cf8b5e185624a07136e04df096'
# rxn4chemistry_wrapper = RXN4ChemistryWrapper(api_key=api_key)
# rxn4chemistry_wrapper.create_project(name="pl")
# time.sleep(5)
# for i, n in enumerate(rxn4chemistry_wrapper.paragraph_to_actions('add consentrated sodium hydroxide to sulfuric acid')['actions']):
#     print (i+1, n)

smiles_of_product = input('what is the SMILES of the compound you want to produce  ')


print (meths.main(smiles_of_product))
