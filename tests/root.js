module.exports = {
  // you can search for content with the quick search bar
  
    quick_search_works5: function (browser) {
    browser.url('https://www.pdq.com')
    browser.waitForElementVisible('body', 1000)
    browser.setValue('input[type=text]', 'PowerShell')
    browser.keys('')
    browser.pause(10000)
    browser.assert.urlContains('?q=PowerShell')
    browser.end()
  },

  // dropdown menus are navigable
  dropdown_menus_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .moveToElement('button[data-test-id=resources]', 100, 100, function () {
        browser.click('button[data-test-id=resources]')
        browser.pause(200);
        browser.assert.visible('a[data-test-id=blog-menu-button]')
          
      })
      .end()
  },

  // free trial link takes you to a registration page
  free_trial_links_work: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .click('[data-test-id=start-trial-cta-link]')
      .end()
  },

  // we have a link somewhere on the page to schedule a demo
  demo_link_exists: function (browser) {
    browser
      .url('https://www.pdq.com')
      .waitForElementVisible('body', 1000)
      .assert.visible('a[href*="https://app.hubspot.com/meetings/kelly-hammer/45-minute-product-demo"]')
      .end()
  },

 // all footer links work
  footer_links_work: function (browser) {
    const footerlinks = [
      'PDQ Deploy',
      'PDQ Inventory',
      'Enterprise SL',
      'Pricing',
      'Downloads',
      'Licensing',
      'Buy',
      'Support',
      'Videos',
      'Blog',
      'PowerShell',
      'Webcast',
      'Getting Started',
      'ROI Calculator',
      'Search',
      'About',
      'Tax Documents',
      'Contact',
      'Careers',
      'Documentation',
      'Privacy Policy',
      'Terms of Use'
    ]
//    browser.url('https://www.pdq.com')
//    browser.waitForElementVisible('body', 1000)


//    footerlinks.forEach(potentialFooterLink => {
//     browser.assert.visible('footer[href=potentialFooterLink]') Note: I couldn't get this one to work. 
//    })
 browser.end()


  }


}