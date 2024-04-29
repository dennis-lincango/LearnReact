import {useState, useCallback} from 'react';

interface ListItem {
    id: number;
    text: string;
}

const Lista = () => {
    const [items] = useState<ListItem[]>([
        {id: 1, text: 'Item 1'},
        {id: 2, text: 'Item 2'},
        {id: 3, text: 'Item 3'}
    ]);

    // Definimos una función de manejo de clics utilizando useCallback
    const handleClick = useCallback((id: number) => {
        console.log(`Se hizo clic en el elemento con ID ${id}`);
    }, []);

    return (
        <div>
            <h2>Lista de elementos </h2>
            <ul>
                {items.map(item => (
                    <li key={item.id} onClick={() => handleClick(item.id)}>
                        {item.text}
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default Lista;
