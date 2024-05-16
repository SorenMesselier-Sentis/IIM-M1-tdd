# Documentation du Projet

## Table des Matières
1. [Aperçu du Projet](#aperçu-du-projet)
2. [Installation](#installation)
3. [Utilisation](#utilisation)
4. [Structure du Projet](#structure-du-projet)
5. [Endpoints](#endpoints)
6. [Tests](#tests)
7. [Contribuer](#contribuer)
8. [Licence](#licence)

## Aperçu du Projet

Ce projet est une application Node.js qui fournit divers endpoints liés aux réservations d'hôtels, aux réservations et aux photos. Il comprend des tests unitaires avec Jest et s'intègre à Google Cloud Functions pour le déploiement.

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/SorenMesselier-Sentis/IIM-M1-tdd
    cd IIM-M1-tdd
    ```
2. Installez les dépendances :
    ```sh
    npm install
    ```

## Utilisation

Pour démarrer l'application localement, exécutez :
```sh
npm start
```

Cela démarrera le serveur sur le port 5555

## Structure du Projet

```
IIM-M1-TDD
├── .github/workflows
├── coverage
├── data
│   ├── booking.json
│   ├── hotel.json
│   ├── picture.json
│   └── reservation.json
├── database
│   └── database.js
├── mockTests
│   └── booking.test.js
├── src
│   ├── booking.js
│   ├── hotels.js
│   ├── pictures.js
│   └── reservations.js
├── tests
│   ├── functional.test.js
│   ├── hotels.test.js
│   ├── pictures.test.js
│   └── reservations.test.js
├── .gcloudignore
├── .gitignore
├── app.js
├── package.json
└── README.md

```

Endpoints
GET /getHotels

Description : Récupère une liste d'hôtels.
Réponse : Tableau JSON d'hôtels.
GET /getReservations

Description : Récupère une liste de réservations.
Réponse : Tableau JSON de réservations.
GET /getHotelPictures

Description : Récupère les photos d'un hôtel spécifique.
Paramètres de requête : hotelId - ID de l'hôtel.
Réponse : Objet JSON contenant les photos de l'hôtel.
GET /getBookedHotels

Description : Récupère une liste d'hôtels réservés.
Réponse : Tableau JSON d'hôtels réservés.
GET /health

Description : Endpoint de vérification de l'état de santé.
Réponse : { status: "OK" }

Tests
Tests Unitaires
Le projet utilise Jest pour les tests unitaires. Pour exécuter les tests, utilisez la commande suivante :

```sh
npm test
```
Tests Mock
Voici un exemple de test mock pour récupérer les hôtels réservés :

```js
const { getBookedList } = require("../src/booking.js");
const { connectDB, disconnectDB } = require("../database/database.js");

beforeAll(() => {
  connectDB();
});

afterAll(() => {
  disconnectDB();
});

test("[onUserGetBookedList][Success][ExpectBookedHotelsWithPhotos]", () => {
  const bookedHotels = getBookedList();
  const bookingMock = {
    hotel3: [
      {
        name: "cccccccccccccccccccc",
        pictures: {
          photo1: "HHHHHHHHHHHH.png",
          photo2: "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png",
        },
        book: "true",
      },
    ],
  };
  expect(bookedHotels).toEqual(bookingMock);
});
```

Contribuer

Forkez le dépôt.
Créez une nouvelle branche (git checkout -b feature/votre-fonctionnalité).
Faites vos modifications.
Commitez vos modifications (git commit -am 'Ajout d'une fonctionnalité').
Poussez sur la branche (git push origin feature/votre-fonctionnalité).
Créez une nouvelle Pull Request.



