export declare const getLocalisation: (str?: string) => {
    laltitude: number;
    longitude: number;
};
export declare class CimeteryDto {
    id?: number;
    localisation?: string;
    name?: string;
    email?: string;
    description?: string;
    address?: string;
    city?: string;
    country?: string;
    link?: string;
    phone?: string;
    laltitude?: number;
    longitude?: number;
    isActive?: boolean;
    photo?: string;
    confession?: string;
}
