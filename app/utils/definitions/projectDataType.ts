export type ProjectDataType = {
    title: string;
    shortDescription: string;
    description: string;
    logo: string;
    skills: string[];
    image?: string;
    challenges?: [];
    company: string;
    years: number[];
    prevLink: string;
    nextLink: string;
};

export type skillDataType = {
    name: string;
    logoUrl: string;
};
