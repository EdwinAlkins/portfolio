export interface Article {
    id: number;
    title: string;
    url: string;
    description?: string;
}

export interface Experience {
    id: number;
    title: string;
    company: string;
    companyUrl: string;
    startDate: string;
    endDate: string;
    description: string;
    technologies: string;
}

export interface ProjectLinks {
    github?: string | string[];
    demo?: string | string[];
    documentation?: string | string[];
    // Any other link type (e.g. "marketplace") is rendered generically, without an icon.
    [key: string]: string | string[] | undefined;
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
    experienceId?: number;
}

export interface Database {
    articles: Article[];
    projects: Project[];
    experiences: Experience[];
}
