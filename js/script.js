class CMain {
  constructor(games) {
    this.games = games
    this.init()
  }

  init() {
    const mainElement = document.getElementById("main")
    this.games.forEach((game) => {
      const link = document.createElement("a")
      link.textContent = game.id + 1
      link.href = `game/${game.route}`
      link.dataset.id = game.id
      mainElement.appendChild(link)
    })
  }
}

const games = [
  { id: 0, name: "Test 1", route: "1" },
  { id: 1, name: "Test 2", route: "2" },
  { id: 2, name: "Test 3", route: "3" },
  { id: 3, name: "Test 4", route: "4" },
  { id: 4, name: "Test 5", route: "5" },
  { id: 5, name: "Test 6", route: "6" },
  { id: 6, name: "Test 7", route: "7" },
  { id: 7, name: "Test 8", route: "8" },
  { id: 8, name: "Test 9", route: "9" },
  { id: 9, name: "Test 10", route: "10" },
  { id: 10, name: "Test 11", route: "11" },
  { id: 11, name: "Test 12", route: "12" },
  { id: 12, name: "Test 13", route: "13" },
  { id: 13, name: "Test 14", route: "14" },
  { id: 14, name: "Test 15", route: "15" },
  { id: 15, name: "Test 16", route: "16" },
  { id: 16, name: "Test 17", route: "17" },
  { id: 17, name: "Test 18", route: "18" },
  { id: 18, name: "Test 19", route: "19" },
  { id: 19, name: "Test 20", route: "20" },
  { id: 20, name: "Test 21", route: "21" },
  { id: 21, name: "Test 22", route: "22" },
  { id: 22, name: "Test 23", route: "23" },
  { id: 23, name: "Test 24", route: "24" },
  { id: 24, name: "Test 25", route: "25" },
  { id: 25, name: "Test 26", route: "26" },
  { id: 26, name: "Test 27", route: "27" },
  { id: 27, name: "Test 28", route: "28" },
  { id: 28, name: "Test 29", route: "29" },
  { id: 29, name: "Test 30", route: "30" },
  { id: 30, name: "Test 31", route: "31" },
]

const main = new CMain(games)
