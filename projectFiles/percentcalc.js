
buyprice = "buyinput";
sellprice = "sellinput";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter buy price: ", (buyInput) => {
  rl.question("Enter sell price: ", (sellInput) => {

    const buyPrice = Number(buyInput);
    const sellPrice = Number(sellInput);

    if (isNaN(buyPrice) || isNaN(sellPrice) || buyPrice <= 0) {
      console.log("Error: Please enter valid numbers.");
    } else {
      // Profit / Loss in dollars
      const profitLoss = sellPrice - buyPrice;

      // Percentage gain / loss
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





