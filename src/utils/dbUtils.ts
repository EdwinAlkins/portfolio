import { Database, Article, Project, Experience } from '../type';

const dbPath = '/portfolio/db.json'

export const getDatabase = async (): Promise<Database> => {
    const response = await fetch(`${dbPath}`);
    return response.json();
  };

export const getArticles = async (): Promise<Article[]> => {
    return (await getDatabase()).articles;
};

export const getProjects = async (): Promise<Project[]> => {
    return (await getDatabase()).projects;
};

export const getExperiences = async (): Promise<Experience[]> => {
    return (await getDatabase()).experiences;
};

export const getExperienceById = async (id: number): Promise<Experience | undefined> => {
    const experiences = await getExperiences();
    return experiences.find(exp => exp.id === id);
};
