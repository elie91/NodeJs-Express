const builder = require('xmlbuilder');
const xlsx = require('node-xlsx');
const fs = require('fs');


const fileName = './docs/IMPORT EDOF.xlsx';
if (!fs.existsSync(fileName)) {
    return console.error('Le fichier formation.xlsx est manquant');
}


const xml = builder
    .create('lheo', { version: '1.0', encoding: 'ISO-8859-1' })
    .att('xmlns', 'https://www.of.moncompteformation.gouv.fr')

const offres = xml.ele('offres');

const obj = xlsx.parse(fileName);
const data = obj[0].data;
data.forEach((line, index) => {
    if (index === 0) return;
    if (line.length === 0) return;
    //formations
    const formation = offres.ele('formation', { numero: line[0], datemaj: line[1], datecrea: line[2] });
    formation.ele('intitule-formation', {}, line[3]);
    const objectifFormation = formation.ele('objectif-formation');
    objectifFormation.dat(line[4]);
    formation.ele('resultats-attendus', {}, line[5]);
    const contenuFormation = formation.ele('contenu-formation');
    contenuFormation.dat(line[6]);
    formation.ele('parcours-de-formation', {}, line[7]);
    formation.ele('objectif-general-formation', {}, line[8]);
    const certification = formation.ele('certification');
    certification.ele('code-CERTIFINFO', {}, line[9]);

    const action = formation.ele('action', { numero: line[10], datemaj: line[11], datecrea: line[12] });
    action.ele('niveau-entree-obligatoire', {}, line[13]);
    action.ele('modalites-enseignement', {}, line[14]);
    action.ele('conditions-specifiques', {}, line[15]);

    const lieuFormation = action.ele('lieu-de-formation');
    const coordonnes = lieuFormation.ele('coordonnees', { numero: line[16] });
    coordonnes.ele('nom', {}, line[17]);
    coordonnes.ele('prenom', {}, line[18]);

    let adresse = coordonnes.ele('adresse', { numero: line[19] });
    adresse.ele('ligne', {}, line[20]);
    adresse.ele('codepostal', {}, line[21]);
    adresse.ele('ville', {}, line[22]);

    const geolocalisation = adresse.ele('geolocalisation');
    geolocalisation.ele('latitude', {}, line[23]);
    geolocalisation.ele('longitude', {}, line[24]);


    const extras = adresse.ele('extras', { info: "adresse" });
    extras.ele('extra', { info: 'numero-voie' }, line[25]);
    extras.ele('extra', { info: 'code-nature-voie' }, line[26]);
    extras.ele('extra', { info: 'libelle-voie' }, line[27]);

    const telfixe = coordonnes.ele('telfixe');
    telfixe.ele('numtel', {}, line[28]);
    coordonnes.ele('courriel', {}, line[29]);

    action.ele('modalites-entrees-sorties', {}, line[30]);

    const urlAction = action.ele('url-action');
    urlAction.ele('urlweb', {}, line[31]);

    const session = action.ele('session', { numero: line[32], datemaj: line[33], datecrea: line[34] });
    const periode = session.ele('periode');
    periode.ele('debut', {}, line[35]);
    periode.ele('fin', {}, line[36]);


    const adresseInscription = session.ele('adresse-inscription');
    let adresse2 = adresseInscription.ele('adresse', { numero: line[37] });

    adresse2.ele('ligne', {}, line[38]);
    adresse2.ele('codepostal', {}, line[39]);
    adresse2.ele('ville', {}, line[40]);

    const geolocalisation2 = adresse2.ele('geolocalisation');
    geolocalisation2.ele('latitude', {}, line[41]);
    geolocalisation2.ele('longitude', {}, line[42]);

    const extras2 = adresse2.ele('extras', { info: "adresse" });
    extras2.ele('extra', { info: 'numero-voie' }, line[43]);
    extras2.ele('extra', { info: 'code-nature-voie' }, line[44]);
    extras2.ele('extra', { info: 'libelle-voie' }, line[45]);

    session.ele('etat-recrutement', {}, line[46]);

    const extras3 = session.ele('extras', { info: line[47] });
    const extra = extras3.ele('extra', { info: 'contact-inscription' });

    const coordonnees = extra.ele('coordonnees', { numero: line[49] });
    coordonnees.ele('nom', {}, line[50]);
    coordonnees.ele('prenom', {}, line[51]);
    const telfixe2 = coordonnees.ele('telfixe');
    telfixe2.ele('numtel', {}, line[52]);
    coordonnees.ele('courriel', {}, line[53]);
    /* 
        extras3.ele('extra', { info: 'garantie' }, line[54]);
        extras3.ele('extra', { info: 'modalites-particulieres' }, line[55]); */

    const adresseInformation = action.ele('adresse-information');
    let adresse3 = adresseInformation.ele('adresse', { numero: line[54] });
    adresse3.ele('ligne', {}, line[55]);
    adresse3.ele('codepostal', {}, line[56]);
    adresse3.ele('ville', {}, line[57]);


    const geolocalisation3 = adresse3.ele('geolocalisation');
    geolocalisation3.ele('latitude', {}, line[58]);
    geolocalisation3.ele('longitude', {}, line[59]);


    const extras4 = adresse3.ele('extras', { info: line[60] });
    extras4.ele('extra', { info: 'ligne5-adresse' }, line[61]);
    extras4.ele('extra', { info: 'conformite-reglementaire' }, line[62]);

    action.ele('restauration', {}, line[63]);
    action.ele('hebergement', {}, line[64]);
    action.ele('transport', {}, line[65]);
    action.ele('acces-handicapes', {}, line[66]);
    action.ele('langue-formation', {}, line[67]);

    action.ele('modalites-recrutement', {}, line[68]);
    action.ele('modalites-pedagogiques', {}, line[69]);
    action.ele('code-perimetre-recrutement', {}, line[70]);
    action.ele('infos-perimetre-recrutement', {}, line[71]);
    action.ele('nombre-heures-centre', {}, line[72]);
    action.ele('nombre-heures-entreprise', {}, line[73]);


    const extras5 = action.ele('extras', { info: "action" });
    const extra2 = extras5.ele('extra', { info: "contact-information" });


    const coordonnees2 = extra2.ele('coordonnees', { numero: line[76] });
    coordonnees2.ele('nom', {}, line[77]);
    coordonnees2.ele('prenom', {}, line[78]);

    const telfixe3 = coordonnees2.ele('telfixe');
    telfixe3.ele('numtel', {}, line[79]);
    coordonnees2.ele('courriel', {}, line[80]);

    const organisme = formation.ele('organisme-formation-responsable');
    const siret = organisme.ele('SIRET-organisme-formation');
    siret.ele('SIRET', {}, line[87]);

    const extraEnd = formation.ele('extras', { info: line[88] });
    extraEnd.ele('extra', { info: 'resume-contenu' }, line[89])

});


xml.end({ pretty: true });

fs.writeFile('output.xml', xml, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
