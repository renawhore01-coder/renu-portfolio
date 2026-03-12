import io
import time
from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
driver = webdriver.Chrome(options=options)

try:
    driver.get(r'file:///d:/antigravity/portfolio renu/index.html')
    time.sleep(1)
    logs = driver.get_log('browser')
    for log in logs:
        print(log)
finally:
    driver.quit()
