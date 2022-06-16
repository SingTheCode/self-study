const cron = require("node-cron");

// second minute hour day-of-month month day-of-week
cron.schedule("0-59 * * * * *", function () {
  console.log(new Date().toString());
});
