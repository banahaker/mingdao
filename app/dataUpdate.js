// data update from github page (https://banahaker.github.io/mingdao/data/information.json)
const url = 'https://banahaker.github.io/mingdao/data/information.json';
const honorRoll = document.querySelector('#honorRollData');
const announcements = document.querySelector('#announcementsData');

async function dataUpdate(url) {
    let data = await fetch(url);
    data = await data.json();
    let honorList = data[0];
    let announcementsList = data[1];
    const honorRollData = `
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[0].news_id}">${honorList[0].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[1].news_id}">${honorList[1].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[2].news_id}">${honorList[2].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[3].news_id}">${honorList[3].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[4].news_id}">${honorList[4].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[5].news_id}">${honorList[5].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[6].news_id}">${honorList[6].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${honorList[7].news_id}">${honorList[7].content}</a></li>
    `;
    const announcementsData = `
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[0].news_id}">${announcementsList[0].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[1].news_id}">${announcementsList[1].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[2].news_id}">${announcementsList[2].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[3].news_id}">${announcementsList[3].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[4].news_id}">${announcementsList[4].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[5].news_id}">${announcementsList[5].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[6].news_id}">${announcementsList[6].content}</a></li>
    <li><a target="_blank" href="http://www.mingdao.edu.tw/md/200310/honor/show.php?News_ID=${announcementsList[7].news_id}">${announcementsList[7].content}</a></li>
    `;
    honorRoll.innerHTML = honorRollData;
    announcements.innerHTML = announcementsData;
}

window.onload = () => {
    dataUpdate(url);
}