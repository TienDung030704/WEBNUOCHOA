const getPagination = (page = 1, limit = 20) => {
  const currentPage = Math.max(1, Number(page));
  const pageSize = Math.max(1, Number(limit));
  return {
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
    page: currentPage,
    limit: pageSize,
  };
};

module.exports = { getPagination };
