require("dotenv").config();

const tasks = require("./src/tasks");
const constants = require("./src/config/constant");
const queueService = require("./src/services/queue.service");
const sleep = require("./src/utils/sleep");

(async () => {
  while (true) {
    const pendingJob = await queueService.findOnePending();
    if (pendingJob) {
      const type = pendingJob.type;
      const payload = JSON.parse(pendingJob.payload);

      try {
        console.log(`Job: "${type}" is processing...`);
        await queueService.updateStatus(
          pendingJob.id,
          constants.QUEUE_STATUS.INPROGRESS,
        );

        const handler = tasks[type];
        if (!handler) {
          throw new Error(`Khong co task xu ly cho: "${type}"`);
        }

        await handler(payload);

        await queueService.updateStatus(
          pendingJob.id,
          constants.QUEUE_STATUS.COMPLETED,
        );

        console.log(`Job: "${type}" is processed`);
      } catch (error) {
        await queueService.updateStatus(
          pendingJob.id,
          constants.QUEUE_STATUS.FAILED,
        );
      }
    }

    await sleep(1000);
  }
})();
