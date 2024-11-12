import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gray1 } from '../../contantes/color';

import { getArticles } from '../../utils/dbUtils';
import { Article as ArticleType } from '../../type';

const ArticleContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
`;

const Article: React.FC = () => {
    const [articles, setArticles] = useState<ArticleType[]>([])

    useEffect(() => {
        const loadContent = async () => {
            const projects = await getArticles()
            setArticles(projects)
        }
        loadContent()
    }, [])

    return (
        <ArticleContainer>
            <h1>Article</h1>
            {articles.map((article) => (
                <i key={article.id}>article {article.title} <Link to={`/portfolio/article/${article.id}`}>voir</Link></i>
            ))}
        </ArticleContainer>
    );
};

export default Article; 