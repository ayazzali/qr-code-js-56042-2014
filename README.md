# qr-code-js-56042-2014
qrcode на js по ГОСТ Р 56042-2014

# jquery.qrcode.js

## How to Use It

Let me walk you thru it. First include it in your webpage with the usual script tag
    copy this file https://github.com/kazuhikoarase/qrcode-generator/blob/fffd25643ba19ff6ecb60e3f1af8f282d0c2e135/js/qrcode.js

and type    
    <script type="text/javascript" src="qrcode.js"></script>

Then create a DOM element which gonna contains the generated qrcode image. Lets say a div
    <div id="qrcode"></div>

Then run main.js   

This is it. 
```
Если нужно больше полей, то просто добавьте их в метод "dostrforqr()". 
Там же я закомментил те поля которые нам не нужны, может именно они вам и нужны.
Руководствовался http://den.moscow/blog/стандарт-qr-кодирования-квитанции-сбер/

проверял тут http://www.sbqr.ru/validator/index.html 
и в приложении сбербанк- Работает!)
```

## Conclusion
I used 
- <a href='https://github.com/kazuhikoarase/qrcode-generator/tree/master/js'>qrcode.js</a>
Feel free to fork, modify and have fun with it :)
