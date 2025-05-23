import { Blog, User } from "../utils/interfaces";

const users: User[] = [
  {
    name: `Hamza Jakan`,
    job: `Consultant en test et automatisation`,
    description: ``,
    image: `https://i.ibb.co/pK6T2DN/user.png`,
    contact: `https://www.linkedin.com/in/hamza-jakan-18835727b`,
  },
  {
    name: `Abdelkarim AJEKAL`,
    job: `Consultant en test et automatisation`,
    description: ``,
    image: `https://i.ibb.co/9wGJxdT/4140048.png`,
    contact: `https://www.linkedin.com/in/abdelkarimaj/`,
  },
  {
    name: `Mohammed Ali`,
    job: `Consultant en test et automatisation`,
    description: ``,
    image: `https://i.ibb.co/9wGJxdT/4140048.png`,
    contact: `https://www.linkedin.com/company/alee-conseil-ma/`,
  },
  {
    name: `Ayoub Elmenssouri`,
    job: `Ingénieur QA - Automatisation des tests`,
    description: ``,
    image: `https://i.ibb.co/9wGJxdT/4140048.png`,
    contact: `https://www.linkedin.com/in/ayoub-elmenssouri-964552262/`,
  },
];

export const blogsData: Blog[] = [
  {
    id: `tests-api`,
    title: `Les tests api, pourquoi et comment ?`,
    body: [
      {
        section: 1,
        type: `image`,
        url: `https://miro.medium.com/v2/resize:fit:828/format:webp/1*sFRJH-ISgCobtCDKbnPzPQ.png`,
      },
      {
        section: 2,
        type: `paragraph`,
        text: `Les tests API (Application Programming Interface) sont une partie essentielle du développement de logiciels. Ils permettent de vérifier que les interfaces de programmation de votre application fonctionnent comme prévu, en assurant la communication correcte et l’interaction entre différentes parties de logiciels.`,
      },
      {
        section: 3,
        type: `header2`,
        text: `Pourquoi les tests API sont-ils importants ?`,
      },
      {
        section: 4,
        type: `image`,
        url: `https://miro.medium.com/v2/resize:fit:828/format:webp/1*zsbb6EAtxe_Iqn0_-YTWgg.png`,
        imageCaption: `Assurance fonctionnement de l’api`,
      },
      {
        section: 5,
        type: `itemize`,
        items: [
          {
            title: `Fiabilité`,
            body: `Les tests API garantissent que l’interface fonctionne correctement et peut gérer les demandes prévues, les réponses, les erreurs et les performances attendues.`,
          },
          {
            title: `Intégration`,
            body: `Ils permettent de vérifier que différents composants logiciels interagissent correctement entre eux.`,
          },
          {
            title: `Performance`,
            body: `Les tests de performance API peuvent aider à identifier les goulots d’étranglement et à déterminer la capacité de charge de l’API`,
          },
          {
            title: `Sécurité`,
            body: `Les tests API peuvent également aider à identifier les vulnérabilités potentielles dans l’API, comme les fuites de données.`,
          },
        ],
      },
      {
        section: 6,
        type: `header2`,
        text: `Comment effectuer les tests API ?`,
      },
      {
        section: 7,
        type: `itemize`,
        items: [
          {
            title: `Comprendre la documentation de l’API`,
            body: `La première étape consiste à lire attentivement la documentation de l’API que vous souhaitez tester. La documentation fournira des informations sur les points d’extrémité disponibles, les paramètres requis, les méthodes HTTP supportées, les formats de données acceptés et retournés, ainsi que les éventuelles limitations ou restrictions.`,
          },
        ],
      },
      {
        section: 8,
        type: `itemize`,
        items: [
          {
            title: `Configurer l’environnement de test`,
            body: `Assurez vous d’avoir un environnement de test approprié pour effectuer vos tests. Cela peut inclure l’installation de logiciels supplémentaires, la configuration de variables d’environnement, ou la création de comptes d’accès si nécessaire.`,
          },
        ],
      },
      {
        section: 9,
        type: `itemize`,
        items: [
          {
            title: `Utiliser un outil de test d’API`,
            body: `Il existe de nombreux outils disponibles pour tester les API. Certains outils populaires incluent Postman, cURL, SoapUI, et Insomnia. Ces outils vous permettent d’envoyer des requêtes HTTP aux points d’extrémité ou les de l’API, de spécifier les paramètres requis, et d’analyser les réponses reçues.`,
          },
        ],
      },
      {
        section: 10,
        type: `itemize`,
        items: [
          {
            title: `Tester les différentes fonctionnalités de l’API`,
            body: `Une fois que vous avez configuré votre environnement de test et choisi un outil, vous pouvez commencer à tester les différentes fonctionnalités de l’API. Cela peut inclure l’envoi de requêtes GET, POST, PUT, DELETE, ou d’autres méthodes HTTP spécifiques, en fonction des fonctionnalités fournies par l’API.`,
          },
        ],
      },
      {
        section: 11,
        type: `itemize`,
        items: [
          {
            title: `Vérifier les réponses et les résultats`,
            body: `Après avoir envoyé une requête, assurez vous de vérifier la réponse reçue. Vérifiez si la réponse correspond à ce que vous attendiez, si les données sont correctes, et si les codes de statut HTTP sont appropriés. Vous pouvez également vérifier les journaux ou les rapports d’erreurs pour identifier d’éventuels problèmes.`,
          },
        ],
      },
      {
        section: 12,
        type: `itemize`,
        items: [
          {
            title: `Gérer les erreurs et les exceptions`,
            body: `Pendant les tests, il est important de gérer les erreurs et les exceptions qui peuvent survenir. Assurez vous de tester les scénarios d’erreur en envoyant des requêtes incorrectes ou en simulant des conditions d’erreur spécifiques. Vérifiez si l’API renvoie des messages d’erreur appropriés et si elle gère correctement les exceptions.`,
          },
        ],
      },
      {
        section: 13,
        type: `itemize`,
        items: [
          {
            title: `Automatiser les tests`,
            body: `Si vous prévoyez de tester l’API de manière régulière ou si vous souhaitez intégrer les tests dans un processus d’intégration continue, vous pouvez envisager d’automatiser les tests à l’aide d’outils tels que Newman (pour Postman), cURL avec des scripts, ou des bibliothèques de test spécifiques à votre langage de programmation.`,
          },
        ],
      },
      {
        section: 14,
        type: `itemize`,
        items: [
          {
            title: `Documenter les résultats des tests`,
            body: `Il est important de documenter les résultats de vos tests, y compris les requêtes envoyées, les réponses reçues, les problèmes rencontrés, et les corrections apportées. Cela vous aidera à suivre les progrès des tests et à partager les résultats avec d’autres membres de l’équipe.`,
          },
        ],
      },
      {
        section: 15,
        type: `paragraph`,
        text: `En suivant ces étapes, vous devriez être en mesure de tester efficacement une API et de vous assurer qu’elle fonctionne correctement selon les spécifications fournies.`,
      },
      {
        section: 16,
        type: `paragraph`,
        text: `Il existe plusieurs types de tests API, qui sont utilisés pour vérifier le bon fonctionnement des interfaces de programmation d'applications (API). Voici quelques-uns des types de tests API les plus courants :`,
      },
      {
        section: 17,
        type: `itemize`,
        items: [
          {
            title: `Tests d'intégration`,
            body: `Ces tests vérifient la communication et l'intégration entre différentes parties de l'API, telles que les modules, les services ou les composants. Ils permettent de s'assurer que les différentes parties de l'API fonctionnent correctement ensemble.`,
          },
          {
            title: `Tests de performance`,
            body: `Ces tests évaluent les performances de l'API en termes de temps de réponse, de débit, de charge et de scalabilité. Ils permettent de s'assurer que l'API peut gérer un volume élevé de requêtes et de trafic sans compromettre ses performances.`,
          },
        ],
      },
      {
        section: 18,
        type: `paragraph`,
        text: `Il existe de nombreux outils disponibles pour aider à automatiser ce processus, comme Postman, JMeter, et Rest-Assured pour les tests API REST, ou SoapUI pour les tests API SOAP. Ces outils peuvent aider à créer, exécuter et gérer des tests API de manière plus efficace.`,
      },
      {
        section: 19,
        type: `paragraph`,
        text: `Ces outils offrent différents niveaux de fonctionnalités et de complexité, il est donc recommandé de choisir celui qui s’adapte le mieux à vos besoins spécifiques.`,
      },
      {
        section: 20,
        type: `code`,
        language: `javascript`,
        code: `// Function to fetch data from an API
async function fetchData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data: ' + {error.message});
  }
}

describe('API Tests', () => {
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

  it('should fetch data from the API', async () => {
    const data = await fetchData(apiUrl);
    expect(data).toBeDefined();
    expect(data.id).toEqual(1);
    expect(data.title).toEqual('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
  });

  it('should handle errors when fetching data', async () => {
    const invalidUrl = 'https://jsonplaceholder.typicode.com/nonexistent';
    await expect(fetchData(invalidUrl)).rejects.toThrowError('Failed to fetch data');
  });
});`,
      },
      {
        section: 21,
        type: `iframe`,
        url: `https://www.youtube.com/embed/xg3CpNGyfA0?wmode=opaque&widget_referrer=https%3A%2F%2Fmedium.com%2F%40jakanhamza%2Fles-tests-api-pourquoi-et-comment-207e22a33ea2&enablejsapi=1&origin=https%3A%2F%2Fcdn.embedly.com&widgetid=1`,
      },
    ],
    author: users[0],
    date: new Date(`2023-07-25`),
  },
  {
    id: `test-visuel`,
    title: `Le Test Visuel`,
    body: [
      {
        section: 1,
        type: `header1`,
        text: `Qu'est-ce que le Test Visuel?`,
      },
      {
        section: 2,
        type: `paragraph`,
        text: `Le test visual est une méthode de test des applications qui vérifie leur apparence et leur comportement dans l'interface utilisateur (IU) ou l'interface utilisateur graphique. L'objectif est de s'assurer que tous les éléments visuels tels que les couleurs, les images, les polices de caractères et les mises en page apparaissent correctement et restent cohérentes sur différents appareils, systèmes d'exploitation et navigateurs.`,
      },
      {
        section: 3,
        type: `image`,
        url: `/Blog/test-visuel-1.png`,
        imageCaption: `Détection de changement`,
      },
      {
        section: 4,
        type: `header1`,
        text: `Pourquoi effectuer un Test Visuel?`,
      },
      {
        section: 5,
        type: `paragraph`,
        text: `Les tests visuels garantissent que l'interface utilisateur du produit développé apparaît telle qu'elle est prévue pour les utilisateurs. Il permet d'atteindre cet objectif grâce à plusieurs avantages clés, notamment : `,
      },
      {
        section: 6,
        type: `itemize`,
        items: [
          {
            body: `L'identification des défauts ou des problèmes dans l'interface utilisateur`,
          },
          {
            body: `Détecter les variations de l'interface utilisateur qui ne correspondent pas aux instantanés de base`,
          },
          {
            body: `Détecter les variations de l'interface utilisateur qui ne correspondent pas aux instantanés de base`,
          },
          {
            body: `Détecter les variations de l'interface utilisateur qui ne correspondent pas aux instantanés de base`,
          },
        ],
      },
      {
        section: 7,
        type: `paragraph`,
        text: `En outre, les tests visuels constituent une méthode efficace pour tester les applications, permettant aux testeurs d'identifier les défauts visuels et les incohérences qui peuvent avoir un impact négatif sur l'expérience de l'utilisateur et la facilité d'utilisation de l'application.`,
      },
      {
        section: 8,
        type: `header1`,
        text: `Comment faire un Test Visuel?`,
      },
      {
        section: 9,
        type: `paragraph`,
        text: `Les tests visuels génèrent, analysent et comparent des instantanés de navigateur(snapshots) afin de détecter si des pixels ont été modifiés. Ces différences de pixels sont appelées "Visual diffs" (parfois appelés diffs perceptuels, pdiffs, diffs CSS, diffs UI). `,
      },
      {
        section: 10,
        type: `image`,
        url: `/Blog/test-visuel-2.png`,
        imageCaption: `une illustration d’un diff visuel`,
      },
      {
        section: 11,
        type: `paragraph`,
        text: `Pour effectuer un test visuel, vous devez suivre les étapes suivantes :`,
      },
      {
        section: 12,
        type: `enumerate`,
        items: [
          {
            body: `Utiliser un Test Runner pour écrire et exécuter des tests.`,
          },
          {
            body: `Utiliser un navigateur d'automatisation pour reproduire les actions de l'utilisateur sur l'application ou le site web.`,
          },
          {
            body: `Réaliser des captures d'écran initiales des éléments de l'interface utilisateur de l'application afin de créer une base de comparaison.`,
          },
          {
            body: `Exécuter le code de test en arrière-plan pour simuler les interactions de l'utilisateur et faire des captures d'écran lorsque des changements sont identifiés.`,
          },
          {
            body: `Comparer les captures d'écran capturées aux images de référence afin de détecter toute différence visuelle.`,
          },
          {
            body: `Comparer les captures d'écran capturées aux images de référence afin de détecter toute différence visuelle.`,
          },
        ],
      },
      {
        section: 13,
        type: `header1`,
        text: `Test Visuel par rapport à Test Fonctionnel`,
      },
      {
        section: 14,
        type: `paragraph`,
        text: `Les tests visuels et fonctionnels sont deux types différents de tests logiciels. Les deux types de tests sont importants pour la qualité globale d’une application logicielle.`,
      },
      {
        section: 15,
        type: `image`,
        url: "/Blog/test-visuel-3.png",
        imageCaption: "Comparaison entre le test visuel et fonctionnel",
      },
      {
        section: 16,
        type: `header1`,
        text: `Tests visuels manuels`,
      },
      {
        section: 17,
        type: `paragraph`,
        text: `Les tests visuels manuels font référence au processus d'inspection et de vérification manuelles des aspects visuels d'une application logicielle ou d'un site web, afin de s'assurer qu'ils répondent à la conception souhaitée et aux exigences fonctionnelles. Ce type de test est généralement effectué par des testeurs humains qui utilisent leurs yeux pour évaluer l'apparence, la présentation et le comportement de l'application ou du site web.`,
      },
      {
        section: 18,
        type: `header2`,
        text: `Étapes du test manuel :`,
      },
      {
        section: 19,
        type: `enumerate`,
        items: [
          {
            body: `Parcourez l'application et faites des captures d'écran de la version de base connue.`,
          },
          {
            body: `Faites une autre série de captures d'écran de la dernière version de l'application.`,
          },
          {
            body: `Comparez manuellement ces captures d'écran (de base par rapport à la version actuelle) pour identifier les bogues visuels.`,
          },
        ],
      },
      {
        section: 20,
        type: `header1`,
        text: `Tests visuels automatisés`,
      },
      {
        section: 21,
        type: `paragraph`,
        text: `Les tests visuels automatisés consistent à utiliser des outils logiciels spécialisés pour vérifier automatiquement l'aspect visuel et le comportement d'une application logicielle ou d'un site web. Contrairement aux tests visuels manuels, qui sont effectués par des testeurs humains, les tests visuels automatisés sont réalisés à l’aide d'outils de test capables de simuler les actions d'un utilisateur humain et d'évaluer les éléments visuels d’un site web.`,
      },
      {
        section: 22,
        type: `paragraph`,
        text: `Voici quelques-uns des outils permettant de réaliser des tests visuels automatisés :`,
      },
      {
        section: 23,
        type: `header2`,
        text: `1. Applitools`,
      },
      {
        section: 24,
        type: `image`,
        url: `/Blog/test-visuel-4.png`,
      },
      {
        section: 25,
        type: `paragraph`,
        text: `Cet outil est connu pour ses tests visuels utilisant l'intelligence artificielle et ses capacités de tests intermédiaires entièrement automatisés. Il peut analyser les applications web et mobiles et identifier toute modification des éléments visuels.`,
      },
      {
        section: 26,
        type: `header2`,
        text: `2. Percy`,
      },
      {
        section: 27,
        type: `image`,
        url: `/Blog/test-visuel-5.png`,
      },
      {
        section: 28,
        type: `paragraph`,
        text: `Cet outil est idéal pour les tests d'applications web ou de bureau. Il offre des capacités de test visuel et s'intègre à d'autres frameworks de test.`,
      },
      {
        section: 29,
        type: `header2`,
        text: `3. Galen Framework`,
      },
      {
        section: 30,
        type: `image`,
        url: `/Blog/test-visuel-6.png`,
      },
      {
        section: 31,
        type: `paragraph`,
        text: `C’est un outil de test visuel qui offre un large éventail de fonctionnalités et d'intégrations pour aider les testeurs à automatiser leur processus de test. Il permet aux utilisateurs de tester la mise en page des applications web à l'aide d'une syntaxe simple.`,
      },
      {
        section: 32,
        type: `header2`,
        text: `4. VisualEyes`,
      },
      {
        section: 33,
        type: `image`,
        url: `/Blog/test-visuel-7.png`,
      },
      {
        section: 34,
        type: `paragraph`,
        text: `VisualEyes is a visual testing tool that offers automated visual testing and review for web applications. It uses machine learning to detect even the slightest visual changes in web pages with heat maps.`,
      },
      {
        section: 35,
        type: `header2`,
        text: `5. Happo.io`,
      },
      {
        section: 36,
        type: `image`,
        url: `/Blog/test-visuel-8.png`,
      },
      {
        section: 37,
        type: `paragraph`,
        text: `Happo.io est un service de test de capture d’écran multi-navigateur qui aide à prévenir les régressions visuelles et vous permet de visualiser les changements dans votre interface utilisateur (UI), Il vous permet de comparer l’apparence visuelle des composants de l’interface utilisateur avant et après les changements.`,
      },
      {
        section: 38,
        type: `header1`,
        text: `Ressources`,
      },
      {
        section: 39,
        type: `link`,
        text: `https://www.browserstack.com/guide/visual-testing-beginners-guide`,
      },
      {
        section: 40,
        type: `link`,
        text: `https://www.geeksforgeeks.org/software-testing-visual-testing`,
      },
      {
        section: 41,
        type: `link`,
        text: `https://saucelabs.com/resources/blog/what-is-visual-testing`,
      },
      {
        section: 42,
        type: `link`,
        text: `https://www.youtube.com/watch?v=MXfZeE9RQDw&t=939s`,
      },
      {
        section: 43,
        type: `link`,
        text: `https://docs.percy.io/v1/docs`,
      },
      {
        section: 44,
        type: `link`,
        text: `https://smartbear.com/blog/what-is-visual-testing`,
      },
    ],
    author: users[1],
    date: new Date(`2023-07-27`),
  },
  {
    id: "automatisation-tests",
    title: "L'Importance Cruciale des Formations en Automatisation des Tests",
    body: [
      {
        section: 1,
        type: `paragraph`,
        text: `Dans le monde numérique en constante évolution, la qualité des applications logicielles joue un rôle critique dans la réussite des entreprises. L'automatisation des tests est devenue un élément clé pour garantir la fiabilité, les performances et la convivialité des logiciels.`,
      },
      {
        section: 2,
        type: `paragraph`,
        text: `Parmi les nombreux outils disponibles, Cypress, Robot Framework, Postman, Selenium WebDriver, SoapUI et Playwright se démarquent. Dans cet article, nous explorerons en détail l'importance de la formation en automatisation des tests en mettant en avant les avantages de se former sur ces outils essentiels.`,
      },
      {
        section: 3,
        type: `header1`,
        text: `Le Paysage Dynamique de l'Automatisation des Tests`,
      },
      {
        section: 3,
        type: `dangerousParagraph`,
        text: `L'automatisation des tests a évolué pour devenir un élément central des méthodologies de développement logiciel modernes. Alors que les attentes des utilisateurs continuent de croître, les entreprises doivent s'assurer que leurs applications sont fiables et performantes.
              Se former sur des outils d'automatisation tels que <strong>Cypress</strong>, <strong>Robot Framework</strong>, <strong>Postman</strong>, <strong>Selenium WebDriver</strong>, <strong>SoapUI</strong> et <strong>Playwright</strong> permet aux professionnels de relever ces défis avec succès.`,
      },
      {
        section: 4,
        type: `dangerousParagraph`,
        text: `Le <strong>Cypress</strong>, un framework de test JavaScript, se distingue par sa simplicité et sa rapidité, permettant des tests end-to-end fluides et efficaces. Le <strong>Robot Framework</strong> offre une flexibilité inégalée et des scripts lisibles, simplifiant la création de tests automatisés. Avec <strong>Postman</strong>, les testeurs peuvent automatiser les tests d'API de manière collaborative, améliorant l'intégration entre les systèmes.`,
      },
      {
        section: 5,
        type: `dangerousParagraph`,
        text: `L'ajout de <strong>Selenium WebDriver</strong> à la liste renforce encore les capacités d'automatisation. Il est largement utilisé pour tester des applications web à travers différents navigateurs, assurant une couverture complète des tests.`,
      },
      {
        section: 6,
        type: `dangerousParagraph`,
        text: `Quant à <strong>SoapUI</strong>, il se concentre sur les tests d'API, en simulant les requêtes et les réponses pour évaluer la fiabilité et la performance des interfaces.`,
      },
      {
        section: 7,
        type: `dangerousParagraph`,
        text: `Enfin, <strong>Playwright</strong> gagne en popularité en tant qu'outil d'automatisation de tests nouvelle génération, permettant des tests multi-navigateurs et multi-plateformes.`,
      },
      {
        section: 8,
        type: `header1`,
        text: `Les Avantages de la Formation en Automatisation des Tests`,
      },
      {
        section: 9,
        type: `header2`,
        text: `1. Qualité Renforcée :`,
      },
      {
        section: 10,
        type: `paragraph`,
        text: `Les tests automatisés garantissent une cohérence et une précision accrues par rapport aux tests manuels. Les formations en automatisation des tests préparent les professionnels à créer des scénarios de test complets et à les exécuter de manière fiable, améliorant ainsi la qualité globale du logiciel.`,
      },
      {
        section: 11,
        type: `header2`,
        text: `2. Efficacité Opérationnelle :`,
      },
      {
        section: 12,
        type: `paragraph`,
        text: `Les formations en automatisation des tests permettent de réduire considérablement le temps nécessaire pour exécuter des tests répétitifs. Les professionnels formés sont en mesure de créer des scripts de test robustes et de les exécuter rapidement, libérant du temps pour des tâches plus complexes.`,
      },
      {
        section: 13,
        type: `header2`,
        text: `3. Agilité Améliorée :`,
      },
      {
        section: 14,
        type: `paragraph`,
        text: `L'automatisation des tests permet des itérations plus rapides, favorisant un développement agile et réactif. Les tests automatisés peuvent être facilement ajustés et exécutés à chaque nouvelle version, facilitant l'intégration continue.`,
      },
      {
        section: 15,
        type: `header2`,
        text: `4. Économies à Long Terme :`,
      },
      {
        section: 16,
        type: `paragraph`,
        text: `Bien que les formations en automatisation des tests impliquent un investissement initial, elles se traduisent par des économies à long terme grâce à la réduction des tests manuels coûteux et à une meilleure utilisation des ressources.`,
      },
      {
        section: 17,
        type: `header2`,
        text: `5. Polyvalence Technologique :`,
      },
      {
        section: 18,
        type: `paragraph`,
        text: `Les formations sur Cypress, Robot Framework, Postman, Selenium WebDriver, SoapUI et Playwright offrent une polyvalence précieuse. Les professionnels formés sont capables de travailler sur divers projets et d'adopter rapidement de nouvelles technologies.`,
      },
      {
        section: 19,
        type: `header2`,
        text: `Conclusion`,
      },
      {
        section: 20,
        type: `paragraph`,
        text: `Dans un paysage numérique en constante évolution, l'automatisation des tests est devenue une exigence fondamentale pour garantir la qualité et la fiabilité des applications logicielles. Les formations en automatisation des tests sur des outils tels que Cypress, Robot Framework, Postman, Selenium WebDriver, SoapUI et Playwright offrent une voie claire vers l'excellence. En investissant dans ces formations, les individus et les entreprises peuvent non seulement optimiser le référencement SEO de leur site web, mais aussi renforcer leurs compétences et leur valeur sur le marché.`,
      },
      {
        section: 21,
        type: `dangerousParagraph`,
        text: `Pour en savoir plus sur les formations en <strong>Cypress</strong>, <strong>Robot Framework</strong>, <strong>Postman</strong>, <strong>Selenium WebDriver</strong>, <strong>SoapUI</strong> et <strong>Playwright</strong>, visitez notre site web :`,
      },
      {
        section: 22,
        type: `link`,
        text: `https://www.jumpit.ma/formations`,
      },
    ],
    author: users[2],
    date: new Date(`2023-07-30`),
  },
  {
    id: "reporting-notion",
    title:
      "Centraliser vos rapports de test dans Notion : simple, gratuit et collaboratif",
    body: [
      {
        section: 1,
        type: "paragraph",
        text: "Le reporting des tests est souvent réservé aux équipes techniques. Les outils comme Allure, ReportPortal ou TestRail sont puissants, mais peu accessibles pour les non-développeurs . Pourquoi ne pas centraliser automatiquement les résultats dans un outil simple, gratuit et accessible par tous ?",
      },
      {
        section: 2,
        type: "header2",
        text: "🌟 Problèmes fréquents",
      },
      {
        section: 3,
        type: "itemize",
        items: [
          {
            title: "Rapports peu lisibles",
            body: "Générés en HTML, JSON ou XML, ils sont difficiles à comprendre pour les profils non techniques.",
          },
          {
            title: "Données dispersées",
            body: "Les résultats sont éparpillés dans plusieurs outils ou pipelines, ce qui complique leur analyse.",
          },
          {
            title: "Feedback lent",
            body: "Les anomalies ne sont pas toujours visibles rapidement, ralentissant les corrections.",
          },
          {
            title: "Solutions coûteuses",
            body: "Les outils de reporting avancés nécessitent souvent des licences ou une infrastructure complexe.",
          },
        ],
      },
      {
        section: 4,
        type: "header2",
        text: "🚀 Pourquoi choisir Notion ?",
      },
      {
        section: 5,
        type: "itemize",
        items: [
          {
            title: "Simple et collaboratif",
            body: "Notion offre une interface claire, accessible à tous les profils (QA, Dev, PO, etc.).",
          },
          {
            title: "Intégration facile",
            body: "L'API officielle `@notionhq/client` permet d'envoyer des données avec quelques lignes de code en Node.js.",
          },
          {
            title: "Base de données flexible",
            body: "Filtres, tris, vues personnalisées : organisez vos résultats comme vous le souhaitez.",
          },
          {
            title: "Visualisation intégrée",
            body: "Ajoutez des graphiques et des vues dynamiques directement dans Notion.",
          },
          {
            title: "Zéro coût",
            body: "Notion est gratuit pour un usage individuel ou d’équipe de petite taille.",
          },
        ],
      },
      {
        section: 6,
        type: "header2",
        text: "🧑‍💻 Comment ça fonctionne ?",
      },
      {
        section: 7,
        type: "paragraph",
        text: "Un petit script Node.js lit les résultats de vos tests (ex. `cypress-report.json`) à chaque exécution, et les envoie vers une base Notion via l’API. Alimente un tableau qui se met à jour et s’enrichit à chaque nouvelle exécution.",
      },

      {
        section: 9,
        type: "paragraph",
        text: "Installez les dépendances nécessaires à l’envoi des données vers Notion :",
      },
      {
        section: 10,
        type: "code",
        language: "bash",
        code: "npm install @notionhq/client dotenv",
      },
      {
        section: 11,
        type: "code",
        language: "typescript",
        code: `import * as fs from \"fs\";
import * as dotenv from \"dotenv\";
import { Client } from \"@notionhq/client\";

dotenv.config();
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DB_ID;

async function sendReportToNotion() {
  try {
    const raw = fs.readFileSync(\"cypress-report.json\", \"utf8\");
    const data = JSON.parse(raw);
    const stats = data.stats;
    const status = stats.failures > 0 ? \"Failed\" : \"Passed\";
    const environment = process.env.ENVIRONMENT || \"staging\";

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Status: { select: { name: status } },
        Date: { date: { start: new Date().toISOString() } },
        Total_Tests: { number: stats.tests || 0 },
        Passed_Tests: { number: stats.passes || 0 },
        Failed_Tests: { number: stats.failures || 0 },
        Environment: { select: { name: environment } },
      },
    });
  } catch (error) {
    console.error(\"Erreur lors de l'envoi du rapport à Notion :\", error);
  }
}

sendReportToNotion();`,
      },
      {
        section: 12,
        type: "paragraph",
        text: "Alimente un tableau qui se met à jour et s’enrichit à chaque nouvelle exécution.",
      },
      {
        section: 13,
        type: "image",
        url: "/Blog/automation-repport-1.png",
      },
      {
        section: 14,
        type: "paragraph",
        text: "Permet de créer des vues dynamiques : par exemple, afficher uniquement les tests échoués aujourd’hui, ou les régressions critiques à corriger en priorité.",
      },
      {
        section: 15,
        type: "image",
        url: "/Blog/automation-repport-3.png",
      },
      {
        section: 16,
        type: "paragraph",
        text: "Affiche des graphiques pour visualiser les statistiques clés : taux de réussite, durée moyenne, tendances dans le temps.",
      },
      {
        section: 7,
        type: "image",
        url: "/Blog/automation-repport-2.png",
      },
      {
        section: 18,
        type: "header2",
        text: "🤝 Bénéfices pour l’équipe",
      },
      {
        section: 19,
        type: "itemize",
        items: [
          {
            title: "Résultats visibles par tous",
            body: "Plus besoin d’accès à un outil technique pour voir l’état des tests.",
          },
          {
            title: "Réaction rapide",
            body: "Les anomalies sont visibles en temps réel, permettant des corrections immédiates.",
          },
          {
            title: "Suivi qualité facilité",
            body: "Le management peut suivre les KPIs qualité facilement, sans demande au QA.",
          },
          {
            title: "Culture qualité partagée",
            body: "Toute l’équipe peut contribuer au maintien de la stabilité du produit.",
          },
        ],
      },
    ],
    author: users[3],
    date: new Date("2025-05-23"),
  },
];
