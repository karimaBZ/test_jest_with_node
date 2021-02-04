import ejs from 'ejs';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';
const sendEmail = async (req, res) => {
  const {
    NumeroDemande: numeroDemande,
    numeroFacture,
    numeroCommande,
    sujet_de_demande: subject,
    theme_de_demande: topic,
    Fonction: fonction,
    Email: email,
    Nom: nom,
    Prenom: prenom,
    Adresse: adresse,
    CodePostal: codePostal,
    Ville: ville,
    Telephone: telephone,
    Chassis: chassis,
    Immatriculation: immatriculation,
    DateFermeture: dateFermeture,
    dateDebutFacture,
    dateFinFacture,
    motifAnnulation,
    RRF,
    factureRRF,
    dateEnvoieSouhaite,
    heureEnvoieSouhaite,
    texteLibre,
    nomUser,
    prenomUser,
    emailUser,
    telephoneUser,
    codeRRFUser,
    drUser,
    fichiersJoint,
  } = req.body;
  let htmlTemplate = '';
  htmlTemplate = await ejs.renderFile('./public/template.ejs', {
    numeroDemande,
    numeroFacture,
    numeroCommande,
    subject,
    topic,
    email,
    nom,
    prenom,
    fonction,
    fichiersJoint,
    adresse,
    codePostal,
    ville,
    telephone,
    chassis,
    immatriculation,
    factureRRF,
    dateFermeture,
    motifAnnulation,
    RRF,
    dateEnvoieSouhaite,
    heureEnvoieSouhaite,
    dateFinFacture,
    dateDebutFacture,
    texteLibre,
    nomUser,
    prenomUser,
    emailUser,
    telephoneUser,
    codeRRFUser,
    drUser,
  }, { async: true });
  const attachments = fichiersJoint && fichiersJoint.map((file) => ({
    filename: file.name,
    path: `${file.url}`,
  }));
  nodemailer.createTestAccount(() => {
    const htmlEmail = htmlTemplate;
    const transporter = nodemailer.createTransport(smtpTransport({
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.PASS_EMAIL,
      },
    }));
    const mailList = [
      // process.env.EMAIL_TO_SEND,
      emailUser,
    ];
    const mailOptions = {
      to: mailList,
      subject: `${drUser} / ${numeroDemande} / ${topic} ${subject !== undefined ? `/ ${subject}` : '/ Autre'}`,
      html: htmlEmail,
      attachments,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.json({
          status: 400,
          erreur: error,
          message: `Erreur ${error.json}`,
        });
      }
      return res.json({
        status: 200,
        message: 'Votre message est envoyé avec succée',
      });
    });
  });
};
export default sendEmail;
