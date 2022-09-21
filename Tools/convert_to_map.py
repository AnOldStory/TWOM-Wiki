import re

infile = open("input.txt","r")
text = infile.read()

text = re.sub('\]',']}',text)
text = re.sub('\:\s\[',': {en:"",kr:"", mobs: [',text)

print(text)

infile.close()

infile = open("output.txt","w+")
infile.write(text)
infile.close()

print("done")
