const fetchUser = async () => {
     // try catch
    const data = await fetch("https://randomuser.me/api", {method: "GET"});
    const jsonData = await data.json();
    return jsonData.results;
};

export const createUser = async (url: string, user: {username: string, password: string, email: string}) => {
    const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    return await fetch(url, config)
}

export default fetchUser