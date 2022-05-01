class APIRoutes {
    static search(value: string){
        return `/todos?search=${value}`
    }
}

export default APIRoutes;