import React, { useEffect, useState } from 'react';
import { Recipe } from './Recipe';
import { ModalBody } from '../../components/Modal';
import * as api from '../../utils/api';
import MealPlansContainer from '../../containers/MealPlans';

type Recipe = any; // FIXME: type

type RecipesProps = {
	meal: {
		id: number;
		name: string;
		meals: {
			recipe: Recipe;
		}[];
	};
};

const Recipes = React.memo(({ meal }: RecipesProps) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const existing = meal ? meal.meals.map((item) => item.recipe) : [];
	const mealPlansContainer = MealPlansContainer.useContainer();

	const onAddRecipeToPlan = (recipe: Recipe) => {
		mealPlansContainer.pushDish(meal.id, recipe);
	};

	useEffect(() => {
		const source = api.CancelToken.source();

		(async () => {
			setLoading(true);

			try {
				const data = await import('../../mock/recipes.json');
				setData(data.default);
			} catch (e) {
				console.error(e);
			}

			setLoading(false);
		})();

		return () => {
			if (source) {
				source.cancel('Operation canceled by the user.');
			}
		};
	}, []);

	return (
		<ModalBody>
			{data.map((recipe) => (
				<Recipe
					{...recipe}
					key={`recipe_${recipe.id}`}
					selected={existing.includes(recipe.id)}
					onAddItem={() => onAddRecipeToPlan(recipe)}
				/>
			))}
		</ModalBody>
	);
});

export default Recipes;
