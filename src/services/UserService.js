export async function getAllUsers() {
    try {
        const response = await fetch ('/api/users/')
        return await response.json()
        [{},{},{}]
    } catch(error) {
        return [];
    }
}

export async function getUserByEmail(email) {
    try {
        const response = await fetch ('/api/users/', {method:"POST",body:{email:"brenno@mail.com"}})
        return await response.json()
    } catch(error) {
        return [];
    }
}