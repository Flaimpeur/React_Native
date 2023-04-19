import * as FileSystem from 'expo-file-system';

export const writefile = async (data) => {
    // vérifier le contenu du data
    try {
        //vérifier si le fichier est vide
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'file.txt')
        if (fileInfo.exists) {
            //Lire le fichier, et recuperer les donnees existantes
            const fileContent = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'file.txt')
            //Trouver un moyen pour ajouter le contenu passe en param au contenu existant
            console.log('file content if file exists: ', fileContent)
            // tu dois creer une nouvelle chaine a partir de fileContent et data
            const newFile = fileContent + ' ; ' + data
            // ensuite tu ...
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', newFile)
            console.log(newFile)
        } else {
            await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'file.txt', data)
            console.log(data)
        }
    } catch (error) {
        console.log('Erreur non catche writefile util.js:', error)
    }
}

export const deleteFile = async (file) => {
    try {
        const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + file)

        if (fileInfo.exists) {
            await FileSystem.deleteAsync(FileSystem.documentDirectory + file)
        }
    } catch (error) {
        console.log('Error no file : ', error)
    }
}