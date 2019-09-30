#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from locust import HttpLocust, TaskSet, task

class WebsiteTasks(TaskSet):
    FormData = {'userInfo.email': '############','userInfo.pd':"#############"}
    header = {
    'Sec-Fetch-Mode':'cors',
    'Referer':'############',
    'Sec-Fetch-Site':'same-origin',
    'Accept-Language':'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
    'Origin':'############',
    'Accept':'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With':'XMLHttpRequest',
    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept-Encoding':'gzip, deflate, br',
    'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36'
    }
    def login(self):
        self.client.post('##############/x_login.action' ,headers=header,json=FormData,verify=False)
        cookie = self.client.cookies.get_dict()
        cookie['_ga']='GA1.2.778773783.1557104501'
        cookie['####']='525'
        
    @task(1)
    def visit_record(self):
        header1 = {
        'Origin':'##############',
        'Referer':'############',
        'Sec-Fetch-Mode':'cors',
        'Referer':'#############/login/x_index.action',
        'Sec-Fetch-Site':'same-origin',
        'Accept-Language':'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Sec-Fetch-User':'?1',
        'sec-fetch-mode':'navigate',
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Upgrade-Insecure-Requests':'1',
        'Accept-Encoding':'gzip, deflate, br',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36'
        }
        cookie = self.client.cookies.get_dict()
        cookie['_ga']='GA1.2.778773783.1557104501'
        cookie['########']='525'
        with self.client.get('############/todo/todo_index_visit_manager.action',headers = header1,verify=False,cookies=cookie) as response:
            if '(day>365)' not in response.text:
                response.failure("Fail")       
        
    @task(1)
    def shop_(self):
        header1 = {
        'Origin':'####################',
        'Referer':'###############',
        'Sec-Fetch-Mode':'cors',
        'Referer':'###################/login/x_index.action',
        'Sec-Fetch-Site':'same-origin',
        'Accept-Language':'zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7',
        'Sec-Fetch-User':'?1',
        'sec-fetch-mode':'navigate',
        'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
        'Upgrade-Insecure-Requests':'1',
        'Accept-Encoding':'gzip, deflate, br',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36'
        }
        cookie = self.client.cookies.get_dict()
        cookie['_ga']='GA1.2.778773783.1557104501'
        cookie['#########']='525'
        
        with self.client.get('https://#########/store/store_index_shopVisit_manager.action',headers = header1,verify=False,cookies=cookie,catch_response=True) as response:
            if '30D/90D' not in response.text:
                response.failure("Fail")
        
class WebsiteUser(HttpLocust):
    task_set = WebsiteTasks
    min_wait = 20000
    max_wait = 30000

