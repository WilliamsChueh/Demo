#---import---
from configparser import ConfigParser
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from pyquery import PyQuery as PQ
from browsermobproxy import Server
from selenium import webdriver
from os import path
import time
import json
import os
import sys
#---import---

#---ini---
config = ConfigParser()
#---必備---↓
config_file = path.join(path.dirname(path.abspath(__file__)), 'Golden_Strategy.ini')
config.read(config_file, encoding='utf8')
url = str(config['DEFAULT']['url'])
wait =int(config['DEFAULT']['wait'])
browserproxy =str(config['DEFAULT']['mobproxy'])
dev_path = str(config['DEFAULT']['dev_path'])
#---ini---
sys.path.append(dev_path)#不加這段會無法import其他py

class Header(object):
    def __init__(self, driver):
        self.driver = driver

    def index_to_download(self):
        #對照頁面上的→下載
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > ul > li:nth-child(2) > a")))
        for x in range(10):
            try:
                self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > ul > li:nth-child(2) > a").click()
                break
            except:
                time.sleep(1.5)

        #對照頁面上的→檔案名稱
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-dataplatform-mail-link > app-golden-download > main > div > div > div > table > thead > tr > th:nth-child(2) > a > span")))
        check = self.driver.find_element_by_css_selector("body > app-root > app-dataplatform-mail-link > app-golden-download > main > div > div > div > table > thead > tr > th:nth-child(2) > a > span").get_attribute("innerText")
        return check

    def download_to_index(self):
        #對照頁面上的→HEADER首頁
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-dataplatform-mail-link > app-golden-main > header > div > nav > ul > li:nth-child(1) > a")))
        for x in range(10):
            try:
                self.driver.find_element_by_css_selector("body > app-root > app-dataplatform-mail-link > app-golden-main > header > div > nav > ul > li:nth-child(1) > a").click()
                break
            except:
                time.sleep(1.5)
        #對照頁面上的→Filter類別標籤
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-setting > div > div.card-body.d-flex.flex-column > div:nth-child(2) > div.panel-label")))
        #對照頁面上的→DataSet上的所有
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-setting > div > div.card-body.d-flex.flex-column > div.list-detail-control.mb-2.flex-shrink-0 > div.nav.nav-base > a.nav-item.nav-link.active")))
        
    def click_dataset(self,lan):
        #---PyQuery→Xpath---
        for x in range(5):
            try:
                HTML = self.driver.find_elements_by_css_selector(".card-control")[
                            0].get_attribute("innerHTML")
                Doc = PQ(HTML)
                Doc = Doc('.list-group-item-action').text()
                Doc = Doc.replace(" ", "\n")
                Doc = Doc.split("\n")
                # print(Doc)
                path = Doc.index(lan)
                pathh = '//*[@id="dp_ads.' + Doc[path+1] +'"]'
                self.driver.find_element_by_xpath(pathh).click()
                break
            except:
                time.sleep(3)

        #對照頁面上的→維度條件
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-fitler > div > div.card-body > h3:nth-child(3)")))
        check = self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-fitler > div > div.card-body > h3:nth-child(3)").get_attribute("innerText")
        return check 

    def change_language(self):#中→英
        WebDriverWait(self.driver,wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > span")))
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > span").click()
        
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select")))
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select").click()
        
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select > option:nth-child(2)")))
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select > option:nth-child(2)").click()
        #time.sleep(1)
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > ul > li:nth-child(1) > a").click()

    def check_language(self):
         #對照頁面上的→HEADER首頁
        # WebDriverWait(self.driver, wait).until(
        #     EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > ul > li:nth-child(1) > a > span")))
        # Home = self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > ul > li:nth-child(1) > a > span").get_attribute("innerText")
        #對照頁面上的→Filter Role Tags
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-setting > div > div.card-body.d-flex.flex-column > div:nth-child(3) > div.panel-label")))
        Role = self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-setting > div > div.card-body.d-flex.flex-column > div:nth-child(3) > div.panel-label").get_attribute("innerText")
        #對照頁面上的→Dimemsion Title
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-fitler > div > div.card-body > ul:nth-child(6) > li:nth-child(1) > a")))
        Customer = self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-fitler > div > div.card-body > ul:nth-child(6) > li:nth-child(1) > a").get_attribute("innerText")
        Customer = Customer.replace(" ","")
        #對照頁面上的→Dimemsion Item
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "#collapseDI0 > ol > li:nth-child(1)")))
        Country = self.driver.find_element_by_css_selector("#collapseDI0 > ol > li:nth-child(1)").get_attribute("innerText")
        
        return(Role,Customer,Country)
    
    def en_us_zh_tw(self):#英→中
        for x in range(5):
            try:
                WebDriverWait(self.driver,wait).until(
                    EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > span")))
                self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > span").click()
                
                WebDriverWait(self.driver, wait).until(
                    EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select")))
                self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select").click()
                
                WebDriverWait(self.driver, wait).until(
                    EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select > option:nth-child(1)")))
                self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > div > ol > li:nth-child(1) > div.data-value > select > option:nth-child(1)").click()
                
                self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > ul > li:nth-child(1) > a").click()
                break
            except:
                time.sleep(2.5)
            if x == 5:
                assert "es to tw fail" == 0
				
    def login_as(self):
    #dropdown-list無display可觀察因此使用強制休息
        WebDriverWait(self.driver,wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > header > div > nav > div > span")))
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > span").click()
        time.sleep(1)
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div > div > a").click()
        time.sleep(1)
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "#ModalUserSelect > div > div > div.modal-body > div:nth-child(2) > div > div > div > input")))
        self.driver.find_element_by_css_selector("#ModalUserSelect > div > div > div.modal-body > div:nth-child(2) > div > div > div > input").send_keys("daniel_lee")
        time.sleep(3)
        self.driver.find_element_by_css_selector("#ModalUserSelect > div > div > div.modal-body > div.modal-limited-block > table > tbody > tr > td:nth-child(1)").click()
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "#ModalUserSelect > div > div > div.modal-body > div.modal-limited-block > table > tbody > tr > td:nth-child(2)")))
        #time.sleep(3)
        self.driver.find_element_by_css_selector("#ModalUserSelect > div > div > div.modal-footer > a.btn.btn-sm.btn-primary").click()
   
   def check_puppet(self):
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > div.full-page-msg.dark.show > div > p")))
        # print(self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > div.full-page-msg.dark.show > div > p").get_attribute("innerText"))
    
    def verify_token(self):
        for x in range(5):
            try:
                WebDriverWait(self.driver, wait).until(
                    EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-setting > div > div.card-body.d-flex.flex-column > div.overflow-container.flex-grow-1 > ul > li")))
                HTML = self.driver.find_elements_by_css_selector(".card-control")[
                            0].get_attribute("innerHTML")
                Doc = PQ(HTML)
                Doc = Doc('.list-group-item-action').text()
                Doc = Doc.replace(" ", "\n")
                Doc = Doc.split("\n")
                # print(Doc)
                path = Doc.index("表名")
                pathh = '//*[@id="dp_ads.' + Doc[path+1] +'"]'
                self.driver.find_element_by_xpath(pathh).click()
                break
            except:
                time.sleep(3)
        return "dp_ads." + Doc[path+1]

    def dump(self,dataset,parallel):
        config_file = path.join(path.dirname(path.abspath(__file__)), 'Golden_Strategy.ini')
        config.read(config_file, encoding='utf8')
        url = str(config['DEFAULT']['url'])
        if url == "xxxxxxx":
            target = "xxxxxx"+ dataset
            with open('./test_SH3_%s.har'%parallel, 'r') as readObj:
                harDirct = json.loads(readObj.read())
                requestList = harDirct['log']['entries']
                for item in requestList:
                    urlString = (item['request']["url"])
                # print(urlString)
                    if urlString in target:
                    # print(urlString)
                        K = item['request']['headers']
                        K = K[4]['value']
            # print(K)
                return K
        else:
            target = "xxxxxxxx" + dataset 
            print(target)
        
            with open('./test_SH3_%s.har'%parallel, 'r') as readObj:
                harDirct = json.loads(readObj.read())
                requestList = harDirct['log']['entries']
                for item in requestList:
                    urlString = (item['request']["url"])
                # print(urlString)
                    if urlString in target:
                    # print(urlString)
                        K = item['request']['headers']
                        K = K[3]['value']
            # print(K)
                return K
