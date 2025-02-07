let friendList = [];

addFriend = () => {
    const inputElement = document.getElementById('friendInput');
    const friendName = inputElement.value;

    if (friendName === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    friendList.push(friendName);

    inputElement.value = '';
    updateFriendList();
}

handleKeyPressAddFriend = (event) => {
  if (event.key === 'Enter') {
      addFriend();
  }
}

updateFriendList = () => {
    const listElement = document.getElementById('friendList');
    listElement.innerHTML = '';

    friendList.forEach(friend => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = friend;
        listElement.appendChild(listItemElement);
    });
}

drawFriend = () => {
    const resultElement = document.getElementById('result');
    const randomIndex = Math.floor(Math.random() * friendList.length);
    const randomFriend = friendList[randomIndex];

    resultElement.textContent = randomFriend;
}
