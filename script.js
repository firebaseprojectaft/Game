const missions = [
  {
    id: "mission1",
    title: "The Bakery Pop-Up",
    description: "Make the bakery's daily special appear when a button is clicked.",
    xpReward: 50,
    coinReward: 20,
    html: `
      <button id="showBtn">Show Today’s Special</button>
      <div id="special" style="display: none; margin-top: 10px; font-weight: bold;">
        Today’s Special: 2-for-1 Cupcakes!
      </div>
    `,
    jsCheck: `
      const special = document.getElementById('special');
      special && special.style.display === 'block'
    `
  },
  {
    id: "mission2",
    title: "Dark Mode Toggle",
    description: "Add a button that toggles dark mode.",
    xpReward: 60,
    coinReward: 25,
    html: `
      <button id="toggleBtn">Toggle Dark Mode</button>
      <div id="page" style="padding: 20px;">
        Welcome to my website!
      </div>
    `,
    jsCheck: `
      const page = document.getElementById('page');
      page && page.style.backgroundColor === 'black'
    `
  }
];
