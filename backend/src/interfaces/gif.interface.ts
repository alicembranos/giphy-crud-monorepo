import IUser from "./user.interface";

export interface IGif{
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    import_datetime: string;
    trending_datetime: string;
    image: string;
    analytics_response_payload: string;
    user: IUser
}