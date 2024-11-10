import { Database, Article, Project } from '../type';

const dbPath = '/db.json'

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
