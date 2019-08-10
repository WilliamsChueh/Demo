#---import---
from configparser import ConfigParser
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from os import path
import time
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
dev_path = str(config['DEFAULT']['dev_path'])
#---ini---
sys.path.append(dev_path)

class LocalStorage:#取LocalStorage
    def __init__(self, driver) :
        self.driver = driver

    def __len__(self):
        return self.driver.execute_script("return window.localStorage.length;")

    def items() :
        return self.driver.execute_script( \
            "var ls = window.localStorage, items = {}; " \
            "for (var i = 0, k; i < ls.length; ++i) " \
            "  items[k = ls.key(i)] = ls.getItem(k); " \
            "return items; ")

    def keys() :
        return self.driver.execute_script( \
            "var ls = window.localStorage, keys = []; " \
            "for (var i = 0; i < ls.length; ++i) " \
            "  keys[i] = ls.key(i); " \
            "return keys; ")

    def get(self, key):
        return self.driver.execute_script("return window.localStorage.getItem(arguments[0]);", key)

    def set(self, key, value):
        self.driver.execute_script("window.localStorage.setItem(arguments[0], arguments[1]);", key, value)

    def has(self, key):
        return key in self.keys()

    def remove(self, key):
        self.driver.execute_script("window.localStorage.removeItem(arguments[0]);", key)

    def clear(self):
        self.driver.execute_script("window.localStorage.clear();")

    def __getitem__(self, key) :
        value = self.get(key)
        if value is None :
          return 0
        return value

    def __setitem__(self, key, value):
        self.set(key, value)

    def __contains__(self, key):
        return key in self.keys()

    def __iter__(self):
        return self.items().__iter__()

    def __repr__(self):
        return self.items().__str__()

class Check_AD(object):#確認右上角姓名出現
    def __init__(self, driver):
        self.driver = driver
    
    def account_name(self):
        #對照頁面上的語言切換左方姓名
        WebDriverWait(self.driver, wait).until(
            EC.visibility_of_element_located((
                By.CSS_SELECTOR,
                "body > app-root > app-golden-main > header > div > nav > div.user-account > span"
            )))
        # print(self.driver.find_element_by_css_selector("body > app-root > app-golden-main > header > div > nav > div.user-account > span").get_attribute("innerText"))
