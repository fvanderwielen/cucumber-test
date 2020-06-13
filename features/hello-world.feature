Feature: Hello World

    Scenario: Helloworld: Load the werkenbij website homepage
        When we request the werkenbij homepage
        Then we should see something
		
    Scenario: Fill in a form
		Given the werkenbij vacature page
        When we search for frontend
        Then we should see the frontend vacancy
		
    Scenario: Check for accessibility
        When we request the politie homepage and look at its accessibility
        Then we should see something