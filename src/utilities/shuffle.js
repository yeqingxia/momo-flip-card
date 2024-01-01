const shuffle = () => {
    const assets = [
        { image: '/assets/01.gif' },
        { image: '/assets/02.gif' },
        { image: '/assets/03.gif' },
        { image: '/assets/04.gif' },
        { image: '/assets/05.gif' },
        { image: '/assets/06.gif' },
        { image: '/assets/07.gif' },
        { image: '/assets/08.gif' },
    ]
    return [...assets, ...assets]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }))
}

export default shuffle