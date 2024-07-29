Feature: YouTube Test

  Scenario: Verify YouTube channel name
    When I go to page "https://www.youtube.com/@beskat"
    Then I verify YouTube channel name "Beskat"