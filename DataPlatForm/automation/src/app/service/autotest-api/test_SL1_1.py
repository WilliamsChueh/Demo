#---import---
from selenium import webdriver
from configparser import ConfigParser
from selenium.webdriver.chrome.options import Options
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from os import path
import traceback
import time
import unittest
import pytest
import json
import os
import sys
#---import---

#---ini---
config = ConfigParser()
#---必備---↓
config_file = path.join(path.dirname(path.abspath(__file__)), 'Golden_Strategy.ini')
config.read(config_file, encoding='utf8')
# driver_path = str(config['DEFAULT']['chromedriver_path'])
wait =int(config['DEFAULT']['wait'])
url = str(config['DEFAULT']['url'])
dev_path = str(config['DEFAULT']['dev_path'])
# test_mode = str(config['DEFAULT']['test_mode'])
#---ini---
sys.path.append(dev_path)#不加這段會無法import其他py
from module.LANDING_PAGE_Objects import LocalStorage
from module.LANDING_PAGE_Objects import Check_AD

browser_mode = sys.argv[1]
@pytest.mark.usefixtures(browser_mode)#共享Conftest.py
#pytest.mark.usefixtures("setup")#共享Conftest.py
class LANDING_PAGE(unittest.TestCase):
    #test_SL1_1
    def test_SL1_1(self):
        try:
            storage = LocalStorage(self.driver)
            Check_AD(self.driver).account_name()
            # print(storage['ngGlobals'])
            assert bool(storage['ngGlobals']) == True
        except NoSuchElementException as ec:
            print(ec)
            assert 1 == 0
        except TimeoutException as ac:
            pass
            print(traceback.format_exc())
            assert 1 == 0
        except Exception as e:
            print(traceback.format_exc())
            assert 1 == 0
            
if __name__ == '__main__':
    unittest.main()
