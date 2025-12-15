*** Settings ***
Documentation     A test suite for the e-commerce search functionality.
...
...               This suite validates that the search bar correctly filters products
...               and displays the appropriate message when no results are found.
Resource          resources.robot
Test Teardown     Close The Browser

*** Test Cases ***
Search For Existing Product
    [Documentation]    Test searching for a product that exists in the catalog.
    Open Browser To Home Page
    Input Search Term    E-commerce
    Verify Product Visible    E-commerce X1 Laptop
    Verify Product Not Visible    Sonic Pro Headphones

Search For Category
    [Documentation]    Test searching for a category (e.g., 'Audio').
    Open Browser To Home Page
    Input Search Term    Audio
    Verify Product Visible    Sonic Pro Headphones
    Verify Product Visible    BassBoom Speaker
    Verify Product Not Visible    E-commerce X1 Laptop

Search For Non-Existent Product
    [Documentation]    Test searching for a term that yields no results.
    Open Browser To Home Page
    Input Search Term    Banana
    Verify No Results Message

Search Partial Match
    [Documentation]    Test searching with a partial string.
    Open Browser To Home Page
    Input Search Term    Watch
    Verify Product Visible    Smart Watch Series 5
