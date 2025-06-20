---
title: "Spotify On Debian 12"
description: "How did I install Spotify with Spic"
pubDate: "May 18 2025"
updateDate: "May 18 2025"
tags: "Debian 12, Spotify, adblocker, Spicetify"
heroImage: "/blog-placeholder-3.jpg"
---

1. Go to spicetify.app
2. https://spicetify.app/docs/advanced-usage/installation
3. Install Spotify using their script

```bash
curl -sS https://download.spotify.com/debian/pubkey_C85668DF69375001.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client
```

// I think it make debian able to pull up updates and install from spotify public repo


4. https://www.spotify.com/us/download/linux/
// You will first need to configure our debian repository:
`curl -sS https://download.spotify.com/debian/pubkey_C85668DF69375001.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb https://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list`
5. Then you can install the Spotify client:
```bash
sudo apt-get update && sudo apt-get install spotify-client
```

6. https://spicetify.app/docs/getting-started
// didnt install, think i need the desktop app first
```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```
/*
error Could not detect Spotify location
error Could not detect "prefs" file location
success Default config-xpui.ini generated
error Cannot detect Spotify location. Please manually set "spotify_path" in config-xpui.ini
*/

7. install spotify-clinet via nala
```bash
sudo nala install spotify-client
```
8. check the app and verify it's installed

9. it's there it's running but nothing is showing just a black box
10. just relunching the app fixes the isuss

11. pair ur phone using qr code
12. time for spicetify
`curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh`
error: `sh: 55: spicetify: not found`

and again with the other command
`curl -fsSL https://raw.githubusercontent.com/spicetify/marketplace/main/resources/install.sh | sh`
error: `sh: 55: spicetify: not found`

13. try to uninstall then install again
`spicetify restore
rm -rf ~/.spicetify
rm -rf ~/.config/spicetify`
results in error `bash: spicetify: command not found`

14. i see it said it's installed but spicetify command isn't working so cd into it a run it manually
// it sure looks like it's working fine to me

15. run spotify and see if any change took place
// nope nothing

16. the problem is that the ./spicetify directory isn't always the same so u gotta download the script and change the path to ./spicetify then save chmod +x and then run it and it's ganna work, i hope

17. new fix is to run the executable via relative path
`./.spicetify/spicetify backup apply`
// like that to backup ur config

18. how to run commands
`./.spicetify/spicetify backup apply enable-devtools`

19. how to install and apply theme
https://github.com/spicetify/spicetify-themes
Clone this repository. Make sure git is installed and run:

`git clone --depth=1 https://github.com/spicetify/spicetify-themes.git`

`cd spicetify-themes
cp -r * ~/.config/spicetify/Themes`
20. use adblockify

Choose which theme to apply just by running:
`spicetify config current_theme THEME_NAME`

20. after all this nothing happend

21. trying to install adblockify

22. Installation of marketplace
https://github.com/spicetify/marketplace/wiki/Installation

`spicetify config inject_css 1
spicetify config replace_colors 1
spicetify config current_theme marketplace`

`spicetify config custom_apps marketplace
spicetify apply`

22. the FIX
`sudo chmod a+wr /usr/share/spotify
sudo chmod a+wr /usr/share/spotify/Apps -R`
