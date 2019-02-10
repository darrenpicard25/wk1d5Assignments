const totalPop = function amountOfPopYouCanGetWithMoney (amount) {
  let totalBottles = Math.floor(amount/2);
  let emptyBottles = totalBottles;
  let bottleCaps = totalBottles;
  let earnedByBottle = 0;
  let earnedByCaps = 0;
  while (emptyBottles >= 2 || bottleCaps >= 4) {
    if (emptyBottles >= 2) {
      let extraBottle = Math.floor(emptyBottles/2);
      bottleCaps += extraBottle;
      totalBottles += extraBottle;
      earnedByBottle += extraBottle;
      emptyBottles -= extraBottle*2;
      emptyBottles += extraBottle;
    }
    if (bottleCaps >= 4) {
      let extraBottleCapBottles = Math.floor(bottleCaps/4);
      totalBottles += extraBottleCapBottles;
      earnedByCaps += extraBottleCapBottles;
      emptyBottles += extraBottleCapBottles;
      bottleCaps -= extraBottleCapBottles*4;
      bottleCaps += extraBottleCapBottles;
    }
  }
  console.log(`TOTAL BOTTLES: ${totalBottles}`);
  console.log(`REMAINING BOTTLES: ${emptyBottles}`);
  console.log(`REMAINING CAPS: ${bottleCaps}`);
  console.log('TOTAL EARNED:');
  console.log(`  BOTTLES: ${earnedByBottle}`);
  console.log(`     CAPS: ${earnedByCaps}`);
};


let money = Number(process.argv[2]);
totalPop(money);