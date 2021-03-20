import jwtDecode from 'jwt-decode';

export const ENDPOINT = "http://apps.avantrio.xyz:8010"

export type UserObject = {
    id: number,
    name: string
}

type Logs = { id: number, date: string, alert_view: boolean, time: string, latitude: number, longtitude: number }

export type UserLogsObject = {
    user_id: number,
    user: string,
    logs: Logs[]
}

export const getAccessToken = (): string => {
    // let data = {
    //     username: "achala",
    //     password: "Test@1234"
    // }
    let TOKEN = ""
    let cookies = document.cookie.split(";")
    cookies.forEach((cookie) => {
        TOKEN = cookie.includes("dogfood") ? cookie.split("=")[1] : ""
    })
    return TOKEN
}


export const checkTokenValidity = (): boolean => {
    const token = getAccessToken();
    if (!token) return false;
    try {
        const { exp } = jwtDecode(token) as any
        if (Date.now() >= exp * 1000) return false;
        else return true;
    } catch (error) { return false }
}