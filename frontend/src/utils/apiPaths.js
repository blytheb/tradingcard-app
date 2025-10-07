export const BASE_URL = 'http://localhost:8000';

//utils/apiPaths.js

export const API_PATHS = {
    AUTH: {
        LOGIN: "api/v1/auth/login",
        REGISTER: "api/v1/auth/register",
        GET_USER_INFO: "api/v1/auth/getUser",
    },

    PROFILE: {
        CREATE_PROFILE: "api/v1/profile/new",
        GET_ALL_PROFILES: "api/v1/profile/getAllProfiles",
        UPDATE_PROFILE: (id) => `api/v1/profile/${id}`,
        DELETE_PROFILE: (id) => `api/v1/profile/${id}`,   
    }
};