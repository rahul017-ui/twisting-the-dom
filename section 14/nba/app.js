const warr = [
  {
    awayTeam: {
      team: "gold",
      points: 119,
      isWinner: true,
    },

    homeTeam: {
      team: "house",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "gold",
      points: 105,
      isWinner: false,
    },

    homeTeam: {
      team: "house",
      points: 127,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "gold",
      points: 100,
      isWinner: false,
    },

    homeTeam: {
      team: "house",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "gold",
      points: 101,
      isWinner: false,
    },

    homeTeam: {
      team: "house",
      points: 92,
      isWinner: false,
    },
  },
];

const makeChart = (games) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const gameLi = document.createElement("li");
    gameLi.innerHTML = getscoreLine(game);

    // const warrior = hteam === "gold" ? homeTeam : awayTeam;
    // gameLi.classList.add(warrior.isWinner ? "win" : "loss");
    // console.log(warrior);

    ulParent.appendChild(gameLi);
    // console.log(awayTeam.team,homeTeam.team);
  }
  return ulParent;
};

const getscoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hteam, points: hpoints } = homeTeam;
  const { team: ateam, points: apoints } = awayTeam;
  const teamName = `${ateam}  @ ${hteam}`;

  let scoreLine;
  //    const scrore =`${apoints}-${hpoints}`;
  if (apoints > hpoints) {
    scoreLine = `<b>${apoints}</b>-${hpoints}`;
  } else {
    scoreLine = `${apoints}-<b>${hpoints}</b>`;
  }
  return `${teamName} ${scoreLine}`;
};

const chart1 = makeChart(warr);
document.body.prepend(chart1);
