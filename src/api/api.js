import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "77376ca6-8140-4501-a63e-0618cf645ecb"
    }
})



export const usersAPI = {
    getUsers (currentPage=1, pageSize=10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow (userID) {
        return instance.post(`follow/${userID}`)
    },
    unfollow (userID) {
        return  instance.delete(`follow/${userID}`)
    },
    getProfile (userID) {
        return instance.get(`profile/`+ userID);
    }
}

export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    }
}


// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => {
//             return response.data;
//     })
// }
