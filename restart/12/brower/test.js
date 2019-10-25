const request = new XMLHttpRequest()
request.open('GET','http://api.randomuser.me/?nat=US&results=10')
request.onload = () => printNames(request.response)
request.send()