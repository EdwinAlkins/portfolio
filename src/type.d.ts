export interface Article {
    id: number;
    title: string;
    slug: string;
}

export interface ProjectLinks {
    github?: string;
    demo?: string;
    documentation?: string;
}

export interface Project {
    id: number;
    title: string;
    slug: string;
    shortDescription: string;
    longDescription: string;
    capsuleImage: string;
    images: string[];
    technologies: string[];
    tags: string[];
    category: string;
    releaseDate: string;
    status: string;
    links?: ProjectLinks;
}

export interface Database {
    articles: Article[];
    projects: Project[];
}
