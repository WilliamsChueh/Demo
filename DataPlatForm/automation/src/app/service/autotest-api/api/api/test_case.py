# -*- coding: utf-8 -*-
from __future__ import absolute_import, print_function
from flask import request, g
from . import Resource
from .. import schemas
from configparser import ConfigParser
from multiprocessing import Process
from Object_run import run
from Object_run import dry
from Object_run import dependency
from Object_run import fail_count
from Object_run import file_not_found
from Object_run import failcase
from Object_run import all_case
from Object_run import remove
import json
import pytest
import sys
import pandas as pd
import time

class TestCase(Resource):

    def get(self): 
        case = json.dumps(all_case())
        return json.loads(case), 200, None

    def post(self):
        exec_time = time.strftime('%Y-%m-%d %H-%M-%S')
        # print(g.json)
        df = pd.DataFrame(g.json)
        dff = pd.DataFrame(all_case())
        # print(df)
        """"抓回各自Parrllel的Case"""
        parallel_1 = dry(df,1)
        parallel_2 = dry(df,2)
        parallel_3 = dry(df,3)
        parallel_4 = dry(df,4)
        parallel_5 = dry(df,5)
        # print(parallel_1)

        """"去查是否有dependency"""
        Process1 = dependency(parallel_1,dff)
        Process2 = dependency(parallel_2,dff)
        Process3 = dependency(parallel_3,dff)
        Process4 = dependency(parallel_4,dff)
        Process5 = dependency(parallel_5,dff)

        """"去將鄰近重複的刪除"""
        Process1 = remove(Process1)
        Process2 = remove(Process2)
        Process3 = remove(Process3)
        Process4 = remove(Process4)
        Process5 = remove(Process5)

        """必須開Browsermobproxy的case"""
        proxy = [xxxxxxxxxxxxxxxxxxxxxxx]

        
        runlist = []
        if not Process1:
            pass
            runlist.append(0)
        else:
            check = any(item in proxy for item in Process1)
            if check is True:
                Process1 = ['setup_proxy'] +['1']+['-x'] + Process1 + ["--json=./test_report/%s_1.json"%exec_time] + ['--timeout=600']
                runlist.append(1)
            else:
                Process1 = ['setup'] +['1']+['-x'] + Process1 + ["--json=./test_report/%s_1.json"%exec_time] + ['--timeout=600']
                runlist.append(1)

        if not Process2:
            pass
            runlist.append(0)
        else:
            check = any(item in proxy for item in Process2)
            if check is True:
                Process2 = ['setup_proxy'] +['2']+['-x'] + Process2 + ['--timeout=600'] + ["--json=./test_report/%s_2.json"%exec_time] 
                runlist.append(1)
            else:
                Process2 = ['setup'] +['2']+['-x'] + Process2 + ['--timeout=600'] + ["--json=./test_report/%s_2.json"%exec_time]
                runlist.append(1)
            
        if not Process3:
            pass
            runlist.append(0)
        else:
            check = any(item in proxy for item in Process3)
            if check is True:
                Process3 = ['setup_proxy'] +['3']+['-x'] + Process3 + ['--timeout=600'] + ["--json=./test_report/%s_3.json"%exec_time] 
                runlist.append(1)
            else:
                Process3 = ['setup'] +['3']+['-x'] + Process3 + ['--timeout=600']+ ["--json=./test_report/%s_3.json"%exec_time]
                runlist.append(1)

        if not Process4:
            pass
            runlist.append(0)
        else:
            check = any(item in proxy for item in Process4)
            if check is True:
                Process4 = ['setup_proxy'] +['4']+['-x'] + Process4 + ['--timeout=600'] + ["--json=./test_report/%s_4.json"%exec_time] 
                runlist.append(1)
            else:
                Process4 = ['setup'] +['4']+['-x'] + Process4 + ['--timeout=600']+ ["--json=./test_report/%s_4.json"%exec_time]
                runlist.append(1)

        if not Process5:
            pass
            runlist.append(0)
        else:
            check = any(item in proxy for item in Process5)
            if check is True:
                Process5 = ['setup_proxy'] +['5']+['-x'] + Process5 + ['--timeout=600']+  ["--json=./test_report/%s_5.json"%exec_time] 
                runlist.append(1)
            else:
                Process5 = ['setup'] +['5']+['-x'] + Process5 + ['--timeout=600']+ ["--json=./test_report/%s_5.json"%exec_time]
                runlist.append(1)

        print(Process1,"\n",Process2,"\n",Process3,"\n",Process4,"\n",Process5,"\n")
        print("Run List%s"%runlist)
        run([Process1,Process2,Process3,Process4,Process5])

        """Return Fail Count"""
        fail_num = fail_count(runlist,exec_time)
        print("fail message %s"%fail_num)
        fail_case = []
        
        if not fail_num:
            # print("no fail")
            failcount  = 0
        else:
            failcount = len(fail_num)
            # print(fail_num)
            """"Check File Not Found"""
            filenotfound = [fail_num[x] for x in range(len(fail_num)) if type(fail_num[x])==dict]
            print("file not found%s"%filenotfound)
            if not filenotfound:
                pass
            else:
                fail_case = file_not_found(Process1,Process2,Process3,Process4,Process5,filenotfound)
                # print(filenotfound)

        if 1 in fail_num:
            print("-----------------------------------------------------------------------------------------------")
            error = failcase(runlist,exec_time,dff)
            fail_case = fail_case + error
        else:
            pass

        return {"id":"test_%s"%exec_time,'test_case':g.json,"exec_time":exec_time,"fail_count":failcount,"fail_case":fail_case}, 200, None
