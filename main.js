
var ff = doqrUTF8(
    'ООО «ВасяНет»',
    '40123123123123123642',
    'Отделение Банк Татарстан №8610 ПАО Сбербанк',
    '049205603',
    '30101231231231231233',
    '1651231231',
    '165123123',
    '123',
    'Петров И.И.',
    '1000099');

// test QR
function doqrUTF8(Name, PersonalAcc, BankName, BIC, CorrespAcc, PayeelNN, KPP, contract, LastName, Sum, FirstName, MiddleName, Purpose, РауегАddress, Phone, SomeNewReq) {
    var text = dostrforqr(Name, PersonalAcc, BankName, BIC, CorrespAcc, PayeelNN, KPP, contract, LastName, Sum);
    var typeNumber = 11; // размер qr-кода
    // дальше небольшой костыль 
    while (typeNumber<100) { // на всякий
        try {
            console.log(typeNumber);
            var errorCorrectionLevel = 'L';
            var qr = qrcode(typeNumber, errorCorrectionLevel);
            qrcode.stringToBytes = qrcode.stringToBytesFuncs['UTF-8'];
            qr.addData(text);
            qr.make();
            document.getElementById('qrcode').innerHTML = qr.createImgTag();

        } catch (e) {
            typeNumber++
            continue;
        }
        break;
    }

}


// test QR str
/**
 * @param {string} Name ООО «Вася»
 * @param {string} PersonalAcc 40701231232000030642
 * @param {string} BankName Отделение Банк Татарстан №8611 ПАО Сбербанк
 * @param {string} BIC 049205603
 * @param {string} CorrespAcc 30101810600001231233
 * @param {string} PayeelNN 1658123121
 * @param {string} KPP 165801001
 * @param {Number} contract НОМЕР ДОГОВОРА 123
 * @param {string} LastName ФИО плательщика
 * @param {Number} Sum Сумма платежа, в копейках
 * @param {any} FirstName
 * @param {any} MiddleName
 * @param {any} Purpose
 * @param {any} РауегАddress
 * @param {any} Phone
 * @param {any} SomeNewReq
 * @return {string} str
 */
function dostrforqr(Name, PersonalAcc, BankName, BIC, CorrespAcc, PayeelNN, KPP, contract, LastName, Sum, FirstName, MiddleName, Purpose, РауегАddress, Phone, SomeNewReq) {
    return 'ST00012' + // * ST00011 значчит windows 1251   //* ST00012 значчит utf8
        '|Name=' + Name +
        '|PersonalAcc=' + PersonalAcc +
        '|BankName=' + BankName +
        '|BIC=' + BIC +
        '|CorrespAcc=' + CorrespAcc +
        '|PayeelNN=' + PayeelNN +
        '|KPP=' + KPP +
        '|contract=' + contract +
        '|LastName=' + LastName +
        //'|FirstName=' + FirstName +
        //'|MiddleName=' + MiddleName +
        //'|Purpose=' + Purpose +
        //'|РауегАddress=' +РауегАddress+
        '|Sum=' + Sum +
        //'|Phone=' + Phone +
        //'|SomeNewReq=' + SomeNewReq
        '';
}
