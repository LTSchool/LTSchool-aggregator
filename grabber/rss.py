import feedparser


def rssgrabber(link):
    return feedparser.parse(link)


if __name__ == '__main__':
    d = rssgrabber('https://www.liga.net/news/all/rss.xml')
    for post in d.entries:
        print(post.title+ "\n" + post.description + "\n" + post.link + "\n")