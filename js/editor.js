/* Victus Global — editable 600px email signature */
const ASSETS = {
  "victus-logo": "assets/victus-logo.png",
  "phone": "assets/phone.png",
  "email": "assets/email.png",
  "website": "assets/website.png",
  "linkedin": "assets/linkedin.png",
  "facebook": "assets/facebook.png",
  "watch-story-button": "assets/watch-story-button.png"
};
const TEMPLATE = "<table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"600\" style=\"width:600px;max-width:100%;border-collapse:collapse;background-color:#ffffff;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;color:#18191c;mso-table-lspace:0pt;mso-table-rspace:0pt;\">\n  <tr>\n    <td style=\"padding:0;background-color:#ffffff;\">\n      <table role=\"presentation\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;\">\n        <tr>\n          <td width=\"47%\" valign=\"middle\" style=\"width:47%;padding:12.4px 16.31px 13.69px 18.91px;vertical-align:middle;\">\n            <a href=\"https://victusglobal.co.uk/\" target=\"_blank\" style=\"text-decoration:none;border:0;\"><img src=\"{{asset_victus-logo}}\" width=\"245\" height=\"50\" alt=\"Victus Global\" style=\"display:block;width:245px;height:50px;max-width:245px;min-width:245px;max-height:50px;border:0;outline:none;text-decoration:none;\"></a>\n          </td>\n          <td width=\"2\" valign=\"middle\" style=\"width:2.6px;padding:11.09px 0;vertical-align:middle;\">\n            <table role=\"presentation\" width=\"2\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:1.96px;border-collapse:collapse;\"><tr><td width=\"2\" height=\"65\" bgcolor=\"#00866e\" style=\"width:1.96px;height:65.22px;font-size:0;line-height:0;background-color:#00866e;\">&nbsp;</td></tr></table>\n          </td>\n          <td width=\"53%\" valign=\"middle\" style=\"width:53%;padding:13.04px 9.78px 13.04px 26.09px;vertical-align:middle;\">\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:26.74px;font-weight:700;line-height:1.13;letter-spacing:-1.31px;color:#15161a;\">{{name}}</div>\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:15px;font-weight:400;line-height:1.25;color:#17191c;padding-top:0.65px;\">{{title}}</div>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n  <tr>\n    <td bgcolor=\"#cce9e7\" style=\"padding:0;background-color:#cce9e7;background-image:linear-gradient(100deg,#cce9e7 0%,#c6e7e5 53%,#d4eeee 100%);\">\n      <table role=\"presentation\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;\">\n        <tr>\n          <td width=\"47%\" valign=\"top\" style=\"width:47%;padding:9.13px 7.82px 7.82px 56.09px;vertical-align:top;\">\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:18.91px;font-weight:700;line-height:1.08;letter-spacing:-0.46px;color:#007f7a;\">{{tagline1}}</div>\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:18.91px;font-weight:700;line-height:1.08;letter-spacing:-0.46px;color:#070c0e;\">{{tagline2}}</div>\n            <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"margin-top:6.52px;margin-left:18.91px;border-collapse:collapse;\">{{servicesHtml}}</table>\n          </td>\n          <td width=\"2\" valign=\"middle\" style=\"width:2.6px;padding:8.48px 0;vertical-align:middle;\">\n            <table role=\"presentation\" width=\"2\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:1.96px;border-collapse:collapse;\"><tr><td width=\"2\" height=\"112\" bgcolor=\"#00866e\" style=\"width:1.96px;height:112.18px;font-size:0;line-height:0;background-color:#00866e;\">&nbsp;</td></tr></table>\n          </td>\n          <td width=\"53%\" valign=\"top\" style=\"width:53%;padding:10.44px 9.13px 8.48px 26.09px;vertical-align:top;\">\n            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"25\" style=\"padding:0 8.48px 3.91px 0;vertical-align:middle;\"><a href=\"tel:\" style=\"text-decoration:none;\"><img src=\"{{asset_phone}}\" width=\"22\" height=\"22\" alt=\"Phone\" style=\"display:block;width:22px;height:22px;border:0;\"></a></td>\n                <td style=\"padding:0 0 3.91px 0;vertical-align:middle;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:12.4px;line-height:1.1;\"><a href=\"tel:\" style=\"color:#1b2124;text-decoration:none;\">{{phone}}</a></td>\n              </tr>\n              <tr>\n                <td style=\"padding:0 8.48px 3.91px 0;vertical-align:middle;\"><a href=\"mailto:{{email}}\" style=\"text-decoration:none;\"><img src=\"{{asset_email}}\" width=\"22\" height=\"22\" alt=\"Email\" style=\"display:block;width:22px;height:22px;border:0;\"></a></td>\n                <td style=\"padding:0 0 3.91px 0;vertical-align:middle;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:12.4px;line-height:1.1;\"><a href=\"mailto:{{email}}\" style=\"color:#1b2124;text-decoration:none;\">{{email}}</a></td>\n              </tr>\n              <tr>\n                <td style=\"padding:0 8.48px 3.91px 0;vertical-align:middle;\"><a href=\"{{website}}\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"{{asset_website}}\" width=\"22\" height=\"22\" alt=\"Website\" style=\"display:block;width:22px;height:22px;border:0;\"></a></td>\n                <td style=\"padding:0 0 3.91px 0;vertical-align:middle;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:12.4px;line-height:1.1;\"><a href=\"{{website}}\" target=\"_blank\" style=\"color:#1b2124;text-decoration:none;\">{{websiteDisplay}}</a></td>\n              </tr>\n            </table>\n            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;margin-top:5.87px;\">\n              <tr>\n                <td style=\"padding:0 8.48px 0 0;vertical-align:middle;\"><a href=\"{{linkedinUrl}}\" title=\"Victus Global on LinkedIn\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"{{asset_linkedin}}\" alt=\"LinkedIn\" width=\"23\" height=\"23\" style=\"display:block;width:23px;height:23px;border:0;\"></a></td>\n                <td style=\"padding:0 11.74px 0 0;vertical-align:middle;\"><a href=\"{{facebookUrl}}\" title=\"Victus Global on Facebook\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"{{asset_facebook}}\" alt=\"Facebook\" width=\"23\" height=\"23\" style=\"display:block;width:23px;height:23px;border:0;\"></a></td>\n                <td width=\"160\" height=\"34\" valign=\"middle\" align=\"center\" style=\"width:160px;height:34px;padding:0;vertical-align:middle;line-height:0;font-size:0;mso-line-height-rule:exactly;\">\n                  <a href=\"{{videoUrl}}\" target=\"_blank\" title=\"Watch Our Story\" style=\"display:block;border:0;text-decoration:none;line-height:0;font-size:0;\">\n                    <img src=\"{{asset_watch-story-button}}\" width=\"160\" height=\"34\" alt=\"Watch Our Story\" border=\"0\" style=\"display:block;border:0;outline:none;text-decoration:none;width:160px;height:34px;min-width:160px;max-width:160px;min-height:34px;max-height:34px;-ms-interpolation-mode:bicubic;\">\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding:4.56px 17.6px 4.56px 26.09px;background-color:#ffffff;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;color:#26272a;font-size:7.5px;line-height:1.32;\">\n      {{disclaimer}}\n    </td>\n  </tr>\n</table>";
const IMGFILES = ["victus-logo", "phone", "email", "website", "linkedin", "facebook", "watch-story-button"];
const keys=['name','title','phone','email','website','websiteDisplay','tagline1','tagline2','services','disclaimer','assetBase'];
function getPublicAssetBase(d) {
  const custom = String(d.assetBase || '').trim();
  if (custom) {
    try { const url = new URL(custom); if(url.protocol !== 'https:') return null;
      return url.href.replace(/\/+$/, '') + '/';
    } catch { return null; }
  }
  // A published Pages site has a real HTTPS URL. This works for both
  // https://org.github.io/ and https://org.github.io/repository/ and custom domains.
  if (location.protocol === 'https:' && !['github.com','raw.githubusercontent.com'].includes(location.hostname)) {
    return new URL('assets/', document.baseURI).href;
  }
  return null;
}
function htmlEscape(value){return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function current(){const d={};keys.forEach(k => d[k]=document.getElementById(k).value);return d;}
function images(d, forPreview=false) {
  const base = forPreview ? null : getPublicAssetBase(d);
  const out = {};
  for (const k of IMGFILES) out[k] = base ? base + k + '.png' : ASSETS[k];
  return out;
}
function build(d, forPreview=false){
 const ims=images(d, forPreview);
 const serviceLines=d.services.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).slice(0,8);
 const serviceHtml=serviceLines.map(s=>`<tr><td style="padding:0 0 2.72px 0;font-family:Century Gothic,Trebuchet MS,Arial,sans-serif;color:#1d2325;font-size:9.24px;line-height:12.5px;">${htmlEscape(s)}</td></tr>`).join('');
 let sig=TEMPLATE;
 const replacements={};
 for(const [k,v] of Object.entries(d))if(k!=='services' && k!=='assetBase')replacements[k]=htmlEscape(v);
 replacements.servicesHtml=serviceHtml;
 replacements.videoUrl=LINKS.video;
 replacements.facebookUrl=LINKS.facebook;
 replacements.linkedinUrl=LINKS.linkedin;
 for(const [k,v] of Object.entries(ims))replacements['asset_'+k]=htmlEscape(v);
 // The telephone link needs digits only. All display values are escaped.
 const tel=String(d.phone).replace(/[^+0-9]/g,'');
 sig=sig.replace(/href="tel:[^"]*"/g,`href="tel:${htmlEscape(tel)}"`);
 for(const [k,v] of Object.entries(replacements))sig=sig.split('{{'+k+'}}').join(v);
 return sig;
}
function preview(){ const d=current(); document.getElementById('preview').innerHTML=build(d, !getPublicAssetBase(d)); }
function status(msg){document.getElementById('status').textContent=msg;}
async function copySignature(){
 if (!getPublicAssetBase(current())) {
   status('To copy a usable email signature with working images, open this editor on your HTTPS GitHub Pages site or enter a public HTTPS image folder URL in Company settings.'); return;
 }
 const markup=build(current()); const previewNode=document.getElementById('preview');
 // Preview uses locally hosted image paths; exported markup always uses full HTTPS URLs.
 try{
  if(navigator.clipboard && window.ClipboardItem){
   const blob=new Blob([markup],{type:'text/html'});
   await navigator.clipboard.write([new ClipboardItem({'text/html':blob,'text/plain':new Blob([previewNode.innerText],{type:'text/plain'})})]);
   status('600px formatted signature copied. Paste into Outlook, then send a test email to check image loading.'); return;
  }
 }catch(e){ /* use selection fallback */ }
 const selection=window.getSelection();const range=document.createRange();
 const holder=document.createElement('div');holder.style.cssText='position:fixed;left:-9999px;top:0;';holder.innerHTML=markup;document.body.appendChild(holder);
 range.selectNodeContents(holder);selection.removeAllRanges();selection.addRange(range);
 let ok=false;try{ok=document.execCommand('copy');}catch(e){}selection.removeAllRanges();holder.remove();
 status(ok ? 'Formatted signature copied. Paste into your email signature settings.' : 'Copy was blocked by the browser. Download the HTML and open it in a browser, then select the signature and copy it.');
}
function downloadSignature(){
 const d=current();
 if (!getPublicAssetBase(d)) {
   status('A hosted HTTPS image URL is needed before downloading an email-ready signature. Open this editor on GitHub Pages or enter a public HTTPS image folder URL.'); return;
 }const doc='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Victus Global email signature - '+htmlEscape(d.name)+'</title></head><body style="margin:0;padding:16px;background:#fff;">'+build(d)+'</body></html>';
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([doc],{type:'text/html;charset=utf-8'}));a.download='Victus_Global_Signature_'+(d.name.trim().replace(/[^a-z0-9]+/gi,'_')||'Employee')+'.html';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),3000);status('Employee HTML downloaded.');
}
function reset(){for(const k of keys){const el=document.getElementById(k);el.value=DEFAULTS[k] ?? '';}preview();status('Sample information restored.');}
keys.forEach(k=>document.getElementById(k).addEventListener('input',()=>{preview();status('');}));
document.getElementById('copyBtn').addEventListener('click',copySignature);
document.getElementById('downloadBtn').addEventListener('click',downloadSignature);
document.getElementById('resetBtn').addEventListener('click',reset);
preview();
