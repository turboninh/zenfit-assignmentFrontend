import React from 'react';
import { LoadingBox, LoadingDot } from './UI';

const Loading = React.memo(({ size }: { size: number }) => (
	<LoadingBox>
		<LoadingDot size={size} />
		<LoadingDot size={size} />
		<LoadingDot size={size} />
	</LoadingBox>
));

export default Loading;
