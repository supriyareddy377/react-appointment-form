const axios = require("axios");

const sendSMS = async (name, phone, email, message) => {

  console.log("SMS Function Called");

  try {

    const msg =
`Name : "${name}"
Number : "${phone}"
Email : "${email}"
Message : "${message}"
URL : "Form Testing"
Mokashi Software Solutions`;

    const encodedMsg = encodeURIComponent(msg);

    // OWNER PHONE NUMBER
    const ownerNumber = "918143830676";

    const url = `http://sms.proware.in/api/sendhttp.php?authkey=141775A5Wcg6Mi616e5624P1&mobiles=${ownerNumber}&message=${encodedMsg}&sender=MEDTWT&route=4&country=91&DLT_TE_ID=1207161613778630888`;

    console.log("SMS sent successfully");

    const response = await axios.get(url);

    console.log("SMS API Response:", response.data);

  } catch (error) {

    console.log("SMS Error:", error);

  }

};

module.exports = sendSMS;