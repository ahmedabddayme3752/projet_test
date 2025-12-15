*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${BROWSER}        Chrome
${DELAY}          0.5
${HOME URL}       file:///home/ahmed/Desktop/projetTest/ecommerce_project/website/index.html

*** Keywords ***
Open Browser To Home Page
    Open Browser    ${HOME URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed    ${DELAY}
    Title Should Be    E-commerce | Next Gen Tech
    Wait Until Page Contains Element    css=.product-card

Input Search Term
    [Arguments]    ${term}
    Input Text    id:search-input    ${term}
    Run Keyword And Ignore Error    Wait Until Page Contains Element    css=.product-card    2s

Verify Product Visible
    [Arguments]    ${product_name}
    Scroll Element Into View    xpath=//h3[contains(text(), '${product_name}')]
    Wait Until Element Is Visible    xpath=//h3[contains(text(), '${product_name}')]
    Element Should Be Visible    xpath=//h3[contains(text(), '${product_name}')]

Verify Product Not Visible
    [Arguments]    ${product_name}
    Page Should Not Contain Element    xpath=//h3[contains(text(), '${product_name}')]

Verify No Results Message
    Scroll Element Into View    id:no-results
    Wait Until Element Is Visible    id:no-results
    Element Should Be Visible    id:no-results
    Element Should Contain    id:no-results    No products found

Close The Browser
    Close Browser
