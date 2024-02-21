use std::process::Command;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

#[tauri::command]
fn killpy() {
    let echo_cmd = if cfg!(target_os = "windows") {
        Command::new("cmd")
            .args(["/C", "taskkill /IM python.exe /F"])
            .output()
            .expect("Failed to execute command win")
    } else {
        Command::new("sh")
            .args(["-c", "kill all python3"])
            .output()
            .expect("Failed to execute command")
    };
    // println!("\n");
    let cmd_output = String::from_utf8(echo_cmd.stdout).expect("could not parse byte response");
    println!("{}", cmd_output);
}

#[tauri::command]
async fn com1() {
    killpy();
    let echo_cmd = if cfg!(target_os = "windows") {
        Command::new("cmd")
            .args(["/C", "python3 record.py name"])
            .output()
            .expect("Failed to execute command win")
    } else {
        Command::new("sh")
            .args(["-c", "python3 record.py name"])
            .output()
            .expect("Failed to execute command")
    };
    // println!("\n");
    let cmd_output = String::from_utf8(echo_cmd.stdout).expect("could not parse byte response");
    println!("{}", cmd_output);
}

#[tauri::command]
async fn com2() {
    let echo_cmd = if cfg!(target_os = "windows") {
        Command::new("cmd")
            .args(["/C", "python3 save.py"])
            .output()
            .expect("Failed to execute command win")
    } else {
        Command::new("sh")
            .args(["-c", "python3 save.py"])
            .output()
            .expect("Failed to execute command")
    };
    // println!("\n");
    let cmd_output = String::from_utf8(echo_cmd.stdout).expect("could not parse byte response");
    println!("{}", cmd_output);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![com1, com2])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
