export function appLoad(name: string): Promise<AppLoadResponseType> {
    if(process.env.REACT_APP_MOCK_DATA) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    name: name,
                    balance: 1000,
                    users: [
                        {
                            name: 'CPU 1',
                            multiplier: (Math.random() * 10).toFixed(2),
                            point: (Math.random() * 900 + 10).toFixed(0)
                        },
                        {
                            name: 'CPU 2',
                            multiplier: (Math.random() * 10).toFixed(2),
                            point: (Math.random() * 900 + 10).toFixed(0)
                        },
                        {
                            name: 'CPU 3',
                            multiplier: (Math.random() * 10).toFixed(2),
                            point: (Math.random() * 900 + 10).toFixed(0)
                        },
                        {
                            name: 'CPU 4',
                            multiplier: (Math.random() * 10).toFixed(2),
                            point: (Math.random() * 900 + 10).toFixed(0)
                        }
                    ],
                    chats: [{ sender: 'CPU 1', message: 'hi guys' }, { sender: 'CPU 2', message: 'Hiiiiiiii men' },  { sender: 'CPU 3', message: 'I could play this game for hours!' }]
                })
            }, 500)
        }) 
    }
    return fetch(`/api/app-load?name=${name}`).then(res => res.json())
}
export function updateBalance(name: string, balance: string): Promise<string> {
    return fetch(`/api/update-balance?name=${name}&balance=${balance}`).then(res => res.text())
}