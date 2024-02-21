import sys
import threading
import queue
from datetime import datetime
import os
import soundfile
import sounddevice
WindowsError = 2
print("start recording")
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

num = sys.argv[1]
now = datetime.now()
dt_string = now.strftime("%Y-%m-%d_%Hh%Mm%Ss("+num+").wav")
#dt_string = "file.wav"
print("name is:", dt_string)
audio_container = queue.Queue()


def Voice_Rec_Stop():
    R = threading.Thread(target=Record_audio)
    R.start()
    global file_exists
    file_exists = True


def Record_audio():
    try:
        global Recor_ding
        Recor_ding = True
        with soundfile.SoundFile(dt_string, mode='w', samplerate=44100, channels=2) as file:
            with sounddevice.InputStream(samplerate=44100, channels=2, callback=callback):
                while Recor_ding == True:
                    print("recording...")
                    file.write(audio_container.get())
    except:
        sys.exit(1)


def callback(indata, frames, time, status):
    global audio_container
    audio_container.put(indata.copy())


Voice_Rec_Stop()