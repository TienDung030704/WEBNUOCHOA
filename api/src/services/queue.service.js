const prisma = require("../lib/prisma");

class QueueService {
  async push(job) {
    const { type, payload } = job;
    await prisma.queue.create({
      data: {
        type,
        payload: JSON.stringify(payload),
      },
    });
  }

  async findOnePending() {
    return prisma.queue.findFirst({
      where: { status: "PENDING" },
      orderBy: { createdAt: "asc" },
    });
  }

  async updateStatus(id, status) {
    return prisma.queue.update({
      where: { id },
      data: { status },
    });
  }
}

module.exports = new QueueService();
