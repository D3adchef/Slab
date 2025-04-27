// 1. Mystery Dish Generator (Feast Page)
function generateMysteryDish() {
  const dishes = [
    "Ghoul Goulash",
    "Crypt Keeper’s Casserole",
    "Slaughterhouse Sliders",
    "Zombie Ziti",
    "Mummy Meatloaf"
  ];
  const choice = dishes[Math.floor(Math.random() * dishes.length)];
  document.getElementById("mysteryDishOutput").textContent = `Tonight's Mystery Dish: ${choice}`;
}

// 2. Gift Card Code Generator (Death Tickets Page)
function generateGiftCode() {
  const code = "SLAB-" + Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById("giftCodeOutput").textContent = `Your promo code: ${code}`;
}

// 3. Reservation Validator (Plot Page)
function checkReservation() {
  const size = parseInt(document.getElementById("partySize").value);
  const maxCapacity = 6;
  const output = document.getElementById("reservationOutput");

  if (isNaN(size)) {
    output.textContent = "Please enter a valid number.";
  } else if (size <= maxCapacity) {
    output.textContent = "You're good to go! A crypt has been reserved.";
  } else {
    output.textContent = "Too many souls! Please call to book a larger séance.";
  }
}

// 4. Séance Request Logger (Request a Séance Page)
let seanceList = [];

function addSeanceRequest() {
  const name = document.getElementById("seanceName").value.trim();
  const output = document.getElementById("seanceOutput");

  if (name) {
    seanceList.push(name);
    output.textContent = `Summoning ${name}... You’ve been added to the séance waitlist.`;
    document.getElementById("seanceName").value = "";
  } else {
    output.textContent = "Please enter a name to summon.";
  }
}
