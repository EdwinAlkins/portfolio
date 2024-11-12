import React, { useEffect, useState } from 'react';
import Makdown from '../../components/Makdown';
import styled from 'styled-components';
import { gray1 } from '../../contantes/color';

import { getArticles } from '../../utils/dbUtils';
import { Article as ArticleType } from '../../type';
import { Link, useParams } from 'react-router-dom';

const ArticleContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
`;

const Article: React.FC = () => {
    const { id } = useParams();
    const [article, setArticle] = useState<ArticleType | null>(null)
    useEffect(() => {
        const loadContent = async () => {
            const projects = await getArticles()
            setArticle(projects.find((article) => String(article.id) === id) || null)
        }
        loadContent()
    }, [id])

    return (
        <ArticleContainer>
            <Link to="/portfolio/articles">Retour</Link>
            {article && <Makdown article={article} />}
        </ArticleContainer>
    );
};

export default Article; 