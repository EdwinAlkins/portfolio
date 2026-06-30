import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { usePostHog } from '@posthog/react';
import { blue1, gray1, gray2 } from '../../contantes/color';

import { getArticles } from '../../utils/dbUtils';
import { Article as ArticleType } from '../../type';

const ArticleContainer = styled.div`
  padding: 2rem;
  color: ${gray1};
`;

const ArticleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ArticleCard = styled.a`
  display: block;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: ${gray1};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${blue1};
    transform: translateY(-2px);
  }
`;

const ArticleTitle = styled.h2`
  font-size: 1.15rem;
  margin: 0 0 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExternalIcon = styled.i`
  color: ${blue1};
  font-size: 0.85rem;
`;

const ArticleDescription = styled.p`
  margin: 0;
  color: ${gray2};
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Article: React.FC = () => {
    const [articles, setArticles] = useState<ArticleType[]>([])
    const posthog = usePostHog();

    useEffect(() => {
        const loadContent = async () => {
            const articles = await getArticles()
            setArticles(articles)
        }
        loadContent()
    }, [])

    return (
        <ArticleContainer>
            <h1>Articles</h1>
            <ArticleList>
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => posthog?.capture('article_clicked', { article_id: article.id, title: article.title, url: article.url })}
                    >
                        <ArticleTitle>
                            {article.title}
                            <ExternalIcon className="fas fa-external-link-alt" />
                        </ArticleTitle>
                        {article.description && (
                            <ArticleDescription>{article.description}</ArticleDescription>
                        )}
                    </ArticleCard>
                ))}
            </ArticleList>
        </ArticleContainer>
    );
};

export default Article;
