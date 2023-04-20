import * as MailComposer from 'expo-mail-composer';

export const sendFileOnEmail = async (myFile) => {
    console.log(myFile)
    try {
        const options = {
            attachments: [myFile],
            subject: 'Objet du mail'
        }


        await MailComposer.composeAsync(options)
    } catch (error) {
        console.log('JE SUIS ICI §§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§')
    }
}