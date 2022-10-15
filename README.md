# tournament-winner

ALGO EXPERT EASY

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that reutrns the winner of the tournament. The input arrays are named _competitions_ and _results_, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where 1 in the results array means the home team won and 0 means that the away team won. It's guaranted that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

Sample input: competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]] results = [0, 0, 1] <br>
Sample output: "Python" (C# beats HTML, Python beats C# & Python beats HTML)
