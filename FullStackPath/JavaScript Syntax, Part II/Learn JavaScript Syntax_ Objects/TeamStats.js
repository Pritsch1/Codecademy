const team = 
{
//
  _players: 
  [
    {firstName: "fName1", lastName: "lName1", age: 1},
    {firstName: "fName2", lastName: "lName2", age: 2},
    {firstName: "fName3", lastName: "lName3", age: 3},
  ],
  _games: 
  [
    {opponent: 'opp10', teamPoints: 10, opponentPoints: 27},
    {opponent: 'opp20', teamPoints: 20, opponentPoints: 28},
    {opponent: 'opp30', teamPoints: 30, opponentPoints: 29},
  ],
  addPlayer(firstName, lastName, age) 
  {
    const player = 
    {
      firstName: firstName, 
      lastName: lastName, 
      age: age
    };
    this._players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints)
  {
    const game = 
    {
      opponent: opponent, 
      teamPoints: teamPoints, 
      opponentPoints: opponentPoints
    };
    this._games.push(game);
  },
  //
  }
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie ", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  console.log(team._players);

  team.addGame("op40", 40, 30);
  team.addGame("op50", 50, 31);
  team.addGame("op60", 60, 32);
  console.log(team._games);
