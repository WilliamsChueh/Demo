# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function
from flask import request, g
from . import Resource
from .. import schemas
from Object_dryrun import validate_keys
from Object_dryrun import validate_values
from Object_dryrun import validate_id_repeat
from Object_dryrun import validate_circulation
from Object_dryrun import next_dry
from Object_dryrun import next_consistency
from Object_dryrun import validate_next_id_repeat
import pandas as pd
import time

class TestCaseDryrun(Resource):

    def post(self):
        # print(g.json)
        start = time.time()
        """Validate_Keys"""
        try:
            raw_Dryrun = g.json
            raw_dryrun_count  = len(raw_Dryrun)
            Fail_Format = validate_keys(raw_Dryrun,raw_dryrun_count)
            if not Fail_Format:
                pass
                print("Right Format")
            else:
                assert 1 == 0 
        except:
            print("Error Format included")
            return {"status":"Fail","error":"Error Format included(below)","result":Fail_Format}, 200, None
        
        """Validate_Values"""
        try:
            raw_Dryrun = g.json
            raw_dryrun_count  = len(raw_Dryrun)
            Fail_Values = validate_values(raw_Dryrun,raw_dryrun_count)
            print(Fail_Values)
            if not Fail_Values:
                pass
                print("Right Values")
            else:
                assert 1 == 0 
        except:
            print("Error Format Values")
            return {"status":"Fail","error":"Error values included(below)","result":Fail_Values}, 200, None
        
        """Separate No_Next Next Part"""
        no_next=[raw_Dryrun[x] for x in range(raw_dryrun_count) if ('next' not in raw_Dryrun[x].keys()) or ('next' in raw_Dryrun[x].keys() and bool(raw_Dryrun[x]['next']['id']) == False)]
        next = [x for x in raw_Dryrun if x not in no_next]
        # print(["This is no next"] + no_next)
        # print(["This is next"] + next)

        """Validate_Next_ID_Repeat or not Part1"""
        if not next:
            pass
        else:
            next_validate_id_repeat = validate_id_repeat(next)
            if not next_validate_id_repeat:
                pass
            else:
                return {"status":"Fail","error":"Error Format(Repeat ID)","result":next_validate_id_repeat}, 200, None

        """Validate_Next_ID_Repeat or not Part2"""
        if not next:
            pass
        else:
            next_validate_next_id_repeat = validate_next_id_repeat(next)
            if not next_validate_next_id_repeat:
                pass
            else:
                return {"status":"Fail","error":"Error Format(Repeat ID)","result":next_validate_next_id_repeat},200,None

        """Validate_Circulation"""
        if not next:
            pass
        else:
            circulation = validate_circulation(next)
            if not circulation:
                pass
            else:
                return {"status":"Fail","error":"Error(Circulation)","result":circulation},200,None

        """-----Next Dry------"""
        if not next:
            pass
        else:
            next = next_dry(next)
            # print(next)
        """Validate Next ALL Controller Validate Consistency"""
        if not next:
            pass
        else:
            controller_consistency = next_consistency(next)
            if not controller_consistency:
                pass
            else:
                return  {"status":"Fail","error":"Error controller not consistency","result":controller_consistency},200,None
        
        """-----Validate Parallel Count------"""
        Parallel_Count = len(next) + len(no_next)
        ll = []
        for y in range(len(next)):
            ll = ll + next[y]    
        OverCount = ll + no_next
        if Parallel_Count > 5:
            return  {"status":"Fail","error":"Parallel over limit(5)","result":OverCount},200,None
        else:
            pass

        """"Next + No Next"""
        Finish_Count = 1
        finish = []
        for x in range(len(no_next)):#賦予Parallel
            no_next[x]['parallel'] = x +1
            try:
                no_next[x]['next']['parallel'] = x +1
            except:
                pass
            finish.append(no_next[x])
            Finish_Count += 1
        
        for x in range(len(next)):#賦予Parallel
            for y in range(len(next[x])):
                next[x][y]['parallel'] = Finish_Count
                next[x][y]['next']['parallel'] = Finish_Count
            # print(next[x])
            finish = finish + next[x]
            # print(finish)
            Finish_Count += 1
            # print(Finish_Count)
        
        end = time.time()
        print (end-start)
        return {"status":"OK","result":finish}, 200, None