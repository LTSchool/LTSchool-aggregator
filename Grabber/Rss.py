import feedparser
d = feedparser.parse('https://www.liga.net/news/all/rss.xml')
for post in d.entries:
    print(post.title+ "\n" + post.description + "\n" + post.link + "\n")
