import { Category } from "../utils/interfaces";

// Nous utiiserons ici le Backtick ` a la place des aposrophes " / ' pour inclure la saute a une nouvelle ligne

export const categoriesData: Category[] = [
    {
        category_id: "test",
        name: "Test Logiciel",
        description: "Apprenez les techniques et outils de test logiciel pour garantir la qualité, la fiabilité et les performances des applications.",
        image: "/Formations/Categories/category_test.png"
    },
    {
        category_id: "dev",
        name: "Développement Web",
        description: "Maîtrisez les compétences nécessaires pour créer des sites web modernes, interactifs et responsives adaptés aux besoins actuels.",
        image: "/Formations/Categories/category_web.png"
    },
    {
        category_id: "rpa",
        name: "Automatisation des Processus Robotisés",
        description: "Découvrez comment automatiser les tâches répétitives et améliorer l'efficacité opérationnelle grâce aux technologies d’automatisation robotisée des processus.",
        image: "/Formations/Categories/category_rpa.png"
    }
]