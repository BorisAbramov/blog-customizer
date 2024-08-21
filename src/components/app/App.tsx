import { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { ArticleStateType, defaultArticleState,  } from '../../constants/articleProps';

export const App = () => {
	const [ArticleState, setArticleAppState] = useState<ArticleStateType>(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': ArticleState.fontFamilyOption.value,
					'--font-size': ArticleState.fontSizeOption.value,
					'--font-color': ArticleState.fontColor.value,
					'--container-width': ArticleState.contentWidth.value,
					'--bg-color': ArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setAppState={setArticleAppState} />
			<Article />
		</div>
	);
};