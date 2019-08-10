import pytest
import os
from browsermobproxy import Server
from selenium import webdriver
from configparser import ConfigParser
from selenium.webdriver.chrome.options import Options
import requests
import json
import psutil




#---ini---
config = ConfigParser()
config_file = os.path.join(os.path.dirname(__file__), 'Golden_Strategy.ini')
config.read(config_file, encoding = 'utf8')
driver_path = str(config['DEFAULT']['chromedriver_path'])
url = str(config['DEFAULT']['url'])
browserproxy =str(config['DEFAULT']['mobproxy'])
wait = str(config['DEFAULT']['wait'])
dev_path = str(config['DEFAULT']['dev_path'])
ini_path = str(config['DEFAULT']['ini_path'])
#同步module的ini檔
config.read('module/Golden_Strategy.ini', encoding = 'utf8')
config['DEFAULT']['url'] = url
with open('module/Golden_Strategy.ini', 'w') as con:
    config.write(con)
#---ini---

#----共用Browser----
@pytest.fixture(scope="session")
def setup(request):#無Proxy Browser
    headers = {'Content-Type': 'application/json','x-client-ip':'xxxxxxxx','x-forwarded-for':'xxxxxxxx'}
    body = {
    "domain":"asus",
    "user_id":"auto_test"  
    }
    body = json.dumps(body)
    pre_token = requests.post("xxxxxxxx", headers=headers,data=body).text



    headers = {'Content-Type': 'application/json','x-client-ip':'xxxxxxxx','x-forwarded-for':'xxxxxxxx'}
    body = {
    "domain":"asus",
    "user_id":"auto_test",
    "pre_token":pre_token
    }
    body = json.dumps(body)
    token = requests.post("xxxxxxxx", headers=headers,data=body).text
    token = json.loads(token)['token']
    # print("initiating chrome driver")
    options = Options()
    # options.headless = True #hadless chrome
    driver = webdriver.Chrome(driver_path, options=options)
    session = request.node
    for item in session.items:
        cls = item.getparent(pytest.Class)
        setattr(cls.obj, "driver", driver)
    driver.get("https://" + url + "auth/login/" + token)
    driver.maximize_window()

    yield driver
    driver.quit()

@pytest.fixture(scope="session")
def setup_proxy(request):#有Proxy Browser
    headers = {'Content-Type': 'application/json','x-client-ip':'xxxxxxxx','x-forwarded-for':'xxxxxxxx'}
    body = {
    "domain":"asus",
    "user_id":"auto_test"  
    }
    body = json.dumps(body)
    pre_token = requests.post("xxxxxxxx", headers=headers,data=body).text



    headers = {'Content-Type': 'application/json','x-client-ip':'xxxxxxxx','x-forwarded-for':'xxxxxxxx'}
    body = {
    "domain":"asus",
    "user_id":"auto_test",
    "pre_token":pre_token
    }
    body = json.dumps(body)
    token = requests.post("xxxxxxxx", headers=headers,data=body).text
    token = json.loads(token)['token']
    server = Server(browserproxy)
    server.start()
    proxy = server.create_proxy(params={'trustAllServers':'true'})
    proxy.new_har(
            'req', options={
                'captureHeaders': True,
                'captureContent': True
            })
    co = webdriver.ChromeOptions()
    # co.add_argument('--headless')
    co.add_argument('--proxy-server={host}:{port}'.format(host='localhost', port=proxy.port))
    # print("initiating chrome driver")
    options = Options()
    # options.headless = True #hadless chrome
    for x in range(3):
        try:
            driver = webdriver.Chrome(driver_path, options=co)
            session = request.node
            for item in session.items:
                cls = item.getparent(pytest.Class)
                setattr(cls.obj, "driver", driver)
                setattr(cls.obj, "proxy", proxy)
            driver.set_page_load_timeout(30)
            
            try:
                driver.get("https://" + url + "auth/login/" + token)
                driver.maximize_window()
                break
            except:
                driver.close()
        except:
            pass
    yield driver,proxy
    proxy.close()
    server.stop()
    for process in psutil.process_iter():
        try:
            process_info = process.as_dict(attrs=['name', 'cmdline'])
            if process_info.get('name') in ('java', 'java.exe'):
                for cmd_info in process_info.get('cmdline'):
                    if cmd_info == '-Dapp.name=browsermob-proxy':
                        process.kill()
        except psutil.NoSuchProcess:
            pass
    driver.quit()
#----共用Browser----
