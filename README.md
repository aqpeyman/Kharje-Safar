# خرج‌سفر – PWA

برنامه‌ی تقسیم هزینه و تسویه حساب سفر؛ فارسی/انگلیسی، حالت شب و روز، قابل نصب روی گوشی.

## فایل‌ها (همه کنار هم، بدون پوشه)
`index.html` · `manifest.webmanifest` · `sw.js` · `icon-192.png` · `icon-512.png` · `icon-maskable-512.png` · `apple-touch-icon.png`

هر ۷ فایل باید در ریشه‌ی مخزن باشند. اگر یکی نباشد نصب نمی‌شود یا آیکن نمی‌گیرد.

## انتشار روی GitHub Pages
1. مخزن جدید بسازید → Add file → Upload files → هر ۷ فایل را آپلود و Commit کنید.
2. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` و `/ (root)` → Save.
3. بعد از یکی دو دقیقه آدرس `https://USERNAME.github.io/REPO/` فعال می‌شود. برنامه را **از همین آدرس** باز کنید، نه از صفحه‌ی فایل در github.com.

## نصب
- اندروید (Chrome): دکمه‌ی «نصب اپ» بالای صفحه، یا منوی ⋮ ← Install app.
- آیفون (Safari): Share ← Add to Home Screen.
- اگر نصب نشد، دکمه‌ی «نصب اپ» را بزنید؛ پنجره‌ی «بررسی نصب» نشان می‌دهد کدام فایل یا مورد ❌ است.

بعد از هر تغییر در فایل‌ها عدد نسخه‌ی `V` را در `sw.js` عوض کنید.
