import numpy as np
import re
from itertools import permutations

class meths1():
    def flatten(t):
        return [item for sublist in t for item in sublist]

    def insert(source_str, insert_str, pos):
        return source_str[:pos]+insert_str+source_str[pos:]

    def list_duplicates_of(seq,item):
        start_at = -1
        locs = []
        while True:
            try:
                loc = seq.index(item,start_at+1)
            except ValueError:
                break
            else:
                locs.append(loc)
                start_at = loc
        return locs    

    def list_possible_smiles(smile):
        smile = smile
        possible_smiles = []
        
        smile_to_list = []
        smile_to_list[:0] = smile
        
        np_array = np.array(smile_to_list)
        middle = []
        new_middle = []
        latest_middle = []
        last_middle = []
        initialFP = []
        initialSP = []
        
        if '(' in smile_to_list:
            firstP = np.where(np_array=='(')
            secondP = np.where(np_array==')')
            initialFP.append(firstP)
            initialSP.append(secondP)
            
            for i in range(len(firstP[0])):
                
                addition = secondP[0][i]-firstP[0][i]-1
                new_middle.append([])
                latest_middle.append([])
                last_middle.append([])
                
                for e in range(addition):
                    middle.append(firstP[0][i]+e+1)
        
        itemx = 0
        for index, item in enumerate(middle):
            
            if index<(len(middle)-1):
                
                for items in range(len(new_middle)):
                    checked = meths1.flatten(new_middle)
                    
                    if item not in checked:

                        if len(new_middle[itemx]) > 0:
                            
                            if item-1 == new_middle[itemx][-1]:
                                new_middle[itemx].append(item)
                                
                            else:
                                new_middle[itemx+1].append(item)
                                itemx += 1
                        else:
                            new_middle[items].append(item)
                        
            else:
                new_middle[-1].append(item)
        
        for index_in, indices in enumerate(new_middle):
            for ix in indices:
                latest_middle[index_in].append(smile_to_list[ix])
        
        
            last_middle[index_in].append(''.join(latest_middle[index_in]))
        
        removed = re.sub("([\(\[]).*?([\)\]])", "\g<1>\g<2>", smile)
        
        new_smiles = []
        temp_smiles = removed
        
        perm = permutations(meths1.flatten(last_middle))
        
        pos_of_FP = meths1.list_duplicates_of(removed, '(')
        
        for ix in list(perm):
            

            temp = removed
            for index in range(len(pos_of_FP)):

                temp = meths1.insert(temp, ix[index], pos_of_FP[index]+1)
                pos_of_FP = meths1.list_duplicates_of(temp, '(')
            possible_smiles.append(temp)
            
        return possible_smiles

    def smiles_exchange(smiles):

        smiles = smiles
        new = smiles.split('(')
        news = [i.split(')') for i in new]
        newer = []
        dont_forget = 0
        for index, i in enumerate(news):
            
            if index == 0:
                newer.append(i[0])
            elif i[1] == '':
                newer.append('(')
                newer.append(i[0])
                newer.append(')')
            else:
                newer.append('(')
                newer.append(i[0])
                newer.append(')')
                newer.append(i[1])
                
        upperNew = []
        for i in newer:
            if i == '(':
                upperNew.append('(')
            elif i == ')':
                upperNew.append(')')
            else:    
                upperNew.append(re.findall('[A-Z][^A-Z]*', i))
            

        list1 = meths1.flatten(upperNew)
        pos_of_FP = meths1.list_duplicates_of(list1, '(')
        pos_of_SP = meths1.list_duplicates_of(list1, ')')
        mid = []

        io = 0
        has_happened = 0
        if '(' in list1:
            mid.append([])
            index = list1.index('(')-1
            dont_forget = [list1[index], index]
            
            next_SP = next(val for x, val in enumerate(pos_of_SP)
                        if val > index + 1)

            mid[io].append([list1[:index], 'l'])
            right_mid = list1[index + 2: next_SP]

            mid[io].append([right_mid, 'r'])

            if list1[next_SP + 1] == '(':
                next_SP2 = next(val for x, val in enumerate(pos_of_SP)
                        if val > next_SP + 1)
                right_mid2 = list1[next_SP + 2: next_SP2]

                mid[io].append([right_mid2, 'r'])

                list2 = list1[next_SP2 + 1:]
                
                mid2 = []
                if '(' in list2:
                    for index2, i2 in enumerate(list2):
                        if index2 != len(list2) -1:
                            if list2[index2 + 1] == '(':

                                has_happened += 1

                                next_SP3 = next(val for x, val in enumerate(pos_of_SP)
                                        if val > next_SP2 + 1)

                                if list1[next_SP3 + 1] == '(':
                                    next_SP4 = next(val for x, val in enumerate(pos_of_SP)
                                        if val > next_SP3 + 1)

                                    mid3 = ([list1[next_SP2 + 3: next_SP4]])

                                    mid3.append([list1[next_SP3 + 2: next_SP4]])
                                    mid3.append(list1[next_SP3 + 1:])
                                    perm = permutations(mid3)

                                    for ixd in list(perm):

                                        mid2.append(list2[0])
                                        mid2.append('(')
                                        mid2.append(ixd[0])
                                        mid2.append(')')
                                        mid2.append(ixd[1])

                                    mid2.append('r')

                                else:

                                    mid3 = ([list1[next_SP2 + 3: next_SP3]])
                                    mid3.append(list1[next_SP3 + 1:])
                                    perm = permutations(mid3)

                                    for indexxd, ixd in enumerate(list(perm)):
                                        mid2.append([])
                                        mid2[indexxd].append(list2[0])
                                        mid2[indexxd].append('(')
                                        mid2[indexxd].append(ixd[0])
                                        mid2[indexxd].append(')')
                                        mid2[indexxd].append(ixd[1])

                                    mid2.append('r')
                else:
                    mid2 = [list2, 'r']
                    
                mid[io].append(mid2)
            else:
                list2 = list1[next_SP + 1:]
                mid2 = []
                if '(' in list2:
                    for index2, i2 in enumerate(list2):
                        if index2 != len(list2) -1:
                            
                            if list2[index2 + 1] == '(':
                                has_happened += 1

                                next_SP3 = next(val for x, val in enumerate(pos_of_SP)
                                        if val > next_SP + 1)

                                if list1[next_SP3 + 1] == '(':
                                    next_SP4 = next(val for x, val in enumerate(pos_of_SP)
                                        if val > next_SP3 + 1)

                                    mid3 = ([list1[next_SP3 + 3: next_SP4]])
                                    
                                    mid3.append([list1[next_SP3 + 2: next_SP4]])
                                    mid3.append(list1[next_SP3 + 1:])
                                    perm = permutations(mid3)

                                    for ixd in list(perm):

                                        mid2.append(list2[0])
                                        mid2.append('(')
                                        mid2.append(ixd[0])
                                        mid2.append(')')
                                        mid2.append(ixd[1])

                                    mid2.append('r')

                                else:

                                    mid3 = ([list1[next_SP + 3: next_SP3]]) #CHECK THIS
                                    
                                    mid3.append(list1[next_SP3 + 1:])
                                    
                                    perm = permutations(mid3)

                                    for indexxd, ixd in enumerate(list(perm)):
                                        mid2.append([])
                                        mid2[indexxd].append(list2[0])
                                        mid2[indexxd].append('(')
                                        mid2[indexxd].append(ixd[0])
                                        mid2[indexxd].append(')')
                                        mid2[indexxd].append(ixd[1])

                                    mid2.append('r')
                    mid[io].append(mid2)
                else:
                    mid[io].append([list2, 'r'])

                io += 1



        final = []  
        final_tp = []
        for i in mid:
            mid_smiles = []
            if len(i[-1]) > 2:
                for indexux, iux in enumerate(i):
                    if indexux == len(i)-1:
                        
                        for iuux in range(len(iux)-1):
                            list3 = []
                            list3.append(i[:-1])
                            
                            lasti = ''
                            for iii in meths1.flatten(iux[iuux]):
                                lasti += iii
                                
                            list3[0].append([[lasti], 'rl'])
                            
                            perms = permutations(list3[0])
                            new_thing = 0
                            vals = 0

                            
                            for ix in list(perms):
                                smiles_t = []
                                stop = 0
                                new_thing = 0
                                
                                trial = []
                                for indexthings, things in enumerate(ix):
                                    
                                    newer_things = []
                                    if indexthings == 0:
                                        if things[1] == 'rl':
                                            break
                                        elif things[1] == 'r':
                                            newer_things = things[0][::-1]
                                        else:
                                            newer_things = things[0]
                                            
                                    else:
                                        if things[1] == 'l':
                                            newer_things = things[0][::-1]
                                        else:
                                            newer_things = things[0]
                                    
                                    trial.append(newer_things)
                                    for isdx, smilee in enumerate(things[0]):



                                        smiles_t.append(smilee)

                                        new_smiles = ''
                                        new_thing += 1
                    
                                trial.insert(1, [dont_forget[0]])
                                if len(trial) == 5:
                                
                                    tire = ['(']
                                    for iuy in trial[2]:
                                        tire.append(iuy)
                                    tire.append(')')
                                    trial[2] = tire
                                    
                                    tire2 = ['(']
                                    for iuy in trial[3]:
                                        tire2.append(iuy)
                                    tire2.append(')')
                                    trial[3] = tire2
                                    
                                elif len(trial) == 4:
                                    tire = ['(']
                                    for iuy in trial[2]:
                                        tire.append(iuy)
                                    tire.append(')')
                                    trial[2] = tire
                                    
                                if len(trial) > 1:
                                    final_tp.append(trial)
                                    #print(trial)
                                    for iii in meths1.flatten(trial):
                                        new_smiles += iii
                                    final.append(new_smiles)
                                
            else:
                for indexux, iux in enumerate(i):
                    if indexux == len(i)-1:
                        
                        list3 = []
                        list3.append(i[:-1])
                        
                        lasti = ''
                        for iii in meths1.flatten(iux[0]):
                            lasti += iii
                            
                        list3[0].append([[lasti], 'rl'])
                        
                        perms = permutations(list3[0])
                        new_thing = 0
                        vals = 0

                        
                        for ix in list(perms):
                            smiles_t = []
                            stop = 0
                            new_thing = 0
                            
                            trial = []
                            for indexthings, things in enumerate(ix):
                                
                                newer_things = []
                                if indexthings == 0:
                                    if things[1] == 'rl':
                                        break
                                    elif things[1] == 'r':
                                        newer_things = things[0][::-1]
                                    else:
                                        newer_things = things[0]
                                        
                                else:
                                    if things[1] == 'l':
                                        newer_things = things[0][::-1]
                                    else:
                                        newer_things = things[0]
                                
                                trial.append(newer_things)
                                for isdx, smilee in enumerate(things[0]):



                                    smiles_t.append(smilee)

                                    new_smiles = ''
                                    new_thing += 1
                
                            trial.insert(1, [dont_forget[0]])
                            if len(trial) == 5:
                            
                                tire = ['(']
                                for iuy in trial[2]:
                                    tire.append(iuy)
                                tire.append(')')
                                trial[2] = tire
                                
                                tire2 = ['(']
                                for iuy in trial[3]:
                                    tire2.append(iuy)
                                tire2.append(')')
                                trial[3] = tire2
                                
                            elif len(trial) == 4:
                                tire = ['(']
                                for iuy in trial[2]:
                                    tire.append(iuy)
                                tire.append(')')
                                trial[2] = tire
                                
                            if len(trial) > 1:
                                final_tp.append(trial)
                                #print(trial)
                                for iii in meths1.flatten(trial):
                                    new_smiles += iii
                                final.append(new_smiles)

        return final