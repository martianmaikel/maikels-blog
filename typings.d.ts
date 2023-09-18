type Base = {
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    _type: string;
}

interface Post extends Base {
    title: string;
    category: Category;
    slug: Slug;
    author: Author;
    mainImage: BlogImage;
    publishedAt: string;
    body: BlockContent[];
    description: string;
    excerpt: string;
}

interface Author extends Base {
    name: string;
    image: BlogImage;
    bio: BlockContent[];
}

interface Category extends Base {
    title: string;
    description: string;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Reference {
    _type: "reference";
    _ref: string;
}

interface BlogImage {
    _type: "image";
    asset: Reference;
    alt?: string;
}

interface BlockContent {
    _type: "blockContent";
    _key: string;
    children: Span[];
    markDefs: any[];
    style: "Normal" | "H1" | "H2" | "H3" | "H4" | "Quote";
}

interface Span {
    _type: "span";
    _key: string;
    marks: string[];
    text: string;
}

interface BlogImage {
    _type: "image";
    asset: Reference;
    alt: string;
}

interface Title {
    _type: "title";
    current: string;
}

interface Code {
    _type: "code";
    language: string;
    code: string;
    filename: string;
}

