# Victus·Global — 600px Outlook-compatible signature editor

This is the **complete replacement package** for GitHub branch **`new`**. The editor generates individual staff email signatures, exactly **600px wide**. It retains the logo, white header, pale teal services/contact panel, social icons and confidentiality disclaimer.

## What changed

- 500px signature was scaled proportionally to **600px**; footer and typography also scale.
- **Watch Our Story is now ONE pre-rendered 160 × 34px PNG** (`assets/watch-story-button.png`) containing both the white play circle and the text. Outlook no longer has separate play icon and text elements to scale or distort. We deliberately made its PNG's **native pixel dimensions equal to its HTML width and height**, instead of relying on retina-sized scaling, and set **both attributes and inline CSS dimensions**.
- No CSS gradient, emoji, SVG or border-radius is required to render the video button. Its entire artwork is embedded in the PNG file.
- The video graphic links to https://victusglobal.co.uk/videos/.
- Full HTTPS image URLs are created automatically by the editor when published via GitHub Pages. Local file paths must not be used inside an email signature.
- The separate `assets/play.png` from the 500px version is **obsolete** and is not used. Delete it from the branch if it remains after uploading this package.

## File structure

```
index.html                  Employee editor and live preview
signature-example.html      Standalone browser preview (uses relative URLs; not for pasting into Outlook)
.nojekyll                   GitHub Pages configuration
README.md
assets/
  victus-logo.png
  phone.png
  email.png
  website.png
  linkedin.png
  facebook.png
  watch-story-button.png  The whole, native-size fixed 160×34 video CTA
css/editor.css             Editor website styling only
js/config.js               Employee defaults and social/video URLs
js/editor.js               600px inline-table signature and clipboard/export logic
```

## Install on the existing `new` branch

1. Download and extract the ZIP. Upload **all contents into the root of branch `new`**, with paths intact (`assets/`, `css/`, `js/`). Overwrite the old `index.html`, `signature-example.html`, `css/editor.css`, `js/editor.js` and images.
2. If you publish GitHub Pages from this branch already, the live site will update after deployment. Otherwise go to **Settings → Pages → Deploy from branch → `new` → `/(root)` → Save**.
3. A project Pages URL typically looks like `https://USERNAME.github.io/REPOSITORY/`. The editor calculates the public image directory as `https://USERNAME.github.io/REPOSITORY/assets/` even when the project is hosted below a subpath. With a custom domain, detection also works.
4. Open the *live HTTPS* URL for `index.html`, enter employee name/title/phone/email, and click **Copy formatted signature**. Paste into Outlook signature settings; or choose **Download this employee’s HTML**.
5. **Send a new test email** (not just a view inside the signature editor) to Outlook desktop, Outlook web, and if possible a mobile recipient. Some Outlook installations cache copied images or block external images by recipient settings.

**Note:** Github Pages normally serves one publishing source at a time per repository. Selecting `new` can change the version of the site that was previously published.

### Git commands

For an existing `new` branch:

```bash
git fetch origin
git switch new
# Copy all the unzipped package contents to the repository root (overwrite old files).
git add -A
git commit -m "Update Victus email signatures to 600px; Outlook-safe story button"
git push origin new
```

If the branch does not exist yet, create it with `git switch -c new` and then `git push -u origin new`.

## Why the button previously distorted in Outlook

The older HTML button was assembled from a play icon image + inline text + styled green background. Pasting into Microsoft Word–based Outlook can change `<span>` line heights and image dimensions. In this release, its graphic and text cannot separate or stretch independently. The image has **pixel dimensions 160 × 34 and HTML width="160" height="34"**, both also stated in its inline CSS. If Outlook still enlarges the **entire image**, check Outlook's paste options and any signature add-ins; the package does not control how Outlook itself transforms pasted rich HTML.

**Image hosting:** Host the `assets/` directory via public HTTPS. Opening `index.html` locally still allows editing and preview, but copy/export correctly demands an HTTPS assets URL. Under **Company text and image settings**, supply the assets base URL when editing offline. If the editor itself is on GitHub Pages, leave it blank.

**Disclaimer:** Preserved exactly as requested: “This email and any attachments are confidential and may be legally Previleged. If you are not the intended recipient, please notify the sender immediately and delete this email from your system.” *(Standard spelling: privileged.)*

**Links:**
- Watch Our Story: https://victusglobal.co.uk/videos/
- Facebook: https://www.facebook.com/people/Victus-Global-Limited/61592616851613/#
- LinkedIn: https://uk.linkedin.com/company/victus-global
