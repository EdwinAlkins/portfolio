export interface Article {
    id: number;
    title: string;
    slug: string;
}

export interface Project {
    id: number;
    title: string;
    technologies: string[];
}

export interface Database {
    articles: Article[];
    projects: Project[];
}
