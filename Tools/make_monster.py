import re

infile = open("input.txt","r")
text = infile.read()
regexObj = re.compile('   "(.+)"')
hello = regexObj.findall(text) #all match list
lists=[]
for i in hello:
  lists.append('"'+i+'"'+ """
: {
    en: \"""" + i +"""\",
    kr: "",
    level: 1,
    "attack range": 0,
    "attack style": 0,
    "respawn time": "30 sec",
    exp: 60,
    "drop item": [],
    type: 0
  },
  """)
#print(lists)

infile.close()

infile = open("output.txt","w+")
infile.write(''.join(lists))
infile.close()

print("done")
