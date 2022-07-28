let str = `
010-1234-5647.
sksksk@naver.com
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=u0IdlQAO47j59AtNetAuJjxhxci40qmJ
the life is timing.
Theabbccdddd
http://localhost:244
`



console.log(
    str.match(/\b\w{2,3}\b/g)
    )



