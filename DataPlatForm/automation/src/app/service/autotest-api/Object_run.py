from multiprocessing import Process
import sys
import pytest
import pandas as pd
import json


def run(case):
    p1 = Process(target=process1, args=(case[0]))
    p2 = Process(target=process2, args=(case[1]))
    p3 = Process(target=process3, args=(case[2]))
    p4 = Process(target=process4, args=(case[3]))
    p5 = Process(target=process5, args=(case[4]))
    p1.start()
    p2.start()
    p3.start()
    p4.start()
    p5.start()
    p1.join()
    p2.join()
    p3.join()
    p4.join()
    p5.join()

def process1(*param):
    if not param:
        pass
    else:
        sysargv = list(param)[0]
        parllel = list(param)[1]
        run = list(param)[2:]
        sys.argv.append(sysargv)
        sys.argv.append(parllel)
        pytest.main(run)

def process2(*param):
    if not param:
        pass
    else:
        sysargv = list(param)[0]
        parllel = list(param)[1]
        run = list(param)[2:]
        sys.argv.append(sysargv)
        sys.argv.append(parllel)
        pytest.main(run)
    
def process3(*param):
    if not param:
        pass
    else:
        sysargv = list(param)[0]
        parllel = list(param)[1]
        run = list(param)[2:]
        sys.argv.append(sysargv)
        sys.argv.append(parllel)
        pytest.main(run)

def process4(*param):
    if not param:
        pass
    else:
        sysargv = list(param)[0]
        parllel = list(param)[1]
        run = list(param)[2:]
        sys.argv.append(sysargv)
        sys.argv.append(parllel)
        pytest.main(run)

def process5(*param):
    if not param:
        pass
    else:
        sysargv = list(param)[0]
        parllel = list(param)[1]
        run = list(param)[2:]
        sys.argv.append(sysargv)
        sys.argv.append(parllel)
        pytest.main(run)

def dry(df,parl):
    temp = df[df['parallel'] == parl]
    if len(temp) == 0:
        return []
    else:
        return temp

def dependency(parallel,dff):
    # print(parallel,dff)
    temp = []
    # print(parallel)
    for x in range(len(parallel)):
        
        if parallel.iloc[x]['controller'] == 'group':
            temp.append(parallel.iloc[x]['id'] )
        elif parallel.iloc[x]['id'] == "test_SD1_2":
            temp = temp + ['test_SD1_2']
        elif parallel.iloc[x]['id'] == "test_SN1_1":
            temp = temp + ['test_ST1_7','test_ST2_5','test_SH1_1','test_SH1_2','test_SN1_1']
        else:
            j = parallel.iloc[x]['id']
            l = [j]
            z = 0
            # print(l)
            while z == 0:
                k = dff[dff['id']==j]
                # print(k)
                j = k.iat[0,0]
                if j == "":
                    # print("No dependency")
                    temp = temp + l
                    z += 1
                else:
                    l = [j] + l
        
        
           
    if len(parallel) ==0 or parallel.fillna(0).iloc[-1]['next']==0:
        pass
    else:
        # temp = temp +[parallel_3.iloc[-1]['next']['id']]
        if parallel.iloc[-1]['next']['controller'] == 'group':
            temp.append(parallel.iloc[x]['next']['id'] )
        elif parallel.iloc[-1]['next']['id'] =="" :
            print("assadasdasdasd")
            pass
        elif parallel.iloc[-1]['next']['id'] == "test_SD1_2":
            temp = temp + ['test_SD1_2']
        elif parallel.iloc[-1]['next']['id'] == "test_SN1_1":
            temp = temp + ['test_ST1_7','test_ST2_5','test_SH1_1','test_SH1_2','test_SN1_1']
        else:
            j = parallel.iloc[-1]['next']['id']
            l = [j]
            z = 0
            # print(l)
            while z ==0:
                k = dff[dff['id']==j]
                j = k.iat[0,0]
                if j == "":
                    # print("No dependency")
                    temp = temp + l
                    z += 1
                else:
                    l = [j] + l
            
    temp = [x for x in temp if x != ""]
    temp = [temp[x] +".py" for x in range(len(temp))]
    return temp

def fail_count(runlist,exec_time):
    count = []
    """"json 1"""
    if runlist[0] == 1:
        with open('./test_report/%s_1.json'%exec_time, 'r') as r:
            x = r.read()
            y = json.loads(x)
            if 'failed' in y['report']['summary'].keys():
                y = int(y['report']['summary']['failed'])
                count.append(y)
            elif y['report']['summary']['num_tests'] == 0:
                y = [{"fail_reason":"file not found","parallel":1}]
                count = count + y
            elif 'error' in y['report']['summary'].keys():
                count.append(1)
            else:
                pass
        
    """"json 2"""
    if runlist[1] == 1:
        with open('./test_report/%s_2.json'%exec_time, 'r') as r:
            x = r.read()
            y = json.loads(x)
            if 'failed' in y['report']['summary'].keys():
                y = int(y['report']['summary']['failed'])
                count.append(y)
            elif y['report']['summary']['num_tests'] == 0:
                y = [{"fail_reason":"file not found","parallel":2}]
                count = count + y
            elif 'error' in y['report']['summary'].keys():
                count.append(1)
            else:
                pass

    """"json 3"""
    if runlist[2] == 1:
        with open('./test_report/%s_3.json'%exec_time, 'r') as r:
            x = r.read()
            y = json.loads(x)
            if 'failed' in y['report']['summary'].keys():
                y = int(y['report']['summary']['failed'])
                count.append(y)
            elif y['report']['summary']['num_tests'] == 0:
                y = [{"fail_reason":"file not found","parallel":3}]
                count = count + y
            elif 'error' in y['report']['summary'].keys():
                count.append(1)
            else:
                pass
    
    """"json 4"""
    if runlist[3] == 1:
        with open('./test_report/%s_4.json'%exec_time, 'r') as r:
            x = r.read()
            y = json.loads(x)
            if 'failed' in y['report']['summary'].keys():
                y = int(y['report']['summary']['failed'])
                count.append(y)
            elif y['report']['summary']['num_tests'] == 0:
                y = [{"fail_reason":"file not found","parallel":4}]
                count = count + y
            elif 'error' in y['report']['summary'].keys():
                count.append(1)
            else:
                pass

    """"json 5"""
    if runlist[4] == 1:
        with open('./test_report/%s_5.json'%exec_time, 'r') as r:
            x = r.read()
            y = json.loads(x)
            if 'failed' in y['report']['summary'].keys():
                y = int(y['report']['summary']['failed'])
                count.append(y)
            elif y['report']['summary']['num_tests'] == 0:
                y = [{"fail_reason":"file not found","parallel":5}]
                count = count + y
            elif 'error' in y['report']['summary'].keys():
                count.append(1)
            else:
                pass
    
    return count

