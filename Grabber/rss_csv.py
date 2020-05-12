from pandas import read_csv
import feedparser

rssDataList = []

def get_url(file):
    dataset = read_csv(file)
    urls = dataset['url']
    for url in urls:
        data = feedparser.parse(url)
        for item in data.entries:
            rssDataList.append([item.title, item.published, item.link])


if __name__ == '__main__':
    get_url('rss.csv')