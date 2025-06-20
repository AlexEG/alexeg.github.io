---
title: "Spotify On Debian 12"
description: "How did I install Spotify with Spic"
pubDate: "May 18 2025"
updateDate: "May 20 2025"
tags: "Debian 12, Spotify, adblocker, Spicetify"
heroImage: "/blog-placeholder-3.jpg"
---

### 🎧 Customizing Spotify on Linux with Spicetify

I recently dove into customizing Spotify on my Linux desktop using the open‑source tool **Spicetify**. While there are many guides out there, most gloss over the nitty‑gritty errors I hit. Here’s my process—warts and all—to help you avoid the pain I went through.

### 1. Install Spotify properly

First, you need Spotify installed outside Snap or Flatpak (those often break Spicetify compatibility). On Debian/Ubuntu, I ran:

```bash
curl -sS https://download.spotify.com/debian/pubkey_… | sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client
```

This ensures official updates and proper file permissions ([spicetify.app][1], [linuxfordevices.com][2]).

### 2. Install Spicetify

Once Spotify was working, I installed Spicetify:

```bash
curl -fsSL https://raw.githubusercontent.com/spicetify/cli/main/install.sh | sh
```

I got errors like:

- “Could not detect Spotify location”
- “Cannot detect prefs file”
- `spicetify: not found`

Turns out Spotify wasn’t in the expected path, so I had to fix the config and set executable permissions ([reddit.com][3], [spicetify.app][4]).

### 3. Fixing the path and permissions

Key fixes:

- Set the correct path in `~/.config/spicetify/config-xpui.ini` under `spotify_path` and `prefs_path`.
- Add Spicetify to your `$PATH`, e.g.:

  ```bash
  export PATH="$HOME/.spicetify:$PATH"
  ```

  This fixed the “command not found” issue ([linuxfordevices.com][2]).

- Grant write permissions to Spotify’s app folders:

  ```bash
  sudo chmod a+wr /usr/share/spotify -R
  ```

### 4. Running Spicetify commands

With everything in place, I ran:

```bash
./.spicetify/spicetify backup apply
```

…using the correct path to avoid errors. Then did:

```bash
spicetify backup apply enable-devtools
spicetify apply
```

Spotify relaunched with a fresh, clean interface.

### 5. Themes, apps & adblockify plugin

To customize further:

1. **Clone themes repo**:

   ```bash
   git clone --depth=1 https://github.com/spicetify/spicetify-themes.git
   cp -r spicetify-themes/* ~/.config/spicetify/Themes
   ```

2. **Choose a theme**:

   ```bash
   spicetify config current_theme Dribbblish
   ```

3. **Enable marketplace features**:

   ```
   spicetify config inject_css 1
   spicetify config replace_colors 1
   spicetify config current_theme marketplace
   spicetify config custom_apps marketplace
   spicetify apply
   ```

4. **Ad‑blocking & extensions**: It didn’t work until I granted permission to Spotify’s folders:

   ```bash
   sudo chmod a+wr /usr/share/spotify/Apps -R
   ```

### 6. Screenshots!

I documented every step with screenshots—particularly the errors, how I fixed them, and UI results. If you’ve ever faced a blank Spotify window, missing commands, or silent theme failures, this guide is for you.

![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_210521.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_211055.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_211113.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_211131.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_211441.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_211545.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_211732.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_212001.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_212023.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_212402.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_212530.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_213421.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_213605.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_213630.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_213753.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_214736.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_215114.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_215158.png)  
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_220011.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_220703.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_220820.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_221146.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_221317.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_221418.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_223414.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_223747.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_223935.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_225432.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_225548.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_232124.png)
![alt text](../assets/blog/images/linux/spotify-on-debian-12/Screenshot_20250617_234359.png)

---

### TL;DR

| Step | Action                                                            |
| ---- | ----------------------------------------------------------------- |
| 1️⃣   | Install Spotify via official APT repo                             |
| 2️⃣   | Install Spicetify CLI via script                                  |
| 3️⃣   | Fix `spotify_path`, `prefs_path`, add to `$PATH`, fix permissions |
| 4️⃣   | Run `spicetify backup apply enable-devtools`                      |
| 5️⃣   | Clone + apply theme, enable marketplace & adblock                 |
| 6️⃣   | Relaunch Spotify and enjoy your customized UI!                    |

---

This was my first blog post, and I wanted it to be honest—sharing all the stuff that existing tutorials skip.

[1]: https://spicetify.app/docs/getting-started/?utm_source=chatgpt.com "Getting Started | Spicetify"
[2]: https://www.linuxfordevices.com/tutorials/customize-spotify-spicetify?utm_source=chatgpt.com "Customize your Spotify client with Spicetify! - LinuxForDevices"
[3]: https://www.reddit.com/r/linux4noobs/comments/jevsmc?utm_source=chatgpt.com "Spicetify command not found"
[4]: https://spicetify.app/docs/advanced-usage/installation/?utm_source=chatgpt.com "Installation | Spicetify"
