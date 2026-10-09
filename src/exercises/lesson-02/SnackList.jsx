function SnackList() {
  const snacks = [
    { id: 1, name: 'Icecream', rank: 1 },
    { id: 2, name: 'Chocolate Bar', rank: 2 },
    { id: 3, name: 'Cheese with crackers', rank: 3 },
    { id: 4, name: 'Pizza', rank: 4 },
    { id: 5, name: 'Rice Crispy Treat', rank: 5 },
  ];
  const leastFavoriteSnack = snacks.toSorted((a, b) => a.rank - b.rank);
  const mostFavoriteSnack = snacks.toSorted((a, b) => b.rank - a.rank);

  return (
    <div>
      <ul>
        {leastFavoriteSnack.map((snack) => (
          <li key={snack.id}>
            {snack.name} - Rank: {snack.rank}
          </li>
        ))}
      </ul>
      <ul>
        {mostFavoriteSnack.map((snack) => (
          <li key={snack.id}>
            {snack.name} - Rank: {snack.rank}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SnackList;
