import React from 'react';
import { RecipeItem, RecipeTitle, RecipeImage } from '../../components/Recipe';
import { Badge, Button } from '../../components/UI';

type RecipeProps = {
	name: string;
	id: string;
	image: string;
	selected: boolean;
	onAddItem: () => void;
};

export const Recipe = React.memo(({ name, image, selected, id, onAddItem }: RecipeProps) => (
	<RecipeItem>
		<RecipeImage>
			<img src={image} alt={name} />
		</RecipeImage>
		<RecipeTitle>{name}</RecipeTitle>
		{selected ? (
			<Badge>Current</Badge>
		) : (
			<Button type="button">
				<span onClick={() => onAddItem()}>Select</span>
			</Button>
		)}
	</RecipeItem>
));
