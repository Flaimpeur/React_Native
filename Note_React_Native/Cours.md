--- Introduction ---

React Native est une lib permettant de creer des applications natives android et IOS.

--- Dev iOS ---

Normalement pout developper sur il faut posseder un ordinateur sous macOS et un terminal mobile sous iOS

Langage utilisé => Swift (ou Objective-C)

On peut pas faire tourner toute l'appli React Native sous emulateur.

--- Dev Android ---

POur beneficier de l'experience native il faut installer Android Studio et un SDK android. On cree alors notre application avec le langage Java (ou Kotlin)

https://developer.android.com/studio/

--- React Native ---

React Native est un framework cross-plateform qui permet de produire des applications native iOS et Android, le tout avec la syntaxe de la bibliothéque React :

Exemple code :
	"const App = props => {
		return <View>
			<Text>Hello</Text>
		</View>}"

--- Principes de developpement : Les core components

plus d'info : https://reactnative.dev/docs/components-and-apis

RN fournit un nombre de 'core components' pre integres qui permettent de couvrir un large éventail de possibilités de developpement. Ils repondent aux besoin les plus courants de la plupart des applications mobiles les plus simples.

"StyleSheet" => est un composant qui apporte des fonction similaire au CSS

--- Composant View

C'est le composant de base pour la construction d'interface utilisateur mobile.
C'est un conteneur qui embarque nativement des fonctionnalités : 
	- Flex https://reactnative.dev/docs/flexbox
	- du style https://reactnative.dev/docs/style
	- des fonctionnalités tactiles https://reactnative.dev/docs/handling-touches
	- des fonctionnalités d'accessibilité https://reactnative.dev/docs/accessibility


--- Installation Android  ---

Il existe deux maniere de mettre en place son environnement :
	- Expo et Expo GO
	- React Native CLI

Expo est un ensemble d'outils construit autour de react native, est la methode la plus rapide pour commencer a developper sans avoir a trop se soucier de la configuration du projet.