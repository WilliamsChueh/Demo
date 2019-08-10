# -*- coding: utf-8 -*-

###
### DO NOT CHANGE THIS FILE
### 
### The code is auto generated, your change will be overwritten by 
### code generating.
###
from __future__ import absolute_import

from .api.test_case_dryrun import TestCaseDryrun
from .api.test_case import TestCase


routes = [
    dict(resource=TestCaseDryrun, urls=['/test/case/dryrun'], endpoint='test_case_dryrun'),
    dict(resource=TestCase, urls=['/test/case'], endpoint='test_case'),
]