export const App = () => {
  return (
    <div className={css.App}>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers.toLocaleString('ru')}
        views={user.stats.views.toLocaleString('ru')}
        likes={user.stats.likes.toLocaleString('ru')}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
