#---import---
from selenium import webdriver
from configparser import ConfigParser
from selenium.webdriver.chrome.options import Options
from browsermobproxy import Server
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
import traceback
import time
import unittest
import pytest
import json
import os
from os import path
import sys
import requests
#---import---

#---ini---
config = ConfigParser()
#---必備---↓
config_file = path.join(path.dirname(path.abspath('__file__')), 'Golden_Strategy.ini')
config.read(config_file, encoding='utf8')
driver_path = str(config['DEFAULT']['chromedriver_path'])
browserproxy =str(config['DEFAULT']['mobproxy'])
url = str(config['DEFAULT']['url'])
dev_path = str(config['DEFAULT']['dev_path'])
#---ini---
sys.path.append(dev_path)#不加這段會無法import其他py
from module.LANDING_PAGE_Objects import BasePage
from module.LANDING_PAGE_Objects import Check_AD
from module.LANDING_PAGE_Objects import LocalStorage
from module.HEADER_Objects import Header
from module.HEADER_Objects import mobproxy
from module.DATASET_Objects import DataSet

browser_mode = sys.argv[1]
parllel = sys.argv[2]
@pytest.mark.usefixtures(browser_mode)#共享Conftest.py
#@pytest.mark.usefixtures("setup_proxy")#共享Conftest.py
class DATASET(unittest.TestCase):
    def test_ST3_3(self):
        try:
            exec_time = time.strftime('%Y-%m-%d %H-%M-%S')
            # Header(self.driver).en_us_zh_tw()
            self.proxy.new_har(
            exec_time, options={
                'captureHeaders': True,
                'captureContent': True
            })
            A = DataSet(self.driver).ST3_3_Part1()
            # tag_result = DataSet(self.driver).Table_Name()
            with open('./test_ST3_3_%s.har'%parllel, 'w') as f:
                json.dump(self.proxy.har, f)
            url = DataSet(self.driver).ST3_3_Part2(parllel)
            self.driver.get(url)
            B = DataSet(self.driver).ST3_3_Part3()
            print(A)
            print(B)
            assert A == B
        except NoSuchElementException as ec:
            print(ec)
            self.driver.get("http://" + url)
            assert 1 == 0
        except TimeoutException as ac:
            pass
            self.driver.get("http://" + url)
            print(traceback.format_exc())
            assert 1 == 0
        except Exception as e:
            self.driver.get("http://" + url)
            print(e)
            assert 1 == 0

if __name__ == '__main__':
    unittest.main()
