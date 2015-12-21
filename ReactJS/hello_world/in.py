
def get_auth_cookies(username, password):
    print "\nLogin to FrontEnd Masters...", sys.stdout.flush()
    driver.get('https://frontendmasters.com/login')
    elem = driver.find_element_by_id("rcp_user_login")
    elem.send_keys(username)
    elem = driver.find_element_by_id("rcp_user_pass")
    elem.send_keys(password)
    elem.send_keys(Keys.RETURN)
    time.sleep(1)
    html_source = driver.page_source
    if "Incorrect password" in html_source:
        print "Incorrect Username or Password"
        driver.close()
        exit()
    else:
        print "Success. Login was successful\n"
    return driver.get_cookies()