const Header = ({ wins, handleNewGame }) => {
    return <header className="header">
        <h3>Win {wins}</h3>
        <h1>MoMo Flip</h1>
        <button onClick={handleNewGame}>Reset</button>
    </header>
}

export default Header