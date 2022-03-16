
export const searchFilterChange = text => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = status => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = priotity => {
    return {
        type: 'filters/priorityFilterChange',
        payload: priotity
    }
}

