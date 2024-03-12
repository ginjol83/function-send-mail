/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import functions from "firebase-functions"
import sendMailFree from "./src/services/send-mail-service.js"
 
const sendMail = functions.https.onRequest((request, response) => {
    sendMailFree()
    response.send("Mail sended!")
});

export { sendMail }
