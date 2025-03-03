export const mapStatusToColor = (status) => {
    switch (status) {
        case "completed":
            return '#8CC04F'
        case "running":
            return '#5190D9'
        case "failed":
            return '#D54D53'
        default:
            return '#FFFFFF'
    }
}