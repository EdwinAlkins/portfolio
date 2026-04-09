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
    min-height: 180px;
    max-height: 240px;
    overflow: hidden;
    background: ${black1};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardImageImg = styled.img`
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

const Tooltip = styled.div`
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: ${black2};
    border: 1px solid rgba(144, 205, 244, 0.3);
    color: ${gray1};
    padding: 0.75rem 1rem;
    border-radius: 4px;
    font-size: 0.85rem;
    line-height: 1.5;
    max-width: 350px;
    width: max-content;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 10;

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-top-color: ${black2};
    }
`;

const DescriptionWrapper = styled.div`
    position: relative;
    width: 100%;

    &:hover ${Tooltip} {
        opacity: 1;
        visibility: visible;
    }
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
                    />
                </CardImage>
                <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <DescriptionWrapper>
                        <CardDescription>{project.shortDescription}</CardDescription>
                        <Tooltip>{project.shortDescription}</Tooltip>
                    </DescriptionWrapper>
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