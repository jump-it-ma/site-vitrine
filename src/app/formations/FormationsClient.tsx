"use client";

import React, { useState } from "react";
import FormationCard from "../../components/Formation/FormationCard";
import CategoryCard from "@/components/Formation/CategoryCard";
import { GrReturn } from "react-icons/gr";

interface Formation {
    formation_id: string;
    title: string;
    category: string;
    hero: string;
    description: string;
    image_url: string;
    price: number;
    duration: number;
}

interface Category {
    category_id: string;
    name: string;
    description: string;
    image: string;
}

interface FormationsClientProps {
    categories: Category[];
    formationsData: Formation[];
}

const FormationsClient: React.FC<FormationsClientProps> = ({
    categories,
    formationsData,
}) => {
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(
        null
    );

    const filteredFormations = selectedCategory
        ? formationsData.filter((f) => f.category === selectedCategory.category_id)
        : formationsData;

    return (
        <div className="w-full">
            {selectedCategory === null ? (
                <div className="flex flex-wrap justify-center items-stretch gap-6 py-8">
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.category_id}
                            id={category.category_id}
                            name={category.name}
                            description={category.description}
                            image={category.image}
                            onClick={() => setSelectedCategory(category)}
                        />
                    ))}
                </div>
            ) : (
                <div className="py-8 px-4">
                    <div className="flex justify-between items-center">
                        <div
                            onClick={() => setSelectedCategory(null)}
                            className="cursor-pointer flex justify-between gap-3 items-center bg-gray-200 px-4 py-2 rounded-lg mb-6"
                        >
                            <GrReturn size={18} />
                            <p className="text-gray-800 text-base font-bold">Retour aux Categories</p>
                        </div>
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Formations de {selectedCategory.name}
                        </h2>
                        <div></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFormations.map((formation) => (
                            <FormationCard
                                key={formation.formation_id}
                                formation_id={formation.formation_id}
                                title={formation.title}
                                hero={formation.hero}
                                description={formation.description}
                                image_url={formation.image_url}
                                price={formation.price}
                                duration={formation.duration}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormationsClient;
