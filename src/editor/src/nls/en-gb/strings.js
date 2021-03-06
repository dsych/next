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

    "GENERIC_ERROR": "(error {0})",
    "NOT_FOUND_ERR": "The file/directory could not be found.",
    "NOT_READABLE_ERR": "The file/directory could not be read.",
    "EXCEEDS_MAX_FILE_SIZE": "Files larger than {0} MB cannot be opened in {APP_NAME}.",
    "FILE_EXISTS_ERR": "The file or directory already exists.",
    "FILE": "file",
    "FILE_TITLE": "File",
    "DIRECTORY": "directory",
    "DIRECTORY_TITLE": "Directory",
    "DIRECTORY_NAMES_LEDE": "Directory names",
    "FILENAMES_LEDE": "Filenames",
    "FILENAME": "Filename",
    "DIRECTORY_NAME": "Directory Name",
    "ERROR_OUT_OF_SPACE_TITLE": "Project Size Limit Reached",
    "ERROR_PROJECT_SIZE_EXCEEDED": "The total size of the files in your project has exceeded the maximum available space. You will not be able to add any new files until you delete some of the existing files to free up space.",
    "FILE_EXISTS_HEADER": "The file already exists.",
    "OPEN_DIALOG_ERROR": "An error occurred when showing the open file dialog. (error {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "An error occurred when reading the contents of the directory <span class='dialog-filename'>{0}</span>. (error {1})",
    "ERROR_OPENING_FILE_TITLE": "Error Opening File",
    "ERROR_OPENING_FILE": "An error occurred when trying to open the file <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "An error occurred when trying to open the following files:",
    "ERROR_SAVING_FILE_TITLE": "Error Saving File",
    "ERROR_SAVING_FILE": "An error occurred when trying to save the file <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Error Renaming File",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Error Renaming Directory",
    "ERROR_RENAMING_FILE": "An error occurred when trying to rename the file <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "An error occurred when trying to rename the directory <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Error Deleting File",
    "ERROR_DELETING_DIRECTORY_TITLE": "Error Deleting Directory",
    "ERROR_DELETING_FILE": "An error occurred when trying to delete the file <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "An error occurred when trying to delete the directory <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Invalid File Name",
    "INVALID_DIRNAME_TITLE": "Invalid Directory Name",
    "INVALID_FILENAME_MESSAGE": "File names cannot use any system reserved words, end with dots (.) or use any of the following characters: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Directory names cannot use any system reserved words, end with dots (.) or use any of the following characters: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "A file or directory with the name <span class='dialog-filename'>{0}</span> already exists.",
    "ERROR_CREATING_FILE_TITLE": "Error Creating File",
    "ERROR_CREATING_DIRECTORY_TITLE": "Error Creating Directory",
    "ERROR_CREATING_FILE": "An error occurred when trying to create the file <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "An error occurred when trying to create the directory <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "Error Indexing Files",
    "EXT_MODIFIED_TITLE": "External Changes",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> has been modified on disc outside of {APP_NAME}.<br /><br />Do you want to save the file and overwrite those changes?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> has been modified on disc outside of {APP_NAME}, but also has unsaved changes in {APP_NAME}.<br /><br />Which version do you want to keep?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> has been deleted on disc outside of {APP_NAME}, but has unsaved changes in {APP_NAME}.<br /><br />Do you want to keep your changes?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Confirm Delete",
    "CONFIRM_FOLDER_DELETE": "Are you sure you want to delete the folder <span class='dialog-filename'>{0}</span>?",
    "CONFIRM_FILE_DELETE": "Are you sure you want to delete <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "File Deleted",
    "DONE": "Done",
    "OK": "OK",
    "CANCEL": "Cancel",
    "SAVE_AND_OVERWRITE": "Overwrite",
    "DELETE": "Delete",
    "BUTTON_YES": "Yes",
    "BUTTON_NO": "No",
    "USE_IMPORTED": "Use New File",
    "KEEP_EXISTING": "Keep Existing File",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "No Quick Edit available for current cursor position",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS Quick Edit: place cursor on a single class name",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS Quick Edit: incomplete class attribute",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS Quick Edit: incomplete id attribute",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS Quick Edit: place cursor in tag, class, or id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Timing Function Quick Edit: invalid syntax",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Quick Edit: place cursor in function name",
    "BUTTON_NEW_RULE": "New Rule",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "No Quick Docs available for current cursor position",
    "CMD_FILE_NEW": "New File",
    "CMD_FILE_NEW_FOLDER": "New Folder",
    "CMD_FILE_RENAME": "Rename",
    "CMD_FILE_DELETE": "Delete",
    "CMD_FILE_DOWNLOAD": "Download",
    "CMD_CUT": "Cut",
    "CMD_COPY": "Copy",
    "CMD_PASTE": "Paste",
    "CMD_SELECT_ALL": "Select All",
    "CMD_TOGGLE_QUICK_EDIT": "Quick Edit",
    "CMD_TOGGLE_QUICK_DOCS": "Quick Docs",
    "DND_MAX_SIZE_EXCEEDED": "file exceeds maximum supported size: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "unsupported file type",
    "DND_ERROR_UNZIP": "unable to unzip file",
    "DND_ERROR_UNTAR": "unable to untar file",
    "DND_SUCCESS_UNZIP_TITLE": "Unzip Completed Successfully",
    "DND_SUCCESS_UNTAR_TITLE": "Untar Completed Successfully",
    "DND_FILE_REPLACE": "A file named <span class='dialog-filename'>{0}</span> already exists. Do you want to use the new file or keep the existing one?",
    "IMAGE_FILE_TITLE": "Image File",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} pixels",
    "IMAGE_ALT_TEXT": "Image description",
    "IMAGE_FILTERS_TITLE": "Image Filter",
    "IMAGE_FILTER_PINHOLE": "Pinhole",
    "IMAGE_FILTER_SEPIA": "Sepia",
    "IMAGE_FILTER_CONTRAST": "Contrast",
    "IMAGE_FILTER_VINTAGE": "Vintage",
    "IMAGE_FILTER_SUNRISE": "Sunrise",
    "IMAGE_FILTER_EMBOSS": "Emboss",
    "IMAGE_FILTER_GLOWING_SUN": "Glowing Sun",
    "IMAGE_SAVE_WITH_FILTERS": "Apply",
    "IMAGE_RESET_FILTERS": "Cancel",
    "FONT_FILE": "Font file",
    "USE_FONT_INSTRUCTIONS": "To use this font, copy and paste this code into your CSS file.",
    "FONT_TYPE_BOLD": "Bold",
    "FONT_TYPE_ITALIC": "Italic",
    "FONT_BOLD_HTML_TAG": "Put text inside a <code>&lt;strong&gt;&lt;/strong&gt;</code> tag.",
    "FONT_BOLD_CSS_RULE": "Add a <code>font-weight: bold;</code> CSS rule.",
    "FONT_ITALIC_HTML_TAG": "Put text inside an <code>&lt;em&gt;&lt;/em&gt;</code> tag.",
    "FONT_ITALIC_CSS_RULE": "Add a <code>font-style: italic;</code> CSS rule.",
    "VIDEO_FILE": "Video file",
    "VIDEO_OPTIONS": "Video Options",
    "VIDEO_CODE_SAMPLE": "Copy &amp; paste this code  to add this video to an HTML page",
    "VIDEO_OPTION_SHOW_CONTROLS": "Show video controls",
    "VIDEO_OPTION_AUTOPLAY": "Start playing the video automatically",
    "VIDEO_OPTION_LOOPING": "Restart the video when it is over",
    "VIDEO_OPTION_DISABLE_AUDIO": "Disable audio",
    "AUDIO_FILE": "Audio File",
    "AUDIO_OPTIONS": "Audio Options",
    "AUDIO_OPTION_SHOW_CONTROLS": "Show audio controls (when disabled audio player is invisible)",
    "AUDIO_OPTION_AUTOPLAY": "Start playing the audio automatically",
    "AUDIO_OPTION_LOOPING": "Restart the audio when it is over",
    "AUDIO_OPTION_DISABLE_AUDIO": "Start audio player muted",
    "BINARY_FILE_TITLE": "Non-editable File",
    "BINARY_FILE_CANNOT_EDIT": "Thimble is not sure how to edit this file!",
    "BINARY_FILE_OPTIONS_TITLE": "But you can...",
    "BINARY_FILE_DOWNLOAD": "Download it",
    "BINARY_FILE_OPEN": "Open it in a new tab",
    "BINARY_FILE_TRY_EDIT": "Try to edit it",
    "PDF_FILE_TITLE": "PDF File",
    "INDIVIDUAL_CORNERS": "Individual Corners",
    "ALL_CORNERS": "All Corners",
    "PIXEL_UNIT": "pixels",
    "PERCENTAGE_UNIT": "percentage",
    "EM_UNIT": "em font unit",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Current Colour",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Original Colour",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa Format",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex Format",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa Format",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Used {1} time)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Used {1} times)",
    "CMD_JUMPTO_DEFINITION": "Jump to Definition",
    "CMD_SHOW_PARAMETER_HINT": "Show Parameter Hint",
    "NO_ARGUMENTS": "<no parameters>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript File Inference Problem",
    "CMD_ENABLE_QUICK_VIEW": "Quick View on Hover",
    "DOCS_MORE_LINK": "Read more",
    "UPLOAD_FILES_DIALOG_HEADER": "Upload Files",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...or drag files here.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "OK, release the files!",
    "UPLOADING_INDICATOR": "Uploading...",
    "BUTTON_FROM_YOUR_COMPUTER": "From your Computer...",
    "TAKE_A_SELFIE": "Take a Selfie...",
    "CMD_MOVE_FILE": "Move To...",
    "PROJECT_ROOT": "Project Root",
    "PICK_A_FOLDER_TO_MOVE_TO": "Pick a folder",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Move Error",
    "UNEXPECTED_ERROR_MOVING_FILE": "An unexpected error occurred when attempting to move {0} to {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "A file or folder with the name {0} already exists in {1}. Consider renaming either one to continue.",
    "CONSOLE_TITLE": "Console",
    "CONSOLE_TOOLTIP": "Open the JavaScript Console",
    "CONSOLE_CLEAR": "Clear",
    "CONSOLE_CLEAR_TOOLTIP": "Clear the Console",
    "CONSOLE_CLOSE_TOOLTIP": "Close the Console",
    "CONSOLE_EMPTY_STRING": "Empty String",
    "CONSOLE_HELPTEXT": "To use the console, add <code>console.log(&quot;Hello World!&quot;);</code> to your JavaScript file."
});
