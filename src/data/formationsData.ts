import { Formation } from "../utils/interfaces";

// Nous utiiserons ici le Backtick ` a la place des aposrophes " / ' pour inclure la saute a une nouvelle ligne

export const formationsData: Formation[] = [
  {
    formation_id: `postman`,
    title: `Postman`,
    category: `test`,
    hero: `Apprenez à mettre en place des tests automatisés sur vos APIs avec Postman en suivant notre module alliant théorie, pratique et coaching.`,
    description: `Postman est un outil de développement d'API qui permet aux développeurs de tester, de déboguer et de documenter leurs API. La formation Postman est un programme de formation qui permet aux développeurs d'apprendre à utiliser cet outil de manière efficace.
                  La formation Postman couvre différents aspects de l'utilisation de l'outil, tels que la création de requêtes HTTP, l'envoi de données, la validation des réponses et la gestion des environnements. Les développeurs apprennent également à utiliser des fonctionnalités avancées telles que la collaboration en équipe, l'automatisation des tests et la génération de rapports.
                  La formation Postman est souvent dispensée en ligne ou en présentiel et peut être adaptée aux besoins spécifiques des développeurs. Les participants peuvent suivre des cours pour débutants ou des cours avancés selon leur niveau d'expérience avec l'outil.`,
    objectives: [
      `Comprendre les bases du protocole HTTP`,
      `Tester manuellement des APIs avec Postman`,
      `Ecrire des scripts automatique d'APIs`,
      `Executer les tests Postman en ligne de commande`,
    ],
    program: [
      {
        title: `Découvertes de l’API`,
        parts: [
          `Présentation des formats de données: Json, CSV, XML`,
          `Protocole HTTP`,
          `Présentation des APIs`,
        ],
      },
      {
        title: `Bases de Postman`,
        parts: [
          `Présentation de l’interface`,
          `Exemple pratiques de requêtes avec Postman`,
        ],
      },
      {
        title: `Variables dans Postman`,
        parts: [` Utilisation des variables Postman`, `Portée des variables`],
      },
      {
        title: `Scripts de test`,
        parts: [
          `Scripts de pre-requetes en Javascript`,
          `Scripts des tests`,
          `Aller plus loin dans les vérifications des réponses`,
        ],
      },
      {
        title: `Industrialisation des tests`,
        parts: [
          `Utiliser le Collection Runner`,
          `Jeux De Données de test avec Postman`,
          `Utiliser newman pour executer les tests en ligne de commande`,
        ],
      },
    ],
    targets: [
      `Testeurs manuels et testeurs automatisés`,
      `Développeur Back`,
      `Manager et Product Owner`,
      `Product Manager, Business Analyst`,
    ],
    prerequisites: [
      `Connaissances en test logiciel`,
      `Une expérience avec un langage de programmation est un plus`,
    ],

    duration: 14,
    image_url: `/Formations/postman.png`,
  },
  {
    formation_id: `cypress`,
    title: `Cypress`,
    category: `test`,
    hero: `Apprends à écrire des tests rapide et stable, du back comme du front end. Cypress est un outil d'automatisation de tests incontournable de nos jours pour les projets de développement logiciel.`,
    description: `Découvrez notre formation sur Cypress, le framework de tests end-to-end pour les applications web. Apprenez à automatiser vos tests et à assurer la qualité de vos développements grâce à cette technologie moderne et performante. 
                  Notre programme vous permettra de maîtriser les différents aspects de Cypress, depuis l'installation jusqu'à l'écriture de scénarios complets en passant par la gestion des assertions et des commandes. 
                  Nos formateurs expérimentés vous guideront tout au long de la formation, avec des exercices pratiques et des cas concrets pour vous aider à progresser rapidement. Avec notre formation sur Cypress, vous serez prêt(e) à intégrer cette technologie à vos projets et à améliorer votre processus de développement. 
                  Inscrivez-vous dès maintenant et boostez vos compétences en automatisation de tests avec Cypress !`,
    objectives: [
      `Maitriser les bases du tests automatiques avec Cypress`,
      `Comprendre les commandes Cypress`,
      `Comprendre l’intérêt de l’intégration continue dans un contexte Agile`,
      `Industrialiser des tests Cypress sur Github Actions`,
    ],
    program: [
      {
        title: `Introduction à l'automatisation des tests`,
        parts: [
          `Pourquoi l’automatisation des tests`,
          `Patterns d’automatisation`,
        ],
      },
      {
        title: `Présentation de Cypress`,
        parts: [
          `Architecture et concepts`,
          `Installation de l’environnement de développement`,
          `Les commandes de base`,
        ],
      },
      {
        title: `Écrire des tests avec Cypress`,
        parts: [
          `Comprendre le mécanisme de retry`,
          `Utilisation des hooks Cypress`,
          `Configuration`,
          `Commandes personnalisées`,
        ],
      },
      {
        title: `Notions avancées`,
        parts: [
          `Data Driven Test avec Cypress`,
          `Écrire des tests en Gherkin`,
          `Intercepter des requêtes http`,
        ],
      },
      {
        title: `Industrialisation des tests`,
        parts: [
          `Générer des rapports`,
          `Automatiser l’exécution sur Github Actions`,
        ],
      },
    ],
    targets: [`Testeurs`, `Chefs de projets`, `Développeurs`],
    prerequisites: [
      `Connaissances en test logiciel`,
      `Une expérience avec un langage de programmation est un plus`,
    ],

    duration: 14,
    image_url: `/Formations/cypress.png`,
  },
  {
    formation_id: `robot-framework`,
    title: `Robot Framework`,
    category: `test`,
    hero: `Robot Framework est un framework générique et open source qui permet d'automatiser facilement les tests d'acceptation.`,
    description: `Robot Framework est un framework open-source utilisé pour l'automatisation des tests logiciels. Il permet de créer des tests automatisés pour différents types d'applications, tels que les applications web, les applications de bureau et les applications mobiles.
                  Robot Framework utilise une syntaxe simple et facile à apprendre pour écrire des tests, basée sur le langage naturel anglais. Il prend en charge différents types de tests tels que les tests unitaires, les tests fonctionnels, les tests de performance et les tests d'acceptation.
                  Il est également extensible grâce à son architecture modulaire, permettant l'utilisation de bibliothèques tierces pour étendre les fonctionnalités de base du framework. De plus, il est possible d'écrire des bibliothèques personnalisées dans différents langages de programmation, tels que Python, Java, C#, etc.
                  Robot Framework dispose d'une large communauté d'utilisateurs actifs, qui fournissent des plugins, des bibliothèques et des outils tiers pour faciliter l'utilisation du framework. Il est également intégré avec des outils de développement populaires tels que Jenkins, Travis CI, et Git.`,
    objectives: [
      `Maitriser les bases du tests automatiques avec RobotFramework`,
      ` Écrire, analyser, structurer un test par mots-clés`,
      `Comprendre l’intérêt de l’intégration continue dans un contexte Agile`,
      `Industrialiser des tests Robot Framework sur Github Actions`,
    ],
    program: [
      {
        title: `Introduction à l'automatisation`,
        parts: [
          `Pourquoi l’automatisation des tests`,
          `Pattern d’automatisation:  Arrange - Act - Assert`,
        ],
      },
      {
        title: `Présentation de Robot Framework`,
        parts: [
          `Architecture et concepts`,
          `Installation de l’environnement de développement`,
          `Librairies standard de Robot Framework`,
        ],
      },
      {
        title: `Écrire des tests avec les mots-cles`,
        parts: [
          `Structure d’un cas de test, suite de test`,
          `Exécution et reporting des tests`,
          `Les variables Robot Framework`,
          `SetUp, TearDown et Tag`,
          `Data Driven Test avec Robot Framework`,
          `Behavior Driven Test avec RobotFramework`,
          `Librairie Builtin de Robot Framework`,
        ],
      },
      {
        title: `Les tests front end avec la librairie Selenium`,
        parts: [
          `Installation des prérequis Selenium Webdriver`,
          `Operations de base sur une page web: Cliquer, Écrire`,
          `Sélectionner dans une liste`,
          `Vérifications de base sur une page web`,
          `Page Object Model avec Robot Framework`,
        ],
      },
    ],
    targets: [`Testeurs/automaticiens`, `Chefs de projets`, `Développeurs`],
    prerequisites: [
      `Connaissances en test logiciel`,
      `Une expérience avec un langage de programmation est un plus est une nouvelle ligne`,
    ],

    duration: 14,
    image_url: `/Formations/robot-framework.png`,
  },
  {
    formation_id: `playwright`,
    title: `Playwright`,
    category: `test`,
    hero: `Apprends à écrire des tests rapide et stable, du back comme du front end. Playwright est un outil d'automatisation de tests incontournable de nos jours pour les projets de développement logiciel.`,
    description: `Découvrez les possibilités passionnantes de l’automatisation de tests web avec notre formation approfondie axée sur l’utilisation de Playwright.
                  Cette formation pratique est conçue pour les professionnels qui souhaitent maîtriser l’automatisation des tests pour les applications web, en mettant en avant les fonctionnalités avancées et intuitives de Playwright.`,
    objectives: [
      `Maîtrise de l’Automatisation des Tests Web avec Playwright`,
      `Création de Scénarios de Test Complexes`,
      `Intégration des Tests dans les Pipelines de Développement`,
    ],
    program: [
      {
        title: `Introduction à l’Automatisation de Tests Web avec Playwright`,
        parts: [
          `Aperçu de l’automatisation de tests web et des avantages de Playwright.`,
          `Installation et configuration de l’environnement Playwright.`,
        ],
      },
      {
        title: `Fondamentaux de Playwright et Création de Scénarios de Test`,
        parts: [
          `Introduction aux concepts clés de Playwright.`,
          `Création de scénarios de test basiques avec Playwright.`,
          `Interaction avec les éléments de l’interface utilisateur (boutons, champs de saisie, etc.).`,
        ],
      },
      {
        title: `Validation Automatique des Résultats et Gestion des Attentes`,
        parts: [
          `Utilisation d’assertions pour valider les résultats des tests.`,
          `Gestion des attentes - Temps de chargement, éléments asynchrones.`,
        ],
      },
      {
        title: `Automatisation Avancée et Tests Multi-Navigateurs`,
        parts: [
          `Automatisation de tests multi-navigateurs avec Playwright.`,
          `Interaction avec des pop-ups, des éléments dynamiques, etc.`,
          `Utilisation de Playwright pour les tests de réactivité et de performance.`,
        ],
      },
      {
        title: `Intégration dans les Pipelines de Développement et Débogage`,
        parts: [
          `Intégration des tests Playwright dans les pipelines CI/CD.`,
          `Stratégies de débogage avancées - Identification et résolution des problèmes.`,
          `Analyse et génération de rapports de test détaillés.`,
        ],
      },
      {
        title: `Pratique Guidée et Projets Réels`,
        parts: [
          `Création et exécution de scénarios de test avancés.`,
          `Travailler sur des projets pratiques pour appliquer les compétences acquises.`,
        ],
      },
      {
        title: `Tendances Actuelles et Perspectives en Automatisation de Tests Web`,
        parts: [
          `Aperçu des tendances actuelles en automatisation de tests web.`,
          `Aperçu des nouvelles fonctionnalités et mises à jour de Playwright.`,
        ],
      },
    ],
    targets: [
      `Testeurs Logiciels`,
      `Professionnels du Développement (Développeurs ou DevOps)`,
      `Analystes en Tests`,
    ],
    prerequisites: [
      `Connaissance de Base en Programmation`,
      `Familiarité avec les Technologies Web`,
      `Notions de Tests Logiciels`,
    ],

    duration: 14,
    image_url: `/Formations/playwright.png`,
  },
  {
    formation_id: `selenium`,
    title: `Selenium`,
    category: `test`,
    hero: `Notre formation Selenium WebDriver vous enseignera comment utiliser Selenium pour automatiser vos tests de développement.`,
    description: `Plongez au cœur de l’automatisation web de niveau avancé avec notre formation dédiée exclusivement à Selenium WebDriver. Cette formation intensive vous permettra de maîtriser les compétences essentielles de Selenium WebDriver, en mettant l’accent sur son application dans l’automatisation de tests et de tâches spécifiques.
                  Que vous soyez un professionnel du développement, un testeur logiciel ou un passionné d’automatisation, cette formation en Selenium WebDriver vous fournira une expertise précieuse pour automatiser efficacement les tâches web et améliorer votre productivité. Rejoignez notre formation dès maintenant et explorez les possibilités passionnantes de l’automatisation web avec Selenium WebDriver.
                  Ce programme intensif de 3 jours offre une introduction complète à Selenium WebDriver et aux concepts clés de l’automatisation des tests logiciels. Les participants auront l’opportunité d’acquérir des compétences pratiques essentielles et de travailler sur des scénarios de test réels pour une expérience d’apprentissage immersive.`,
    objectives: [
      `Maîtriser les Fondamentaux de Selenium WebDriver`,
      `Écrire des Scripts de Test Avancés`,
      `Intégrer l’Automatisation des Tests dans le Processus de Développement`,
      `Déboguer et Résoudre les Problèmes de Test`,
      `Créer des Rapports de Test Complets`,
    ],
    program: [
      {
        title: `Introduction à Selenium WebDriver et Scripting de Base`,
        parts: [
          `Présentation de la formation et aperçu de Selenium WebDriver`,
          `Installation et configuration de l’environnement Selenium`,
          `Premiers pas avec Selenium WebDriver - Écriture de scripts simples`,
          `Interaction avec les éléments de l’interface utilisateur - Boutons, champs de saisie`,
        ],
      },
      {
        title: `Automatisation Avancée et Intégration`,
        parts: [
          `Gestion des attentes - Temps de chargement et éléments asynchrones`,
          `Interaction avec les fenêtres contextuelles et les onglets`,
          `Utilisation de sélecteurs avancés pour identifier les éléments`,
          `Automatisation de tests de régression et intégration dans le processus de développement`,
        ],
      },
      {
        title: `Débogage, Rapports de Test et Projet Pratique`,
        parts: [
          `Stratégies de débogage avancées - Identification et résolution des problèmes`,
          `Génération de rapports de test détaillés`,
          `Projet pratique - Automatisation d’un scénario réaliste`,
          `Présentation des projets, retours d’expérience et conclusion de la formation`,
        ],
      },
    ],
    targets: [
      `Professionnels du Développement (Développeurs ou DevOps)`,
      `Testeurs Logiciels`,
    ],
    prerequisites: [
      `Connaissance de base en programmation`,
      `Familiarité avec un langage de programmation comme Java, Python, C#, PHP ou Javascript`,
      `Compréhension des tests logiciels`,
    ],

    duration: 14,
    image_url: `/Formations/selenium.png`,
  },
  {
    formation_id: `soapui`,
    title: `SoapUI`,
    category: `test`,
    hero: `Apprenez à mettre en place des tests automatisés sur vos APIs avec SoapUI, l'outil de test d'API Open Source le plus largement utilisé pour les API SOAP et REST.`,
    description: `Explorez les bases de l’automatisation des tests API avec notre formation en utilisant SoapUI.
                  Cette formation pratique est conçue pour les testeurs qui souhaitent acquérir les compétences nécessaires pour automatiser les tests de services web et d’API en utilisant l’outil SoapUI.`,
    objectives: [
      `Compréhension de base de l’Automatisation des Tests API`,
      `Maîtrise de l’Utilisation de SoapUI`,
      `Création et Exécution de Scénarios de Test Automatisés`,
      `Intégration dans le Processus de Développement`,
    ],
    program: [
      {
        title: `Introduction à l’Automatisation de Tests API avec SoapUI`,
        parts: [
          `Aperçu de l’automatisation des tests API et de l’importance de SoapUI.`,
          `Installation et configuration de l’environnement SoapUI.`,
        ],
      },
      {
        title: `Fondamentaux de SoapUI et Création de Scénarios de Test`,
        parts: [
          `Introduction aux concepts clés de SoapUI.`,
          `Création de scénarios de test basiques avec SoapUI.`,
          `Utilisation de requêtes et de réponses API.`,
        ],
      },
      {
        title: `Validation Automatique des Résultats et Assertions`,
        parts: [
          `Utilisation d’assertions pour valider les résultats des tests API.`,
          `Gestion des attentes - Temps de réponse, données de sortie.`,
        ],
      },
      {
        title: `Automatisation Avancée et Tests de Performance`,
        parts: [
          `Automatisation de tests avancés avec des scripts Groovy.`,
          `Configuration et exécution de tests de performance avec SoapUI.`,
        ],
      },
      {
        title: `Intégration dans les Pipelines de Développement et Débogage`,
        parts: [
          `Intégration des tests SoapUI dans les pipelines CI/CD.`,
          `Stratégies de débogage pour identifier et résoudre les problèmes.`,
        ],
      },
      {
        title: `Pratique Guidée et Projets Réels`,
        parts: [
          `Création et exécution de scénarios de test automatisés.`,
          `Travailler sur des projets pratiques pour appliquer les compétences acquises.`,
        ],
      },
      {
        title: `Tendances Actuelles et Perspectives en Automatisation de Tests API`,
        parts: [
          `Aperçu des tendances actuelles en automatisation de tests API.`,
          `Aperçu des nouvelles fonctionnalités et outils dans le domaine.`,
        ],
      },
    ],
    targets: [
      `Professionnels du Développement (Développeurs ou DevOps)`,
      `Testeurs Logiciels`,
      `Analystes en Tests`,
    ],
    prerequisites: [
      `Connaissance de Base de l’Informatique`,
      `Compétences de Navigation et d’Interface Utilisateur`,
      `Familiarité avec les Services Web et API (Optionnel)`,
    ],

    duration: 14,
    image_url: `/Formations/soapui.png`,
  },
  {
    formation_id: `reactjs`,
    title: `ReactJS`,
    category: `dev`,
    hero: `Construire des applications ReactJS : Un formation étape par étape`,
    description: `Cette formation d'initiation à ReactJS vous apprend à créer des interfaces utilisateur interactives en utilisant les bases de React. Vous découvrirez les composants, la gestion de l'état et les hooks, avec des exercices pratiques pour construire vos premières applications React.`,
    objectives: [
      `Comprendre les concepts fondamentaux de ReactJS : Composants, props, et état.`,
      `Apprendre à créer des interfaces utilisateur dynamiques.`,
      `Utiliser les hooks pour gérer l'état et les effets secondaires.`,
      `Développer des applications web simples et interactives.`,
      `Maîtriser les bonnes pratiques pour une gestion efficace du code React.`,
    ],
    program: [
      {
        title: `Bases de JavaScript ES6 et mise en place de l’environnement`,
        parts: [
          `Rappels JavaScript ES6`,
          `Variables (let, const)`,
          `Fonctions fléchées`,
          `Classes et modules`,
          `Mise en place de l’Environnement de Travail`,
          `Installation de VS Code, Node.js et npm`,
          `Création d’une première application avec Create React App`,
          `Travaux Pratiques : Exercices sur les variables et fonctions ES6, création d’une première application simple avec React.`,
        ],
      },
      {
        title: `Découverte de React et création de composants`,
        parts: [
          `Introduction à React`,
          `Principes de base de React et ses avantages`,
          `Syntaxe JSX : écrire du HTML dans JavaScript`,
          `Création de Composants`,
          `Différence entre composants fonctionnels et composants de classe`,
          `Création et affichage des premiers composants`,
          `Travaux Pratiques : Création de composants simples pour afficher du contenu, introduction à JSX pour structurer les éléments.`,
        ],
      },
      {
        title: `Gestion de l’état avec Props et useState`,
        parts: [
          `Introduction aux Props et à l’État (State)`,
          `Transmettre des données entre composants avec props`,
          `Utiliser useState pour gérer l’état local`,
          `Gestion et Mise à Jour de l’Interface`,
          `Props.children pour afficher du contenu imbriqué`,
          `Mise à jour de l’état et rendu dynamique`,
          `Travaux Pratiques : Création de composants interactifs qui affichent et modifient des données avec useState et props.`,
        ],
      },
      {
        title: `Navigation avec React Route`,
        parts: [
          `Créer une Application Multi-pages`,
          `Introduction à React Route pour gérer la navigation`,
          `Mise en place des routes et liens entre pages`,
          `Navigation et Paramètres d’URL`,
          `Utilisation des routes dynamiques avec des paramètres`,
          `Gestion de la navigation imbriquée`,
          `Travaux Pratiques : Création d’une application à plusieurs pages avec des routes et paramètres d’URL.`,
        ],
      },
      {
        title: `Événements et Rendu Conditionnel`,
        parts: [
          `Gestion des Événements Utilisateur`,
          `Gestion des clics et saisies dans le JSX`,
          `Création de fonctions de gestion (handlers)`,
          `Rendu Conditionnel`,
          `Affichage conditionnel avec l’opérateur ternaire et &&`,
          `Optimisation de l’affichage dynamique`,
          `Travaux Pratiques : Création de boutons interactifs et affichage conditionnel selon l’état des composants.`,
        ],
      },
      {
        title: `Manipulation des listes, formulaires, graphes et APIs`,
        parts: [
          ` Travailler avec des Listes`,
          `Afficher une liste d’éléments avec map`,
          `Interagir avec des APIs`,
          `Créer des graphes pour la visualisation des données`,
          `Importance des clés (key) pour optimiser React`,
          `Gestion des Formulaires`,
          `Création de formulaires avec des composants contrôlés`,
          `Utilisation des refs pour accéder au DOM`,
          `Travaux Pratiques : Création d’une liste dynamique d’éléments et d’un formulaire pour ajouter des éléments.`,
        ],
      },
      {
        title: `Hooks et Bonnes Pratiques`,
        parts: [
          `Les Hooks dans React`,
          `Découverte de useEffect pour les effets de bord`,
          `Différence entre Hooks et composants de classe`,
          `Organisation et bonnes pratiques`,
          `Structurer et organiser son code React`,
          `Introduction à la gestion d’état globale (ex. : Redux)`,
          `Travaux Pratiques : Mise en place des Hooks dans une application, organisation du code pour une meilleure lisibilité.`,
        ],
      },
      {
        title: `Conclusion, Tests et Perspectives`,
        parts: [
          `Tests et bonnes pratiques`,
          `Introduction aux tests unitaires avec Jest`,
          `Bonnes pratiques pour un code maintenable et lisible`,
          `Révision et perspectives d’avenir`,
          `Récapitulatif des principaux concepts et bonnes pratiques`,
          `Perspectives et prochaines étapes d’apprentissage`,
          `Travaux Pratiques : Exercice de révision et d’auto-évaluation pour valider les acquis de la formation.`,
        ],
      },
    ],
    targets: [
      `Développeurs débutants en JavaScript`,
      `Développeurs front-end`,
      `Étudiants en informatique`,
      `Professionnels du développement web`,
    ],
    prerequisites: [
      `Connaissances de base en JavaScript`,
      `Notions de base en HTML/CSS`,
      `Familiarité avec un IDE`,
    ],

    duration: 28,
    image_url: `/Formations/reactjs.png`,
  },
  {
    formation_id: `appium`,
    title: `Appium`,
    category: `test`,
    hero: `Automatisation des tests mobiles avec Appium : De la théorie à la pratique`,
    description: `Cette formation vous permettra de découvrir et maîtriser l'automatisation des tests pour les applications mobiles avec Appium. 
    Vous apprendrez à configurer et à utiliser Appium pour tester des applications Android et iOS, en automatisant les interactions utilisateur et en validant le bon fonctionnement des fonctionnalités. 
    À travers des exercices pratiques, vous acquerrez les compétences nécessaires pour intégrer Appium dans vos projets de test, automatiser des scénarios de tests complexes et améliorer la qualité des applications mobiles.`,
    objectives: [
      `Comprendre le fonctionnement d'Appium`,
      `Automatiser les tests sur des applications Android et iOS`,
      `Maîtriser l’écriture de scripts de test`,
      `Gérer les éléments UI mobiles`,
      `Mettre en place des tests end-to-end sur des applications mobiles`,
      `Optimiser et maintenir les tests automatisés`,
    ],
    program: [
      {
        title: `Comprendre l’automatisation des tests mobiles`,
        parts: [
          `Introduction aux tests mobiles`,
          `Types de tests mobiles `,
          `Avantages de l’automatisation`,
          `Présentation d’Appium`,
          `Installation et configuration d’Appium `,
        ],
      },
      {
        title: `Prise en main d’Appium et premiers tests`,
        parts: [
          `Configuration de l’environnement`,
          `Exploration de l'interface Appium Desktop`,
          `Création d'un premier script de test`,
          `Exécution du test `,
          `Introduction aux différents types de tests Appium`,
        ],
      },
      {
        title: `Automatisation avancée et intégration avec les tests`,
        parts: [
          `Automatisation des interactions utilisateur complexes`,
          `Gestion de l’état de l’application `,
          `Automatisation de tests sur iOS `,
          `Intégration avec des frameworks de tests`,
        ],
      },
      {
        title: `Optimisation des tests et bonnes pratiques`,
        parts: [
          `Gestion des éléments dynamiques`,
          `Meilleures pratiques pour des tests efficaces`,
          `Optimisation des tests Appium`,
          `Maintenance des scripts de test`,
          `Intégration dans un pipeline CI/CD`,
        ],
      },
    ],
    targets: [
      `Testeurs logiciels`,
      `Ingénieurs qualité`,
      `Développeurs d’applications mobiles`,
      `Professionnels du test`,
      `Équipes DevOps et CI/CD`,
    ],
    prerequisites: [
      `Connaissances de base en programmation`,
      `Expérience avec les concepts de tests logiciels`,
      `Notions de base sur les applications mobiles`,
      `Aucun prérequis spécifique à Appium n’est nécessaire`,
    ],

    duration: 14,
    image_url: `/Formations/appium.png`,
  },
  {
    formation_id: `uipath-debutant`,
    title: `UiPath débutants`,
    category: `rpa`,
    hero: `Automatisation des workflows simples avec UiPath`,
    description: `Cette formation a pour but de permettre aux participants de découvrir les concepts fondamentaux de l'automatisation avec UiPath et de devenir autonomes dans la création de workflows simples.`,
    objectives: [
      `Comprendre les bases de l'automatisation robotique des processus (RPA)`,
      `Découvrir l’environnement UiPath Studio et ses outils`,
      `Apprendre à concevoir, développer et exécuter des robots simples`,
      `Connaître les bonnes pratiques en matière de conception de workflows`,
    ],
    program: [
      {
        title: `Introduction à l’automatisation RPA`,
        parts: [
          `Qu'est-ce que la RPA ?`,
          `Les avantages de l’automatisation`,
          `Les différents outils RPA du marché`,
        ],
      },
      {
        title: `Prise en main d’UiPath`,
        parts: [
          `Installation et configuration d’UiPath Studio`,
          `Exploration de l’interface utilisateur`,
          `Introduction à UiPath Assistant`,
        ],
      },
      {
        title: `Création de workflows simples`,
        parts: [
          `Comprendre les activités de base (Assign, Write Line, Input Dialog)`,
          `Automatisation d’une tâche simple avec Excel`,
          `Gestion des erreurs et débogage`,
          `Atelier pratique : Créer un robot pour traiter des fichiers`,
        ],
      },
      {
        title: `Gestion des données`,
        parts: [
          `Variables et arguments`,
          `Types de données en UiPath`,
          `Manipulation des tableaux et des collections`,
        ],
      },
      {
        title: `Introduction à l’automatisation UI`,
        parts: [
          `Identifier des éléments UI avec UiPath`,
          `Enregistrement et lecture`,
          `Gestion des actions clavier et souris`,
        ],
      },
      {
        title: `Publication et exécution`,
        parts: [
          `Publier un projet`,
          `Exécuter un robot via UiPath Assistant`,
          `Notions sur Orchestrateur`,
        ],
      },
    ],
    targets: [
      `Débutants en RPA`,
      `Analystes métiers`,
      `Employés souhaitant optimiser leurs processus`,
      `Toute personne intéressée par l’automatisation de tâches répétitives`,
    ],
    prerequisites: [
      `Notions de base en informatique`,
      `Connaissance de Microsoft Office (Excel, Word)`,
    ],

    duration: 14,
    image_url: `/Formations/uipath.png`,
  },
  {
    formation_id: `uipath-advanced`,
    title: `UiPath avancé`,
    category: `rpa`,
    hero: `Automatisation des workflows complexes avec UiPath`,
    description: `Cette formation avancée s\'adresse aux utilisateurs ayant déjà des bases en RPA avec UiPath et souhaitant 
    approfondir leurs compétences pour concevoir des workflows complexes et optimiser l’intégration avec d’autres systèmes`,
    objectives: [
      `Maîtriser les fonctionnalités avancées d’UiPath Studio`,
      `Automatiser des processus complexes et gérer les exceptions`,
      `Intégrer UiPath avec des outils externes (bases de données, API, SAP)`,
      `Exploiter UiPath Orchestrator pour la gestion et la supervision des robots`,
    ],
    program: [
      {
        title: `Rappel des concepts essentiels`,
        parts: [
          `Variables, arguments, et types de données complexes`,
          `Gestion des exceptions`,
          `Utilisation des événements`,
        ],
      },
      {
        title: `Automatisation avancée`,
        parts: [
          `Introduction au ReFramework`,
          `Comprendre la structure modulaire du ReFramework`,
          `Mise en place des workflows Init, Get Transaction Data, Process et End Process`,
          `Atelier pratique : Implémentation d’un processus complexe avec le ReFramework`,
        ],
      },
      {
        title: `Intégration avec des systèmes tiers`,
        parts: [
          `Utilisation des activités API (HTTP Request, JSON)`,
          `Connexion aux bases de données (Query, Transactions)`,
          `Intégration avec des outils ERP comme SAP`,
        ],
      },
      {
        title: `Orchestrateur et gestion des robots`,
        parts: [
          `Présentation d’UiPath Orchestrateur`,
          `Gestion des environnements et des queues`,
          `Planification et supervision des robots`,
          `Atelier pratique : Déployer un processus sur Orchestrateur`,
        ],
      },
      {
        title: `Optimisation et bonnes pratiques`,
        parts: [
          `Conception modulaire et réutilisable`,
          `Optimisation des workflows (performances)`,
          `Rédaction de la documentation technique`,
        ],
      },
    ],
    targets: [
      `Développeurs RPA`,
      `Administrateurs RPA`,
      `Analystes techniques`,
      `Toute personne souhaitant se spécialiser en automatisation avancée`,
    ],
    prerequisites: [
      `Connaissance de base d’UiPath Studio`,
      `Notions de programmation (C#, VB.Net, ou Python)`,
      `Compréhension des processus métiers`,
    ],

    duration: 14,
    image_url: `/Formations/uipath.png`,
  },
];
