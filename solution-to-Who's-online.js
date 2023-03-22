const whosOnline = (friends) => {
  let offlineArr = []
  let awayArr = []
  let onlineArr = []
  const usersStatus = {};

  if (Object.keys(friends).length === 0) {
    return usersStatus;
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === 'offline') {
      offlineArr.push(friends[i].username);
    } else if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
      awayArr.push(friends[i].username);
    } else {
      onlineArr.push(friends[i].username);
    }
  }

  if (offlineArr.length > 0) {
    usersStatus.offline = offlineArr;
  }

  if (awayArr.length > 0) {
    usersStatus.away = awayArr;
  }

  if (onlineArr.length > 0) {
    usersStatus.online = onlineArr;
  }

  return usersStatus;
};
