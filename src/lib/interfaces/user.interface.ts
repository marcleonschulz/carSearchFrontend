export interface Token {
    refresh?: string;
    access?: string;
}
export interface User {
    id?: string;
    email?: string;
    username?: string;
    password?: string;
    tokens?: Token;
    full_name?: string;
    is_staff?: boolean;
}

export interface UserResponse {
    user?: User;
}