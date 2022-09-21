import re

infile = open("input.txt","r")
text = infile.read()
regexObj = re.compile('title="(.*)">/?')
hello = regexObj.findall(text) #all match list
print(":")
print(hello)

infile.close()

print("done")
