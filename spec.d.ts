export interface AlbumHasArtworksModel {
    artwork_album_has_works?: {
        artworks?: ArtworkLiteModel;
    }[];
}
export interface AlbumLiteModel {
    id?: number;
    user_id?: number;
    name?: string;
    description?: string;
    is_public?: "0" | "1";
    created_at?: string;
    _count?: {
        artwork_album_has_works?: number;
    };
}
export interface AlbumModel {
    id?: number;
    user_id?: number;
    name?: string;
    description?: string;
    is_public?: "0" | "1";
    created_at?: string;
    _count?: {
        artwork_album_has_works?: number;
    };
    artwork_album_has_works?: {
        artworks?: ArtworkLiteModel;
    }[];
    users?: UserLiteModel;
}
export interface ArtworkAssetsModel {
    work_id?: number;
    name?: string;
    driver?: string;
    bucket?: string;
    b2_file_id?: string;
    filename?: string;
    file_order?: number;
}
export type ArtworkHasTagsModel = {
    artwork_tags?: {
        id?: number;
        tag?: string;
    };
}[];
export interface ArtworkLiteModel {
    id?: number;
    user_id?: number;
    is_explicit?: "0" | "1";
    scheduled_post?: string;
    users?: UserLiteModel;
    artwork_assets?: ArtworkAssetsModel[];
}
export interface ArtworkModel {
    id?: number;
    user_id?: number;
    is_explicit?: "0" | "1";
    scheduled_post?: string;
    users?: UserLiteModel;
    artwork_assets?: ArtworkAssetsModel[];
    title?: string;
    description?: string;
    created_at?: string;
    artwork_has_tags?: ArtworkHasTagsModel;
    artwork_views?: ArtworkViewsModel;
    _count?: {
        artwork_assets?: number;
        artwork_comments?: number;
        artwork_likes?: number;
        collection_has_artworks?: number;
    };
    liked?: boolean;
    saved?: boolean;
}
export type ArtworkViewsModel = {
    work_id?: number;
    date?: string;
    views?: number;
}[];
export interface CollectionHasArtworksModel {
    artworks?: ArtworkLiteModel;
}
export interface CollectionModel {
    id?: number;
    user_id?: number;
    type?: string;
    name?: string;
    description?: string;
    is_public?: number;
    is_editable?: number;
    created_at?: string;
    collection_has_artworks?: CollectionHasArtworksModel[];
    users?: UserLiteModel;
}
export interface CommentModel {
    id?: number;
    work_id?: number;
    user_id?: number;
    comment?: string;
    users?: UserLiteModel;
    artworks?: ArtworkLiteModel;
    _count?: {
        artwork_comment_has_likes?: number;
        artwork_comment_has_replies?: number;
    };
}
export interface PaginationModel {
    record_total?: number;
    total_page?: number;
    current_page?: number;
    per_page?: number;
    next_previous?: {
        next_page?: number;
        prev_page?: number;
        next_page_url?: string;
        prev_page_url?: string;
    };
    first_last?: {
        first_page?: number;
        last_page?: number;
        first_page_url?: string;
        last_page_url?: string;
    };
}
export interface ReplyModel {
    id?: number;
    comment_id?: number;
    user_id?: number;
    content?: string;
    created_at?: string;
    updated_at?: string;
}
export interface SuccessMessageModel {
    success?: boolean;
    message?: string;
}
export interface UserAllModel {
    id?: number;
    username?: string;
    pen_name?: string;
    name?: string;
    bio?: string;
    avatar?: string;
    avatar_server?: string;
    avatar_dir?: string;
    city_id?: number;
    gender?: "m" | "f";
    email_verified?: "0" | "1";
    cover?: string;
    cover_server?: string;
    cover_dir?: string;
    created_at?: string;
    user_socials?: UserSocialModel;
    user_settings?: UserSettingModel;
}
export interface UserLiteModel {
    id?: number;
    username?: string;
    pen_name?: string;
    name?: string;
    bio?: string;
    avatar?: string;
    avatar_server?: string;
    avatar_dir?: string;
}
export interface UserModel {
    id?: number;
    username?: string;
    pen_name?: string;
    name?: string;
    bio?: string;
    avatar?: string;
    avatar_server?: string;
    avatar_dir?: string;
    city_id?: number;
    gender?: "m" | "f";
    email_verified?: "0" | "1";
    cover?: string;
    cover_server?: string;
    cover_dir?: string;
    created_at?: string;
}
export interface UserSettingModel {
    user_id?: number;
    dark_mode?: number;
    language?: string;
    show_explicit?: number;
}
export interface UserSocialModel {
    user_id?: number;
    facebook?: string;
    instagram?: string;
    patreon?: string;
    twitter?: string;
    youtube?: string;
}
