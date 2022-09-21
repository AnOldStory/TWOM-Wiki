import re
import urllib.request

infile = open("input.txt","rt", encoding='UTF8')
text = infile.read()
regexObj = re.compile('vignette.wikia.nocookie.net\/imotwom\/images\/(.{0,25}).png\/revision\/latest')
hello = regexObj.findall(text) #all match list

hello = list(set(hello))
for i in hello:
  print(i)
  urllib.request.urlretrieve("https://vignette.wikia.nocookie.net/imotwom/images/"+i+".png",i.split('/')[2]+".png")

print(hello)

infile.close()

print("done")
