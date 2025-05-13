export const fetchRuns = async () => {
    const response = await fetch('http://localhost:8080/api/runs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
    }
    return await response.json();
};
