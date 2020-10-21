@seller
Feature: US101 user should join seller page

  Scenario Outline:TC101 user should join as a seller
    Given user on the glbhomepage
    When user clicks seller join now button
    And user clicks agent seller button
    When user enters name1 "<name>"
    And user enters email1 "<email>"
    And user enters sub domain "<subdomain>"
    And user enters mobile1 "<mobile>"
    And user enters country "<country>"
    And user enters  state "<state>"
    And user enters city "<city>"
    And user enters address "<address>"
    And user enters postalcode "<postalcode>"
    And user enters furniture "<furniture>"
    And user enters password1 "<password>"
    Then user clicks registiration
    Examples:
      | name  | email           | subdomain           | mobile     | country | state | city    | address       | postalcode | furniture | password   |
      | fatih | fatih@gmail.com | www.fatihyalcin.com | 6102023339 | USA     | PA    | Malvern | 152 sproul rd | 19355      | furniture | malvern123 |