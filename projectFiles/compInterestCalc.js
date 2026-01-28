const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask which calculator to use
rl.question(
  "Choose calculator:\n1) Profit / Loss\n2) Compound Interest\nEnter 1 or 2: ",
  (choice) => {

    if (choice === "1") {
      profitLossCalculator();
    } else if (choice === "2") {
      compoundInterestCalculator();
    } else {
      console.log("Invalid choice.");
      rl.close();
    }
  }
);

// ---------------- FUNCTIONS ---------------- //

function profitLossCalculator() {
  rl.question("Enter buy price: ", (buyInput) => {
    rl.question("Enter sell price: ", (sellInput) => {

      const buyPrice = Number(buyInput);
      const sellPrice = Number(sellInput);

      if (isNaN(buyPrice) || isNaN(sellPrice) || buyPrice <= 0) {
        console.log("Error: Invalid input.");
      } else {
        const profitLoss = sellPrice - buyPrice;
        const percent = (profitLoss / buyPrice) * 100;

        if (profitLoss > 0) {
          console.log(`Gain: ${percent.toFixed(2)}%`);
          console.log(`Profit: $${profitLoss.toFixed(2)}`);
        } else if (profitLoss < 0) {
          console.log(`Loss: ${percent.toFixed(2)}%`);
          console.log(`Loss Amount: $${Math.abs(profitLoss).toFixed(2)}`);
        } else {
          console.log("No gain or loss.");
        }
      }

      rl.close();
    });
  });
}

function compoundInterestCalculator() {
  rl.question("Enter principal amount: ", (pInput) => {
    rl.question("Enter annual interest rate (%): ", (rInput) => {
      rl.question("Enter number of years: ", (yInput) => {

        const principal = Number(pInput);
        const rate = Number(rInput);
        const years = Number(yInput);

        if (
          isNaN(principal) ||
          isNaN(rate) ||
          isNaN(years) ||
          principal <= 0 ||
          rate < 0 ||
          years <= 0
        ) {
          console.log("Error: Invalid input.");
        } else {
          const amount =
            principal * Math.pow(1 + rate / 100, years);

          const interestEarned = amount - principal;

          console.log(`Final Amount: $${amount.toFixed(2)}`);
          console.log(`Interest Earned: $${interestEarned.toFixed(2)}`);
        }

        rl.close();
      });
    });
  });
}



