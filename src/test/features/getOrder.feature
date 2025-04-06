Feature: Get Order API


Scenario: Verify the Get Order API returns a valid response
        Given I send a GET request to "https://webhook.site/feb81226-8a0b-4edd-90e3-3eee78f1f4f6"
        Then the response status code should be 200
        
        
Scenario: Verify the Get Order API returns a valid content type
        Given I send a GET request to "https://webhook.site/feb81226-8a0b-4edd-90e3-3eee78f1f4f6"
        Then the response content type should be "application/json"    
 
