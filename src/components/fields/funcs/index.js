module.exports = ValidatorForm => {
    // Custom rule to validate NotEqualTo "isNotEqualTo"
    ValidatorForm.addValidationRule("isNotEqualTo", value => {});

    // Custom rule to validate Letteronly "isLetteronly"
    // ValidatorForm.addValidationRule("isLettersonly", value => {
    //     return /^[ a-zA-ZÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝàáâãäåçèéêëìíîïðñòóôõöøùúûüýÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİĴĵĶķĹĺĻļĽľĿŀŁłŃńŅņŇňŌōŎŏŐőŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƠơƯưǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǞǟǠǡǦǧǨǩǪǫǬǭǰǴǵǸǹǺǻǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȞȟȦȧȨȩȪȫȬȭȮȯȰȱȲȳʰʲʳʷʸˡˢˣḀḁḂḃḄḅḆḇḈḉḊḋḌḍḎḏḐḑḒḓḔḕḖḗḘḙḚḛḜḝḞḟḠḡḢḣḤḥḦḧḨḩḪḫḬḭḮḯḰḱḲḳḴḵḶḷḸḹḺḻḼḽḾḿṀṁṂṃṄṅṆṇṈṉṊṋṌṍṎṏṐṑṒṓṔṕṖṗṘṙṚṛṜṝṞṟṠṡṢṣṤṥṦṧṨṩṪṫṬṭṮṯṰṱṲṳṴṵṶṷṸṹṺṻṼṽṾṿẀẁẂẃẄẅẆẇẈẉẊẋẌẍẎẏẐẑẒẓẔẕẖẗẘẙẛẠạẢảẤấẦầẨẩẪẫẬậẮắẰằẲẳẴẵẶặẸẹẺẻẼẽẾếỀềỂểỄễỆệỈỉỊịỌọỎỏỐốỒồỔổỖỗỘộỚớỜờỞởỠỡỢợỤụỦủỨứỪừỬửỮữỰựỲỳỴỵỶỷỸỹ]+$/i.test(
    //         value
    //     );
    // });

    // Custom rule to validate BI "isBi" (Be better) 004884018LA047
    // ValidatorForm.addValidationRule("isBi", value => {
    //     const bi = typeof value === "string" ? value : value.toString();
    //     const prov = [
    //         "BO",
    //         "BA",
    //         "BE",
    //         "CA",
    //         "CO",
    //         "CN",
    //         "CS",
    //         "CE",
    //         "HO",
    //         "HA",
    //         "LA",
    //         "LN",
    //         "LS",
    //         "ME",
    //         "MO",
    //         "NE",
    //         "UE",
    //         "ZE",
    //         "KA",
    //         "KO",
    //         "KN",
    //         "KS",
    //         "KE"
    //     ];

    //     if (prov.includes(bi.substr(8, 2))) {
    //         return /[0-9]{9}[A-Za-z]{2}[0-9]{3}/i.test(value);
    //     } else {
    //         return false;
    //     }
    // });

    // // Custom rule to validate nowwhitespace "isNowhitespace" (Done)
    // ValidatorForm.addValidationRule("isNowhitespace", value => {
    //     return /^\S+$/i.test(value);
    // });

    // // Custom rule to validate Alphanumeric "isAlphanumeric" (Done)
    // ValidatorForm.addValidationRule("isAlphanumeric", value => {
    //     return /^\w+$/i.test(value);
    // });

    // // Custom rule to validate iban "isIban" AO06000600008470428630176
    // ValidatorForm.addValidationRule("isIban", value => {
    //     // Remove spaces and to upper case
    //     var iban = value.replace(/ /g, "").toUpperCase(),
    //         ibancheckdigits = "",
    //         leadingZeroes = true,
    //         cRest = "",
    //         cOperator = "",
    //         countrycode,
    //         ibancheck,
    //         charAt,
    //         cChar,
    //         bbanpattern,
    //         bbancountrypatterns,
    //         ibanregexp,
    //         i,
    //         p;

    //     // Check for IBAN code length.
    //     // It contains:
    //     // country code ISO 3166-1 - two letters,
    //     // two check digits,
    //     // Basic Bank Account Number (BBAN) - up to 30 chars
    //     var minimalIBANlength = 5;
    //     if (iban.length < minimalIBANlength) {
    //         return false;
    //     }

    //     // Check the country code and find the country specific format
    //     countrycode = iban.substring(0, 2);
    //     bbancountrypatterns = {
    //         AL: "\\d{8}[\\dA-Z]{16}",
    //         AD: "\\d{8}[\\dA-Z]{12}",
    //         AT: "\\d{16}",
    //         AZ: "[\\dA-Z]{4}\\d{20}",
    //         BE: "\\d{12}",
    //         BH: "[A-Z]{4}[\\dA-Z]{14}",
    //         BA: "\\d{16}",
    //         BR: "\\d{23}[A-Z][\\dA-Z]",
    //         BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}",
    //         CR: "\\d{17}",
    //         HR: "\\d{17}",
    //         CY: "\\d{8}[\\dA-Z]{16}",
    //         CZ: "\\d{20}",
    //         DK: "\\d{14}",
    //         DO: "[A-Z]{4}\\d{20}",
    //         EE: "\\d{16}",
    //         FO: "\\d{14}",
    //         FI: "\\d{14}",
    //         FR: "\\d{10}[\\dA-Z]{11}\\d{2}",
    //         GE: "[\\dA-Z]{2}\\d{16}",
    //         DE: "\\d{18}",
    //         GI: "[A-Z]{4}[\\dA-Z]{15}",
    //         GR: "\\d{7}[\\dA-Z]{16}",
    //         GL: "\\d{14}",
    //         GT: "[\\dA-Z]{4}[\\dA-Z]{20}",
    //         HU: "\\d{24}",
    //         IS: "\\d{22}",
    //         IE: "[\\dA-Z]{4}\\d{14}",
    //         IL: "\\d{19}",
    //         IT: "[A-Z]\\d{10}[\\dA-Z]{12}",
    //         KZ: "\\d{3}[\\dA-Z]{13}",
    //         KW: "[A-Z]{4}[\\dA-Z]{22}",
    //         LV: "[A-Z]{4}[\\dA-Z]{13}",
    //         LB: "\\d{4}[\\dA-Z]{20}",
    //         LI: "\\d{5}[\\dA-Z]{12}",
    //         LT: "\\d{16}",
    //         LU: "\\d{3}[\\dA-Z]{13}",
    //         MK: "\\d{3}[\\dA-Z]{10}\\d{2}",
    //         MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}",
    //         MR: "\\d{23}",
    //         MU: "[A-Z]{4}\\d{19}[A-Z]{3}",
    //         MC: "\\d{10}[\\dA-Z]{11}\\d{2}",
    //         MD: "[\\dA-Z]{2}\\d{18}",
    //         ME: "\\d{18}",
    //         NL: "[A-Z]{4}\\d{10}",
    //         NO: "\\d{11}",
    //         PK: "[\\dA-Z]{4}\\d{16}",
    //         PS: "[\\dA-Z]{4}\\d{21}",
    //         PL: "\\d{24}",
    //         PT: "\\d{21}",
    //         RO: "[A-Z]{4}[\\dA-Z]{16}",
    //         SM: "[A-Z]\\d{10}[\\dA-Z]{12}",
    //         SA: "\\d{2}[\\dA-Z]{18}",
    //         RS: "\\d{18}",
    //         SK: "\\d{20}",
    //         SI: "\\d{15}",
    //         ES: "\\d{20}",
    //         SE: "\\d{20}",
    //         CH: "\\d{5}[\\dA-Z]{12}",
    //         TN: "\\d{20}",
    //         TR: "\\d{5}[\\dA-Z]{17}",
    //         AE: "\\d{3}\\d{16}",
    //         GB: "[A-Z]{4}\\d{14}",
    //         VG: "[\\dA-Z]{4}\\d{16}"
    //     };

    //     bbanpattern = bbancountrypatterns[countrycode];

    //     // As new countries will start using IBAN in the
    //     // future, we only check if the countrycode is known.
    //     // This prevents false negatives, while almost all
    //     // false positives introduced by this, will be caught
    //     // by the checksum validation below anyway.
    //     // Strict checking should return FALSE for unknown
    //     // countries.
    //     if (typeof bbanpattern !== "undefined") {
    //         ibanregexp = new RegExp("^[A-Z]{2}\\d{2}" + bbanpattern + "$", "");
    //         if (!ibanregexp.test(iban)) {
    //             return false; // Invalid country specific format
    //         }
    //     }

    //     // Now check the checksum, first convert to digits
    //     ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4);
    //     for (i = 0; i < ibancheck.length; i++) {
    //         charAt = ibancheck.charAt(i);
    //         if (charAt !== "0") {
    //             leadingZeroes = false;
    //         }
    //         if (!leadingZeroes) {
    //             ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(
    //                 charAt
    //             );
    //         }
    //     }

    //     // Calculate the result of: ibancheckdigits % 97
    //     for (p = 0; p < ibancheckdigits.length; p++) {
    //         cChar = ibancheckdigits.charAt(p);
    //         cOperator = "" + cRest + "" + cChar;
    //         cRest = cOperator % 97;
    //     }
    //     return cRest === 1;
    // });

    // // Custom rule to validate Creditcard "isCreditcard" 5048080028655590
    // ValidatorForm.addValidationRule("isCreditcard", value => {
    //     // Accept only spaces, digits and dashes
    //     // if (/[^0-9\-]+/.test(value)) {
    //     //     return false;
    //     // }

    //     var nCheck = 0,
    //         nDigit = 0,
    //         bEven = false,
    //         n,
    //         cDigit;

    //     value = value.replace(/\D/g, "");

    //     // Basing min and max length on
    //     // https://developer.ean.com/general_info/Valid_Credit_Card_Types
    //     if (value.length < 13 || value.length > 19) {
    //         return false;
    //     }

    //     for (n = value.length - 1; n >= 0; n--) {
    //         cDigit = value.charAt(n);
    //         nDigit = parseInt(cDigit, 10);
    //         if (bEven) {
    //             if ((nDigit *= 2) > 9) {
    //                 nDigit -= 9;
    //             }
    //         }

    //         nCheck += nDigit;
    //         bEven = !bEven;
    //     }

    //     return nCheck % 10 === 0;
    // });

    // // Custom rule to validate Bank Account Number "isbankaccountNL" 12 34 56 789
    // ValidatorForm.addValidationRule("isbankaccountNL", value => {
    //     // if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(value)) {
    //     //     return false;
    //     // }
    //     // // Now '11 check'
    //     // let account = value.replace(/ /g, ""), // Remove spaces
    //     //     sum = 0,
    //     //     len = account.length,
    //     //     pos,
    //     //     factor,
    //     //     digit;
    //     // for (pos = 0; pos < len; pos++) {
    //     //     factor = len - pos;
    //     //     digit = account.substring(pos, pos + 1);
    //     //     sum = sum + factor * digit;
    //     // }
    //     // return sum % 11 === 0;
    // });

    // // Custom rule to validate IPV4 "isIpv4" 192.168.12.1
    // ValidatorForm.addValidationRule("isIpv4", value => {
    //     const format = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i;
    //     return format.test(value);
    // });

    // // Custom rule to validate Url https://www.example.com
    // ValidatorForm.addValidationRule("isUrl", value => {
    //     const format = /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
    //     return format.test(value);
    // });

    // // Custom rule to validate Data
    // ValidatorForm.addValidationRule("isDataLess", value => {
    //     var comparison = new Date(value) <= new Date();
    //     return comparison;
    // });

    // ValidatorForm.addValidationRule("isDataMax", value => {
    //     const tomador = new Date(value);
    //     const today = new Date();
    //     const dayDiff =
    //         Math.ceil(today - tomador) / (365.25 * 24 * 60 * 60 * 1000);
    //     const age = parseInt(dayDiff);

    //     if (age >= 18) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // });

    // // Custom rule to validate NIF
    // ValidatorForm.addValidationRule("isNif", value => {
    //     const nif = typeof value === "string" ? value : value.toString();
    //     const validationSets = {
    //         one: ["1", "2", "3", "5", "6", "8"],
    //         two: [
    //             "45",
    //             "70",
    //             "71",
    //             "72",
    //             "74",
    //             "75",
    //             "77",
    //             "79",
    //             "90",
    //             "91",
    //             "98",
    //             "99"
    //         ]
    //     };

    //     if (nif.length !== 9) {
    //         return false;
    //     }

    //     if (
    //         !validationSets.one.includes(nif.substr(0, 1)) &&
    //         !validationSets.two.includes(nif.substr(0, 2))
    //     ) {
    //         return false;
    //     }

    //     const total =
    //         nif[0] * 9 +
    //         nif[1] * 8 +
    //         nif[2] * 7 +
    //         nif[3] * 6 +
    //         nif[4] * 5 +
    //         nif[5] * 4 +
    //         nif[6] * 3 +
    //         nif[7] * 2;
    //     const modulo11 = Number(total) % 11;

    //     const checkDigit = modulo11 < 2 ? 0 : 11 - modulo11;

    //     return checkDigit === Number(nif[8]);
    // });
};
