import { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { ArticleStateType, defaultArticleState,  } from '../../constants/articleProps';

export const App = () => {
	const [articleState, setArticleAppState] = useState<ArticleStateType>(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppState={setArticleAppState} />
			<Article />
		</div>
	);
};