import * as MailComposer from 'expo-mail-composer';

export const sendFileOnEmail = async (myFile) => {
    try {
        const options = {
            attachments: [myFile],
            subject: 'Mes taches'
        }


        await MailComposer.composeAsync(options)
    } catch (error) {
        console.log(error);
    }
}
