import pandas as pd

def validate_keys(raw_Dryrun,raw_dryrun_count):#驗證id與controller都有key
    Fail = [raw_Dryrun[x] for x in range(raw_dryrun_count) if 'id' not in raw_Dryrun[x].keys() or 'controller'not in raw_Dryrun[x].keys()]
    Fail_Next = [raw_Dryrun[x] for x in range(raw_dryrun_count) if 'next' in raw_Dryrun[x].keys()]
    Fail_Next  = [Fail_Next[x] for x in range(len(Fail_Next)) if  'controller' not in Fail_Next[x]['next'].keys() or  'id' not in Fail_Next[x]['next'].keys()]
    # print(len(Fail))
    # print(len(Fail_Next))
    if len(Fail) + len(Fail_Next) == 0:
        return []
    else:
        Fail = Fail + Fail_Next
        return Fail

def validate_id_repeat(next):
  #   next_content = [next[x]['next']['id'] for x in range(len(next))]
  # # next_content_1 = [next_content[x] for x in range(len(next_content)) if next_content.count(next_content[x])>1]
  #   id_content = [next[x]['id'] for x in range(len(next))]
  #   id_content_1 = [id_content[x] for x in range(len(id_content)) if id_content.count(id_content[x])>1]
  df = pd.DataFrame(next)
  df = df.groupby(['id']).count()
  df = df.loc[df['controller'] > 1].index.values.astype(str)
  df = df.tolist()
  id_repeat = [next[x] for x in range(len(next)) if next[x]['id'] in df]
  if len(df) == 0:
    return []
  else:
    df = id_repeat
    return df

def validate_next_id_repeat(next):
    repeat_id = []
    for x in range(len(next)):
        df = pd.DataFrame(next)
        df['Check'] =(df['next'][x] == df['next'])
        df = df.groupby(['Check']).count()
        if df.loc[True]['id'] > 1:
            repeat_id = repeat_id + [next[x]]
        # print(repeat_id)
    if len(repeat_id) == 0:
        return []
    else:
        df = repeat_id
        return df 

def validate_circulation(next):
  next_content = [next[x]['next']['id'] for x in range(len(next))]
  id_content = [next[x]['id'] for x in range(len(next))]
  next_content = sorted(next_content)
  id_content = sorted(id_content)
  if next_content == id_content:
    return next
  else:
    return []

def next_dry(next):
  df = pd.DataFrame(next)
  """Find Head(Leader)"""
  Head = [[next[y]] for y in range(len(next)) if df['id'][y] not in [next[x]['next']['id'] for x in range(len(next))]]

  for x in range(len(Head)):
    y = 0
    while y == 0:
        if any(Head[x][-1]['next']['id'] == df['id']):
            q = [next[z] for z in range(len(next)) if next[z]['id'] == Head[x][-1]['next']['id']]
            if not q:
                y+= 1
                pass
            else:
                Head[x] = Head[x] + q   
        else:
            y+= 1 
  return Head

def next_consistency(head):
  for x in range(len(head)):
    for y in range(len(head[x])-1):
        if head[x][y]['next']['id'] == head[x][y+1]['id'] and head[x][y]['next']['controller'] == head[x][y+1]['controller']:
            pass
        else:
            check =  head[x]
            return check