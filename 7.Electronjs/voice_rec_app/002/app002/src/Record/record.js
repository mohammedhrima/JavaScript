let childPython;

fs.readdir("Consigne_LPF", (err, files) => {
  if (err) return console.log(err);
  console.log(files);
  let div = document.getElementById("exist");
  files = files.reverse();
  let index = 0;
  let audio2 = null;
  files.forEach((file) => {
    //replace .mp3 with wav after
    if (index < 30 && file.endsWith(".mp3")) {
      console.log("index is", index, "for file", file);
      let btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = file.replace(".wav", "");
      div.appendChild(btn);

      btn.onclick = () => {
        if (audio2) audio2.pause();
        filename = "../../Consigne_LPF/" + file;
        audio2 = new Audio(filename);
        audio2.play();
      };
      index++;
    } else {
      return false;
    }
  });
});

let recordbtn = document.getElementById("record");
let stopbtn = document.getElementById("stp");
let listenbtn = document.getElementById("lst");
let savebtn = document.getElementById("save");
var audio;
audio = null;
recordbtn.addEventListener("click", () => {
  //wait(2);
  if (audio) {
    audio.pause();
  }
  recordbtn.disabled = true;
  stopbtn.disabled = false;
  listenbtn.disabled = true;
  savebtn.disabled = true;

  //Run_py("record.py", "");
  stopbtn.addEventListener("click", () => {
    console.log("kill");
    //childPython.stdin.pause();
    childPython.kill();
    childPython = "";
    recordbtn.disabled = true;
    stopbtn.disabled = true;
    //wait(2);
    listenbtn.disabled = false;
    savebtn.disabled = true;
    listenbtn.onclick = () => {
      fs.readdir(testFolder, (err, files) => {
        files.forEach((file) => {
          if (file.endsWith(".wav")) {
            audio = new Audio(file);
            audio.play();
          }
        });
      });
      recordbtn.disabled = false;
      stopbtn.disabled = true;
      savebtn.disabled = false;
      savebtn.onclick = () => {
        if (audio) {
          audio.pause();
        }
        Run_py("save.py", "");

        location.reload();
      };
    };
  });
});

recordbtn.addEventListener("click", () => {
  let B = document.getElementsByTagName("h1")[0];
  let sec = 0;
  let min = 0;
  let hou = 0;
  intervalID = setInterval(() => {
    let lhou = hou < 10 ? "0" + hou : hou;
    let lmin = min < 10 ? "0" + min : min;
    let lsec = sec < 10 ? "0" + sec : sec;
    B.textContent = lhou + ":" + lmin + ":" + lsec;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
    if (min == 60) {
      min = 0;
      hou++;
    }
    if (hou == 24) {
      hou = 0;
      min = 0;
      sec = 0;
    }
  }, 1000);
  stopbtn.addEventListener("click", () => {
    setTimeout(() => {
      clearInterval(intervalID);
    }, 10);
    B.textContent = "00:00:00";
  });
});

let rtr = document.getElementById("rtr");
rtr.onclick = () => {
  ipcRenderer.send("retour");
};

function Run_py(py_file, data) {
  childPython = spawn("python3", [py_file, data]);
  childPython.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  //function to print if there is error
  childPython.stderr.on("data", (data) => {
    console.error(`stdout: ${data}`);
  });
  //function to comfire that the code runnned and finished
  childPython.on("data", (code) => {
    console.log(`Child process exited with code: ${code}`);
  });
}
