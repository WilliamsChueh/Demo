#---import---
from configparser import ConfigParser
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import ElementClickInterceptedException
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.common.by import By
from pyquery import PyQuery as PQ
from browsermobproxy import Server
from selenium import webdriver
from os import path
import time
import json
import os
import sys
import re
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

class DataSet(object):
    
    def __init__(self, driver):
        self.driver = driver


    def ST3_3_Part1(self):
        # self.driver.find_element_by_css_selector("#ModalHistory > div > div > div.modal-header > button > i").click()
        # time.sleep(0.5)
        self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-header > div > a:nth-child(1)").click()
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "#ModalHistory > div > div > div.modal-body > div.sequence-group.bookmark-display-container > div:nth-child(1) > div.card-header > div.btn-group > a:nth-child(1)")))
        self.driver.find_element_by_css_selector("#ModalHistory > div > div > div.modal-body > div.sequence-group.bookmark-display-container > div:nth-child(1) > div.card-header > div.btn-group > a:nth-child(1)").click()
        time.sleep(2)#點選套用後等待背景執行
        self.driver.find_element_by_css_selector("#ModalHistory > div > div > div.modal-header > button > i").click()
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary")))
        # time.sleep(2)
        # self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary").click()
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary")))
        # self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary").click()
        # A = self.driver.find_element_by_css_selector("#SQLtabContent01 > div > div > code").get_attribute("innerText")
        # A = A.split("AND")[0:-1]
        for x in range(10):
            time.sleep(1)
            A = self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.data-result > b").get_attribute("innerText")
            if A == '':
                pass
            else:
                break
        return A     

    def ST3_3_Part2(self,parllel):
        config_file = path.join(path.dirname(path.abspath(__file__)), 'Golden_Strategy.ini')
        config.read(config_file, encoding='utf8')
        url = str(config['DEFAULT']['url'])
        with open('./test_ST3_3_%s.har'%parllel, 'r') as readObj:
            harDirct = json.loads(readObj.read())
            requestList = harDirct['log']['entries']
            for item in requestList:
                urlString = (item['request']["url"])
                url = url.split('/')[0]

                if url == 'xxxxxxxxxxxxxx':
                    if urlString == 'xxxxxxxxxxxxxx':
                        a = item['response']
                else:
                    if urlString == 'xxxxxxxxxxx':
                        a = item['response']
                
        b = json.loads((a['content']['text']))
        x = b['list'][0]['query']['id']
        y = b['list'][0]['id']
        url = 'xxxxxxxxxxx" + x +"/" + y
        return url

    def ST3_3_Part3(self):
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary")))
        #time.sleep(2)
        # self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary").click()
        # time.sleep(1)
        WebDriverWait(self.driver, wait).until(
            EC.element_to_be_clickable((By.CSS_SELECTOR, "body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary")))
        #self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.btn-group-individual > a.btn.btn-sm.btn-secondary").click()
        for x in range(10):
            time.sleep(1)
            A = self.driver.find_element_by_css_selector("body > app-root > app-golden-main > app-golden-content > main > div > div > aside.block-export > div > div.card-footer > div.data-result > b").get_attribute("innerText")
            if A == '':
                pass
            else:
                break
        #A = A.split("AND")[0:-1]
        return A

