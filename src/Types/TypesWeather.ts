

interface Iweather {
    data : IweatherProps
}

type IweatherProps = {
    location: IweatherLocation
    request: IweatherRequest
    current: IweatherCurrent
}

type IweatherLocation = {
    name : string,
    country : string,
    localtime : string,
    region : string
}

type IweatherRequest =  {
    type: string,
    query: string,
}

type IweatherCurrent = {
    observation_time: string,
    temperature : number,
    weather_icons : any[] | string | undefined
    weather_descriptions : any[]
    weather_code : number
}
export type {Iweather}