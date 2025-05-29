const AppRoute = {
    Main: '/',
    Login: '/login',
    Favorites: '/favourites',
    Offer: '/offer/:id',
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}
const Setting = {
    rentOffersCount: 312,
}

export {AppRoute, AuthorizationStatus, Setting};
