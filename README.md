# Electron-FullScreen-HelloWorld
Instructions to replicate error (ubuntu 14.04 LTS):
  npm install -g electron-prebuild
  pm2 startup -u user
  pm2 start autorun.sh
  sudo pm2 save -u user
  sudo reboot

# Concern:
When booting linux 14.04 LTS the script is launched and opens up an instance of Hello-Full program maximized and not fullscreen (the panel is still visible). However if the pm2 process is deleted and launched again, the app goes back into full screen mode (the panel is no longer visible). I need my app to be on fullscreen on reboot.


