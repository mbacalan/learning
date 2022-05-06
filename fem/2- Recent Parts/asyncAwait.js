// Promise chains

fetchCurrentUser()
  .then(function onUser(user) {
    return Promise.all([
      fetchArchivedOrders(user.id),
      fetchCurrentOrders(user.id)
    ]);
  })
  .then(function onOrder([archivedOrders, currentOrders]) {
    // ...
  });
