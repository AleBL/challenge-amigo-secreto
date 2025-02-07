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

