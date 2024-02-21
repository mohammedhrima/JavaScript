import shutil
import glob
import os

print("saving")

isDir = os.path.exists("Consigne LPF")
if not isDir:
    os.makedirs("Consigne LPF")

source_dir = os.getcwd()
print(source_dir)
dst = os.getcwd() + '/Consigne LPF'
print(dst)
files = glob.iglob(os.path.join(source_dir, "*.wav"))
for file in files:
    if os.path.isfile(file):
        shutil.copy2(file, dst)

WindowsError = 2
"----------------------Remove all wav file----------------------"
for bfile in os.listdir():
    bfile = str(bfile)
    if bfile.endswith('.wav'):
        try:
            os.remove(bfile)
        except WindowsError:
            if WindowsError == 5:
                os.chmod(bfile, 0o777)
                os.remove(bfile)
            else:
                raise WindowsError

backup = open("Backup_path/backup.txt", "r")
content = backup.read()
if content != "":
    if os.path.exists(content):
        src = os.getcwd() + '/Consigne LPF'
        dst = content
        files2 = glob.iglob(os.path.join(src, "*.wav"))
        for file2 in files2:
            filename = os.path.basename(file2)
            backup_file = content+"/"+filename
            if not os.path.isfile(backup_file):
                print("before cp", backup_file)
                print("copy", file2)
                try:
                    shutil.copy2(file2, dst)
                except Exception:
                    print("line 46", Exception)
