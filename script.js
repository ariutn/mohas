const htmlCodeInput = document.getElementById('htmlCode');
const cssCodeInput = document.getElementById('cssCode');
const jsCodeInput = document.getElementById('jsCode');
const runCodeButton = document.getElementById('runCode');
const livePreviewIframe = document.getElementById('livePreview');

function updatePreview() {
    const html = htmlCodeInput.value;
    const css = cssCodeInput.value;
    const js = jsCodeInput.value;

    // بناء محتوى الـ iframe
    const content = `
        <!DOCTYPE html>
        <html>
        <head>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `;

    // كتابة المحتوى في الـ iframe
    livePreviewIframe.contentWindow.document.open();
    livePreviewIframe.contentWindow.document.write(content);
    livePreviewIframe.contentWindow.document.close();
}

// تشغيل المعاينة عند النقر على الزر
runCodeButton.addEventListener('click', updatePreview);

// (اختياري) تحديث المعاينة تلقائياً عند كل ضغطة مفتاح
// يمكن أن يكون هذا ثقيلًا إذا كان الكود كبيرًا جدًا
htmlCodeInput.addEventListener('input', updatePreview);
cssCodeInput.addEventListener('input', updatePreview);
jsCodeInput.addEventListener('input', updatePreview);

// كود افتراضي لمساعدة المستخدم على البدء
htmlCodeInput.value = `<h1>مرحباً بالعالم!</h1>
<p>هذه هي معاينة أكواد HTML و CSS و JavaScript.</p>
<button id="myBtn">انقر هنا</button>`;

cssCodeInput.value = `body {
    font-family: 'Segoe UI', sans-serif;
    background-color: #f0f8ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}
h1 {
    color: #dc3545; /* أحمر */
}
p {
    color: #6c757d; /* رمادي */
    font-size: 1.1em;
}
button {
    padding: 10px 20px;
    background-color: #17a2b8; /* أزرق سماوي */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 15px;
    transition: background-color 0.3s ease;
}
button:hover {
    background-color: #138496;
}`;

jsCodeInput.value = `document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myBtn');
    if (button) {
        button.addEventListener('click', () => {
            alert('لقد نجح كود JavaScript الخاص بك!');
            console.log('الكود يعمل بشكل جيد.');
        });
    }
});`;

// تحديث المعاينة الأولية بالكود الافتراضي عند تحميل الصفحة
updatePreview();
const htmlCodeInput = document.getElementById('htmlCode');
const cssCodeInput = document.getElementById('cssCode');
const jsCodeInput = document.getElementById('jsCode');
const runCodeButton = document.getElementById('runCode');
const livePreviewIframe = document.getElementById('livePreview');

function updatePreview() {
    const html = htmlCodeInput.value;
    const css = cssCodeInput.value;
    const js = jsCodeInput.value;

    // *******************************************************************
    // ****** الجزء الجديد والمهم لتضمين الخط الخاص بـ Garena Free Fire *****
    // *******************************************************************
    const gffFontCss = `
        /*
        * ملاحظة هامة: هذا الخط هو خط خاص بـ Garena Free Fire (GFF Font).
        * للحصول عليه واستخدامه بشكل قانوني، يجب أن تمتلك ملفات الخط
        * (مثل .woff2, .woff, .ttf) وأن تستضيفها على خادمك أو في مجلد "fonts"
        * داخل مشروعك.
        *
        * يجب استبدال 'path/to/GFF-Regular.woff2' و 'path/to/GFF-Regular.woff'
        * بالمسارات الفعلية لملفات الخط الخاصة بك.
        *
        * إذا لم تكن لديك ملفات الخط، فلن يظهر هذا الخط في المعاينة.
        */
        @font-face {
            font-family: 'GFF Font';
            src: url('./fonts/GFF-Regular.woff2') format('woff2'),
                 url('./fonts/GFF-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        /* يمكنك إضافة تعريفات للأوزان الأخرى إذا كانت لديك ملفات لها */
        /*
        @font-face {
            font-family: 'GFF Font';
            src: url('./fonts/GFF-Bold.woff2') format('woff2'),
                 url('./fonts/GFF-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
        }
        */

        body {
            font-family: 'GFF Font', Arial, sans-serif !important; /* !important لضمان أولوية هذا الخط */
        }
    `;
    // *******************************************************************
    // *******************************************************************

    // بناء محتوى الـ iframe
    const content = `
        <!DOCTYPE html>
        <html>
        <head>
            ${gffFontCss} <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}<\/script>
        </body>
        </html>
    `;

    // كتابة المحتوى في الـ iframe
    livePreviewIframe.contentWindow.document.open();
    livePreviewIframe.contentWindow.document.write(content);
    livePreviewIframe.contentWindow.document.close();
}

// تشغيل المعاينة عند النقر على الزر
runCodeButton.addEventListener('click', updatePreview);

// تحديث المعاينة تلقائياً عند كل ضغطة مفتاح في أي من حقول الكود
htmlCodeInput.addEventListener('input', updatePreview);
cssCodeInput.addEventListener('input', updatePreview);
jsCodeInput.addEventListener('input', updatePreview);

// كود افتراضي لمساعدة المستخدم على البدء عند فتح الصفحة
htmlCodeInput.value = `<h1>مرحباً بكم في محرر الكود!</h1>
<p>هذه هي معاينة أكواد HTML و CSS و JavaScript.</p>
<p>هذا النص يفترض أنه بخط فري فاير!</p>
<button id="testButton">انقرني</button>
<div id="message"></div>`;

// يمكنك إزالة هذا الجزء إذا أردت أن تبدأ مربعات النص فارغة
cssCodeInput.value = `body {
    font-family: 'GFF Font', Arial, sans-serif; /* يجب أن يتطابق هذا مع الاسم في @font-face */
    background-color: #f0f8ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    box-sizing: border-box;
}
h1 {
    color: #e74c3c;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}
p {
    color: #34495e;
    font-size: 1.1em;
    line-height: 1.6;
}
span {
    color: #27ae60;
    font-weight: bold;
}
button {
    padding: 10px 25px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
button:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
}
#message {
    margin-top: 15px;
    font-size: 1.2em;
    color: #f39c12;
    font-weight: bold;
}`;

jsCodeInput.value = `document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('testButton');
    const messageDiv = document.getElementById('message');

    if (button && messageDiv) {
        button.addEventListener('click', () => {
            messageDiv.textContent = 'لقد تم النقر على الزر بنجاح بواسطة JavaScript!';
            messageDiv.style.color = '#2ecc71';
            console.log('زر الاختبار يعمل!');
        });
    }
});`;

// تحديث المعاينة الأولية بالكود الافتراضي عند تحميل الصفحة
updatePreview();
