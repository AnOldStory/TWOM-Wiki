import glob, os
fpaths="C:\\Users\\TheSky\\Desktop\\AutoTrans\\IMG\\*"
print(glob.glob(fpaths))
for fpath in glob.glob(fpaths):
  print(fpath)
  fpath_r = fpath.replace('-', ' ').replace('_',' ')                  
  os.rename(fpath, fpath_r[:-4]+".png") 

