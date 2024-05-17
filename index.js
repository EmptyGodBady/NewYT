const accessKey = "4402mypdxNGKHIc1DlgtVzu1BpVNK5WQqFJ11jnxCkk";

fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=4`).then(res => {
    res.json().then(obj => {
        
        
        for (let i = 0; i < 4; i++) {
            const imageUrl = obj[i].urls.regular;
            const profileImageUrl = '/svg/sustainable.png'; // URL профиля
            const title = 'Some pieces of nature';
            const channel = 'NatureForFree';
            const views =  'тыс.';
            const daysAgo = 5;

            createElement(profileImageUrl, title, channel, views, daysAgo, imageUrl);
        
        }
    });
});
function createElement(profileImageUrl, title, channel, views, daysAgo, imageUrl) {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'cursor-pointer w-80 max-h-80 ml-4 mt-4 mb-12';

    const imageContainer = document.createElement('div');
    imageContainer.className = 'max-w-80';

    const img = document.createElement('img');
    img.className = 'w-full h-44 hover:rounded-none ease-in duration-200 rounded-xl cursor-pointer';
    img.src = imageUrl; // Используем URL изображения из API
    img.alt = '';

    imageContainer.appendChild(img);

    const flexDiv = document.createElement('div');
    flexDiv.className = 'flex flex-row mt-2';

    const profileImageContainer = document.createElement('div');
    profileImageContainer.className = 'w-10 h-10 rounded-full';

    const profileImg = document.createElement('img');
    profileImg.src = profileImageUrl;
    profileImg.alt = '';

    profileImageContainer.appendChild(profileImg);

    const textDiv = document.createElement('div');
    textDiv.className = 'ml-2';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'h-10';
    titleDiv.textContent = title;

    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'text-gray-400';

    const channelP = document.createElement('p');
    channelP.className = 'hover:text-gray-200 ease-on duration-300';
    channelP.textContent = channel;

    const viewsP = document.createElement('p');
    viewsP.textContent = `${views} просмотров • ${daysAgo} дней назад`;

    detailsDiv.appendChild(channelP);
    detailsDiv.appendChild(viewsP);

    textDiv.appendChild(titleDiv);
    textDiv.appendChild(detailsDiv);

    flexDiv.appendChild(profileImageContainer);
    flexDiv.appendChild(textDiv);

    mainDiv.appendChild(imageContainer);
    mainDiv.appendChild(flexDiv);

    document.getElementById('container').appendChild(mainDiv);
}