def file_not_found(process1,process2,process3,process4,process5,notfound):
    file = []
    pc1 = process1
    pc2 = process2
    pc3 = process3
    pc4 = process4
    pc5 = process5
    for x in range(len(notfound)):
        y = notfound[x]['parallel']
        if y == 1:
            notfound[x]['id'] = ' or '.join(pc1[2:-1])
            file = file + [notfound[x]]
        elif y == 2:
            notfound[x]['id'] = ' or '.join(pc2[2:-1])
            file = file + [notfound[x]]
        elif y == 3:
            notfound[x]['id'] = ' or '.join(pc3[2:-1])
            file = file + [notfound[x]]
        elif y == 4:
            notfound[x]['id'] = ' or '.join(pc4[2:-1])
            file = file + [notfound[x]]
        elif y == 5:
            notfound[x]['id'] = ' or '.join(pc5[2:-1])
            file = file + [notfound[x]]
    return file
        
def failcase(runlist,exec_time,dff):
    case = []
    for b in range(5):
        c = runlist[b]
        """"json 1"""
        if c == 1:
            with open('./test_report/%s_%s.json'%(exec_time,b+1), 'r') as r:
                x = r.read()
                y = json.loads(x)
                h = [y['report']['tests'][z]['name'].split(":")[0].split(".")[0] for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                
                """------id-----"""
                if 'failed' in y['report']['summary'].keys() and any(h[0] == dff['id']):
                    k = [[y['report']['tests'][z]['name'].split(":")[0].split(".")[0]] + [y['report']['tests'][z]['call']['stdout']] for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                    z = [z for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                    id = k[0][0]
                    fail_reason = k[0][1]
                    sequence = int(dff[dff['id'] == id]['sequence'])
                    group = dff.loc[dff['id'] == id]['group'].iloc[0]
                    
                    if z[0] == 0:
                        g =  {
                                "id": id,
                                "group": group,
                                "fail_reason": fail_reason,
                                "sequence": sequence,
                                "parallel": b+1
                            }
                        case = case + [g]

                    else:
                        before_id = [y['report']['tests'][z-1]['name'].split(":")[0].split(".")[0] for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                        try:
                            dff.loc[dff['group'] == before_id[0]].iloc[0]
                            before_controller = "group"
                        except:
                            dff.loc[dff['id'] == before_id[0]]
                            before_controller = "id"
                    
                        g =  {
                                "id": id,
                                "group": group,
                                "fail_reason": fail_reason,
                                "sequence": sequence,
                                "parallel": b+1,
                                "before":{
                                "id" :before_id[0],
                                "controller" :before_controller,
                                "parallel":b+1
                                }
                            }
                        case = case + [g]
                # print(case)
                """------group-----"""
                if 'failed' in y['report']['summary'].keys() and any(h[0] == dff['group']):
                    k = [[y['report']['tests'][z]['name'].split(":")[0].split(".")[0]] + [y['report']['tests'][z]['call']['stdout']] for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                    z = [z for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                    id = k[0][0]
                    fail_reason = k[0][1]

                    if z[0] == 0:
                        g =  {
                                "id": id,
                                "group": id,
                                "fail_reason": fail_reason,
                                "sequence": "",
                                "parallel": b+1
                            }
                        case = case + [g]
                    
                    else:
                        before_id = [y['report']['tests'][z-1]['name'].split(":")[0].split(".")[0] for z in range(len(y['report']['tests'])) if y['report']['tests'][z]['outcome'] == 'failed']
                        try:
                            dff.loc[dff['group'] == before_id[0]].iloc[0]
                            before_controller = "group"
                        except:
                            dff.loc[dff['id'] == before_id[0]]
                            before_controller = "id"
                        
                        g =  {
                                "id": id,
                                "group": id,
                                "fail_reason": fail_reason,
                                "sequence": "",
                                "parallel": b+1,
                                "before":{
                                "id" :before_id[0],
                                "controller" :before_controller,
                                "parallel":b+1
                                }
                            }
                        case = case + [g]

       
    return case 

def remove(runlist):
    remove_list=[x for x in range(len(runlist)-1) if runlist[x]==runlist[x+1]]
    for x in remove_list:
        runlist.remove(runlist[x])
    return runlist  
