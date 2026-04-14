const constants = {
  httpCodes: {
    // Success
    ok: 200,
    created: 201,
    noContent: 204,

    // Client Error
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    conflict: 409,
    unprocessableContent: 422,
    tooManyRequests: 429,

    // Server error
    internalServerError: 500,
  },

  prismaCodes: {
    duplicate: "P2002",
  },

  ORDER_STATUSES: [
    "PENDING",
    "CONFIRMED",
    "SHIPPING",
    "DELIVERED",
    "CANCELLED",
  ],

  ALLOWED_STATUS_TRANSITIONS: {
    PENDING: ["CONFIRMED", "SHIPPING", "DELIVERED", "CANCELLED"],
    CONFIRMED: ["PENDING", "SHIPPING", "DELIVERED", "CANCELLED"],
    SHIPPING: ["CONFIRMED", "DELIVERED", "CANCELLED"],
    DELIVERED: ["SHIPPING"],
    CANCELLED: ["PENDING"],
  },

  QUEUE_STATUS: {
    PENDING: "PENDING",
    INPROGRESS: "INPROGRESS",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
  },
};

module.exports = constants;
