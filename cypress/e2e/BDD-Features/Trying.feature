Feature: FEATURE: Open Web, Login User, Logout User and search notebbok and add to cart

    Scenario: Open Web
        Given A user open the home page
        Then Verify Page

    Scenario: New User
        When A new user registers
       
    
    Scenario: Login User
        When A user opens the login page
        
    
    Scenario: Logout User
        When User closes login
        Then Verify closes login

    Scenario: Search Notebbok
        When A user searches for a notebook
        Then Verify search notebook

    Scenario: Notebook add to cart 
        When A user add notebook to cart
        Then Verify add notebook