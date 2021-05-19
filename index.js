// Code your solution here

const findMatching = (drivers, name) => {
    return drivers.filter(d => {
        return d.toLowerCase() === name.toLowerCase()
})

}

const fuzzyMatch = (drivers, start) => {
    return drivers.filter(d => {
        return d.toLowerCase().startsWith(start.toLowerCase())
    })
}

const matchName = (drivers, name) => {
    return drivers.filter(d => {
        return d.name.toLowerCase() === name.toLowerCase()
})

}