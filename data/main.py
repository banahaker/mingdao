import requests
import bs4
import json

# get page response
url = 'http://www.mingdao.edu.tw/homeX/Web/'

header = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.57"
}

response = requests.get(url, headers=header)
response.encoding = 'utf-8'
data = response.text

# response page analyse
root = bs4.BeautifulSoup(data, 'html.parser')
infos = root.find_all('a', class_="style44")
informationList = []
for i in range(16):
    key = infos[i]
    if i<7:
        news_id = key.attrs['onclick']
        news_id = news_id.replace("','公告內容','scrollbars=yes,resizable=yes,width=500,height=400')", "")
        news_id = news_id.replace("MM_openBrWindow('../../md/200310/honor/show.php?News_ID=", "")
        singleInfo = {
            "content": key.string,
            "news_id": news_id
        }
        informationList.append(singleInfo)
    else:
        news_id = key.attrs['href']
        news_id = news_id.replace("../../md/200310/honor/show.php?News_ID=", "")
        singleInfo = {
            "content": key.string,
            "news_id": news_id
        }
        informationList.append(singleInfo)

honorRoll = informationList[0:8]
announcements = informationList[8:16]

# deal with json file
allInfo = [honorRoll, announcements]
jsonAllInfo = json.dumps(allInfo, ensure_ascii=False, sort_keys=True, indent=2)

# write json file
with open('information.json', 'w', encoding='utf-8') as file:
    file.write(jsonAllInfo)