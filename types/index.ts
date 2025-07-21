export interface PoolsType {
    id: string;
    categoryId: string;
    image: string;
    price: number;
    quantity: number;
    size: string;
    depth: number;
    frame_en: string;
    frame_uz: string;
    frame_ru: string;
    discountedPrice: number;
    createdAt: string;
    Category: CategoryType;
}

export interface CategoryType {
    id: string;
    name_en: string;
    name_uz: string;
    name_ru: string;
    createdAt: string;
}

export interface MetaType {
    total: number;
    page: number;
    lastPage: number;
}
