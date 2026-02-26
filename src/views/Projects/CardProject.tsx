import React from 'react';
import styled from 'styled-components';
import { gray1, blue1, black1, black2 } from '../../contantes/color';
import { Project } from '../../type';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const CardContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    background: ${black2};
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(144, 205, 244, 0.2);
    }
`;

const CardImage = styled.div`
    position: relative;
    width: 100%;
    padding-top: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
    background: ${black1};
`;

const CardImageImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;

    ${CardContainer}:hover & {
        transform: scale(1.05);
    }
`;

const CardContent = styled.div`
    padding: 1rem;
`;

const CardTitle = styled.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${gray1};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const CardDescription = styled.p`
    margin: 0 0 0.75rem 0;
    font-size: 0.85rem;
    color: ${gray1};
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
`;

const CardTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`;

const Tag = styled.span`
    background: rgba(144, 205, 244, 0.1);
    color: ${blue1};
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
`;

const CardMeta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatusIndicator = styled.div<{ status: string }>`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ status }) => status === 'Production' ? '#4ade80' : status === 'Beta' ? '#fbbf24' : '#f87171'};
    margin-right: 6px;
`;

const StatusText = styled.span`
    font-size: 0.75rem;
    color: ${gray1};
    opacity: 0.6;
`;

const ViewDetailsLink = styled.span`
    color: ${blue1};
    font-size: 0.85rem;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;

interface CardProjectProps {
    project: Project;
}

const CardProject: React.FC<CardProjectProps> = ({ project }) => {
    return (
        <CardLink to={`/portfolio/project/${project.id}`}>
            <CardContainer>
                <CardImage>
                    <CardImageImg 
                        src={project.capsuleImage} 
                        alt={project.title} 
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x225/030711/90cdf4?text=' + encodeURIComponent(project.title);
                        }} 
                    />
                </CardImage>
                <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.shortDescription}</CardDescription>
                    <CardTags>
                        {project.tags.slice(0, 3).map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </CardTags>
                    <CardMeta>
                        <div>
                            <StatusIndicator status={project.status} />
                            <StatusText>{project.category}</StatusText>
                        </div>
                        <ViewDetailsLink>View Details →</ViewDetailsLink>
                    </CardMeta>
                </CardContent>
            </CardContainer>
        </CardLink>
    );
};

export default CardProject;