/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(sachoj {0})",
    "NOT_FOUND_ERR": "Man xilitäj ta ri yakb'äl/directory.",
    "NOT_READABLE_ERR": "Man nitikïr ta nisik'ïx ri yakb'äl/directory.",
    "EXCEEDS_MAX_FILE_SIZE": "Ri {APP_NAME} man nitikïr ta yerujäq taq yakb'äl nïm chuwäch ri {0} MB.",
    "FILE_EXISTS_ERR": "Ri yakb'äl o ri cholb'äl k'o chik.",
    "FILE": "yakb'äl",
    "FILE_TITLE": "Yakb'äl",
    "DIRECTORY": "cholb'äl",
    "DIRECTORY_TITLE": "Cholb'äl",
    "DIRECTORY_NAMES_LEDE": "Kicholb'al b'i'aj",
    "FILENAMES_LEDE": "Kib'i' yakb'äl",
    "FILENAME": "Rub'i' yakb'äl",
    "DIRECTORY_NAME": "Rucholb'al B'i'aj",
    "ERROR_OUT_OF_SPACE_TITLE": "Xq'i' Ronojel Rupam ri Nimasamaj",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Xik'o ronojel ri taq ruyakb'al rupam ri animasamaj. Man xkatikïr ta chik xtatz'aqatisaj qa k'ak'a' taq yakb'äl, k'a xke'ayüj na el jujun chuqa' toq xtajäm rupam.",
    "FILE_EXISTS_HEADER": "K'o chik ri yakb'äl.",
    "OPEN_DIALOG_ERROR": "Xk'ulwachitäj jun sachoj toq tajin nik'ut pe rujaqik ri yakb'äl dialog. (sachoj {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Xk'ulwachitäj jun sachoj toq nusik'ij rupam ri cholb'äl <span class='dialog-filename'>{0}</span>. (sachoj {1})",
    "ERROR_OPENING_FILE_TITLE": "Xsach toq Nijaq ri Yakb'äl",
    "ERROR_OPENING_FILE": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx nijaq ri yakb'äl <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "Xk'ulwachitäj jun sachoj toq tajin yeqaj re taq yakb'äl re':",
    "ERROR_SAVING_FILE_TITLE": "Xsach toq Nijaq ri Yakb'äl",
    "ERROR_SAVING_FILE": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx niyak ri yakb'äl <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Xsach toq Nitz'ib'äx chik Rub'i' ri Yakb'äl",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Xsach toq Nitz'ib'äx chik Rub'i' ri Cholb'äl",
    "ERROR_RENAMING_FILE": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx nitz'ib'äx chik rub'i' ri yakb'äl <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx nitz'ib'äx chik rub'i' ri cholb'äl <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Xsach toq Niyuj el ri Yakb'äl",
    "ERROR_DELETING_DIRECTORY_TITLE": "Xsach toq Niyuj el ri Cholb'äl",
    "ERROR_DELETING_FILE": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx niyuj el ri yakb'äl <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx niyuj el ri cholb'äl <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Me'okel Rub'i' Yakb'äl",
    "INVALID_DIRNAME_TITLE": "Me'okel Rub'i' Cholb'äl",
    "INVALID_FILENAME_MESSAGE": "Ri kib'i' yakb'äl, man ütz ta ye'okisäx taq rutz'ib' ri q'inoj, taq k'ischuq' (.) ni xa ta re taq tz'ib' re'; <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Ri kib'i' cholb'äl, man ütz ta ye'kokisäx taq rutz'ib' q'inoj, taq k'ischuq' (.) ni xa ta re taq tz'ib' re'; <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Jun yakb'äl o cholb'äl rik'in ri b'i'aj <span class='dialog-filename'>{0}</span> k'o chik.",
    "ERROR_CREATING_FILE_TITLE": "Xsach toq Nitz'uk ri Yakb'äl",
    "ERROR_CREATING_DIRECTORY_TITLE": "Xsach toq Tajin Ninuk' ri Cholb'äl",
    "ERROR_CREATING_FILE": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx ninuk' ri yakb'äl <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx nitz'uk ri cholb'äl <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "Xsach toq Yecholajïx ri taq Yakb'äl",
    "EXT_MODIFIED_TITLE": "Rij taq Jaloj",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> xjal ri pa nimayakb'äl chi rij ri {APP_NAME}.<br /><br />¿La nawajo' nayäk ri yakb'äl chuqa' natz'ib'aj pa ruwi' re taq jaloj re'?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> xjal pa nimayakb'äl chi rij ri {APP_NAME}, po k'o jaloj ri man eyakon ta pa {APP_NAME}.<br /><br />¿Achike ruwäch nawajo' chi nik'oje'?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> xyuj pa nimayakb'äl chi rij ri {APP_NAME}, po k'o jaloj ri man eyakon ta pa {APP_NAME}.<br /><br />¿La nawajo' ye'ayäk ri taq jaloj?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Tijikib'äx Ruyujik",
    "CONFIRM_FOLDER_DELETE": "¿La kan nawajo' nayüj el ri yakwuj <span class='dialog-filename'>{0}</span>?",
    "CONFIRM_FILE_DELETE": "¿La kan nawajo' nayüj el <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "Yujun Yakb'äl",
    "DONE": "Xk'is",
    "OK": "ÜTZ",
    "CANCEL": "Tiq'at",
    "SAVE_AND_OVERWRITE": "Titz'ib'äx pa ruwi'",
    "DELETE": "Tiyuj",
    "BUTTON_YES": "Ja'",
    "BUTTON_NO": "Mani",
    "USE_IMPORTED": "Tokisäx ri K'ak'a' Yakb'äl",
    "KEEP_EXISTING": "Tik'oje' na ri Yakb'äl K'o",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Man k'o ta ri Anin Nuk'unel pa ruk'ojlem retal ch'oy wakami",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS Anin Nuk'unel: tiya' ri retal ch'oy pa xa xe jun rub'i' ruwäch",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS Anin Nuk'unel: rub'anikil metz'aqät ruwäch",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS Anin Nuk'unel: rub'anikil metz'aqät id",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS Anin Nuk'unel: tiya' ri retal ch'oy pa retal, ruwwäch o id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Rusamaj Q'ijul Anin Nuk'unel: me'okel cholb'ab'",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Anin Nuk'unel: Taya' ri retal ch'oy pa rub'i' ri samaj",
    "BUTTON_NEW_RULE": "K'ak'a' Rub'eyal",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Man k'o ta Anin taq Wuj pa ruk'ojlem retal ch'oy wakami",
    "CMD_FILE_NEW": "K'ak'a' Yakb'äl",
    "CMD_FILE_NEW_FOLDER": "K'ak'a' Yakwuj",
    "CMD_FILE_RENAME": "Tisik'ïx chik",
    "CMD_FILE_DELETE": "Tiyuj",
    "CMD_FILE_DOWNLOAD": "Tiqasäx",
    "CMD_CUT": "Tiqupïx",
    "CMD_COPY": "Tiwachib'ëx",
    "CMD_PASTE": "Titz'ajb'äx",
    "CMD_SELECT_ALL": "Ticha' Ronojel",
    "CMD_TOGGLE_QUICK_EDIT": "Aninäq Runuk'ik",
    "CMD_TOGGLE_QUICK_DOCS": "Anin taq Wuj",
    "DND_MAX_SIZE_EXCEEDED": "ri yakb'äl nik'o rupalem nuköch': {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "man nikoch'otäj ta ri ruwäch chi yakb'äl",
    "DND_ERROR_UNZIP": "man xkiräx ta ri yakb'äl",
    "DND_ERROR_UNTAR": "man xkiräx ta ri yakb'äl",
    "DND_SUCCESS_UNZIP_TITLE": "Ütz Xkiräx",
    "DND_SUCCESS_UNTAR_TITLE": "Ütz Xkiräx",
    "DND_FILE_REPLACE": "Jun yakb'äl rub'ina'am <span class='dialog-filename'>{0}</span> k'o chik. ¿La nawajo' nawokisaj ri k'ak'a' yakb'äl o tik'oje' na ri k'o chik?",
    "IMAGE_FILE_TITLE": "Ruyakb'al Wachib'äl",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} taq piksel",
    "IMAGE_ALT_TEXT": "Rutzijoxkil wachib'äl",
    "IMAGE_FILTERS_TITLE": "Ruchayub'al Wachib'äl",
    "IMAGE_FILTER_PINHOLE": "Rujolom b'aq",
    "IMAGE_FILTER_SEPIA": "Sepya",
    "IMAGE_FILTER_CONTRAST": "Chumal",
    "IMAGE_FILTER_VINTAGE": "Kuchuj",
    "IMAGE_FILTER_SUNRISE": "Saqarib'äl q'ij",
    "IMAGE_FILTER_EMBOSS": "Nimirisanem",
    "IMAGE_FILTER_GLOWING_SUN": "K'a'on Q'ij",
    "IMAGE_SAVE_WITH_FILTERS": "Tisamajïx",
    "IMAGE_RESET_FILTERS": "Tiq'at",
    "FONT_FILE": "Ruwäch Tz'ib' Yakb'äl",
    "USE_FONT_INSTRUCTIONS": "Richin nokisäx re ruwäch tz'ib' re', tawachib'ej chuqa' tatz'ajb'a' re b'itz'ib' re' pa CSS ayakb'al.",
    "FONT_TYPE_BOLD": "Q'eqatz'ib'",
    "FONT_TYPE_ITALIC": "Q'e'etz'ib'",
    "FONT_BOLD_HTML_TAG": "Tiya' ri rucholajem tzij pa jun <code>&lt;nïm&gt;&lt;/strong&gt;</code> retal.",
    "FONT_BOLD_CSS_RULE": "Titz'aqatisäx jun <code>font-weight: bold;</code> CSS rub'eyal.",
    "FONT_ITALIC_HTML_TAG": "Tiya' rucholajem tzij pa jun <code>&lt;em&gt;&lt;/em&gt;</code> retal.",
    "FONT_ITALIC_CSS_RULE": "Titz'atisäx jun <code>font-style: italic;</code> CSS rub'eyal.",
    "VIDEO_FILE": "Ruyakb'al Silowäch",
    "VIDEO_OPTIONS": "Taq Rucha'oj Silowäch",
    "VIDEO_CODE_SAMPLE": "Tiwachib'äx &amp; titz'ajb'äx re b'itz'ib' re'  tiz'aqatisäx re silowäch re' pa jun HTML ruxaq",
    "VIDEO_OPTION_SHOW_CONTROLS": "Kek'ut pe taq rusamajel silowäch",
    "VIDEO_OPTION_AUTOPLAY": "Titikirisäx chi ruyonil tutzija' ri silowäch",
    "VIDEO_OPTION_LOOPING": "Titikirisäx chik ri silowäch toq nik'is",
    "VIDEO_OPTION_DISABLE_AUDIO": "Tichup k'oxom",
    "AUDIO_FILE": "Ruyakb'al k'oxom",
    "AUDIO_OPTIONS": "Taq Rucha'oj K'oxom",
    "AUDIO_OPTION_SHOW_CONTROLS": "Kek'ut pe taq rusamajel k'oxom (toq chupül, xtib'ewachin pe ri ruq'ajab'al k'oxom)",
    "AUDIO_OPTION_AUTOPLAY": "Titikirisäx chi ruyonil tutzija' ri k'oxom",
    "AUDIO_OPTION_LOOPING": "Titikirisäx chik ri k'oxom toq nik'is",
    "AUDIO_OPTION_DISABLE_AUDIO": "Titikirisäx ri ruq'ajab'al k'oxom pa memul",
    "BINARY_FILE_TITLE": "Menuk'el Yakb'äl",
    "BINARY_FILE_CANNOT_EDIT": "¡Man jikïl ta achike rub'eyal nunük' re yakb'äl re' ri Thimble!",
    "BINARY_FILE_OPTIONS_TITLE": "Po yatikïr...",
    "BINARY_FILE_DOWNLOAD": "Tiqasäx",
    "BINARY_FILE_OPEN": "Tijaq pa jun k'ak'a' ruwi'",
    "BINARY_FILE_TRY_EDIT": "Titojtob'ëx ninuk'",
    "PDF_FILE_TITLE": "PDF Yakb'äl",
    "INDIVIDUAL_CORNERS": "Yonin taq Tz'ik",
    "ALL_CORNERS": "Ronojel taq Tz'ik",
    "PIXEL_UNIT": "taq piksel",
    "PERCENTAGE_UNIT": "ruwa wok'altäq",
    "EM_UNIT": "em xe'el junilal",
    "ALL_SIDE": "Konojel taq Ruchi'",
    "INDIVIDUAL_SIDES": "Yonin taq Ruchi'",
    "SET_PADDING_FOR": "Tijikib'äx Runojisaxik Ri",
    "SET_MARGIN_FOR": "Tijikib'äx Ruchi' Richin",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Rub'onil Wakami",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Qitzij Rub'onil",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa B'anikil",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex B'anikil",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa B'anikil",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Okisan {1} mul)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Okisan {1} mul)",
    "CMD_JUMPTO_DEFINITION": "Tib'iyin pa Q'ajarib'äl",
    "CMD_SHOW_PARAMETER_HINT": "Tik'ut Choj Ko'öl Etab'äl",
    "NO_ARGUMENTS": "<majun ko'öl etab'äl>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript K'ayewal rik'in Nunïm ri' pa jun Yakb'äl",
    "CMD_ENABLE_QUICK_VIEW": "Nab'ey Tzub'äl pa Hover",
    "DOCS_MORE_LINK": "Tisik'ïx ch'aqa' chik",
    "UPLOAD_FILES_DIALOG_HEADER": "Kejotob'äx taq Yakb'äl",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...o keqirirëx pe taq yakb'äl wawe'.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "¡ÜTZ, ke'osq'opïx ri taq yakb'äl!",
    "UPLOADING_INDICATOR": "Tajin nijotob'äx...",
    "BUTTON_FROM_YOUR_COMPUTER": "Chupam Akematz'ib'...",
    "TAKE_A_SELFIE": "Telesäx jun Yoniwachib'äl...",
    "CMD_MOVE_FILE": "Tisilöx Pa...",
    "PROJECT_ROOT": "Ruxe'el Nimasamaj",
    "PICK_A_FOLDER_TO_MOVE_TO": "Ticha' jun yakwuj",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Xsach toq Nisilöx",
    "UNEXPECTED_ERROR_MOVING_FILE": "Xk'ulwachitäj jun sachoj toq nitojtob'ëx nisilöx {0} pa {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "K'o chik jun yakb'äl o cholb'äl rub'ina'am {0} pa {1}. Ütz ta ri' natz'ib'aj chik kib'i' jujun richin yasamäj chik el.",
    "CONSOLE_TITLE": "Temeb'äl",
    "CONSOLE_TOOLTIP": "Tijaq ri JavaScript Temeb'äl",
    "CONSOLE_CLEAR": "Tijosq'ïx",
    "CONSOLE_CLEAR_TOOLTIP": "Tijosq'ïx ri Temeb'äl",
    "CONSOLE_CLOSE_TOOLTIP": "Titz'apïx ri Temeb'äl",
    "CONSOLE_EMPTY_STRING": "Tijam Rucholajem Tzij",
    "CONSOLE_HELPTEXT": "Tokisäx ri temeb'äl, Titz'qatisäx <code>console.log(&quot;Hello World!&quot;);</code> pa JavaScript ayakb'al."
});
