interface ServerInformation<TCategory = {}> {
    Url: string,
    Code: string,
    Name: string,
    Category: TCategory
}

export default ServerInformation;