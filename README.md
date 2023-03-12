## P7 Projet Kasa de la formation Web Développeur OpenClassrooms

# Objectif du projet : 

Démarrer le projet React et développer l’ensemble de "Kasa", une application web de location immobilière, les composants React, les routes React Router, la responsive en suivant les maquettes Figma.

Construction du site avec un fichier JSON qui est donné avec les instructions pour afficher 20 annonces immobilières.

# Contraintes fonctionnelles :

Pour le défilement des photos dans la galerie (composant Gallery) :
Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.