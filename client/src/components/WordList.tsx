function WordList({ toneWords } : { toneWords : string[] }) {
    return <>
        <ul className="wordListContainer">
            { toneWords.map((word, index) => (
                <li key={index} className="wordItem">
                    {word}
                </li>
            )) }
        </ul>
    </>
}

export default WordList