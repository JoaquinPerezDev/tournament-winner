//Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that reutrns the winner of the tournament. The input arrays are named *competitions* and *results*, respectively. The competitions array has elements in the form of [homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where 1 in the results array means the home team won and 0 means that the away team won. It's guaranted that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams. 

//Sample input: competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]] results = [0, 0, 1]
//Sample output: "Python" (C# beats HTML, Python beats C# & Python beats HTML)

//The first approach I can think of is, since the competitions results are given to us, we can keep track of the competition winners in a hash map and give them points per win. At the end of this process, the team with the highest amount of points is the tournament winner. For this, we want to establish a leader and a scoreboard to keep track. The we can loop through the competitions array and add a conditional checking if the winner is on the scoreboard, as well as if it's the leader. If it isn't on the scoreboard, we add that team to the scoreboard and assign points to it. If it's points are higher than the current leader, we declare this current team as the leader. At the end of this loop, we return the name of the leader.

//The time complexity for this algorithm will be O(n) time, given that we run one loop to keep track of scores and the leader. The space complexity is O(k) given the amount of teams competing in the tournament, which is the amount of keys in the scoreboard hash map. 

function tournamentWinner(competitions, results) {
  // Write your code here.
  const leader = { score: 0, name: ''}
  const scoreboard = {};

  for(let i = 0; i < competitions.length; i++) {
    const winnerIdx = results[i] === 0 ? 1 : 0;
    const winner = competitions[i][winnerIdx];

    if(winner in scoreboard) scoreboard[winner] += 3;
    else scoreboard[winner] = 3;

    if(leader.score < scoreboard[winner]) {
      leader.name = winner;
      leader.score = scoreboard[winner];
    }
  }
  return leader.name;
}