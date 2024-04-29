import {useState, useMemo} from 'react';

const ComponenteCalculo = () => {
    // Estado para almacenar el número introducido por el usuario
    const [inputNumero, setInputNumero] = useState<number>(0);

    // Función costosa que duplica el número
    const calcularDoble = (num: number) => {
        console.log(`Calculando doble: 
        Input: ${inputNumero}, Resultado: ${num *2}`);
        return num * 2;
    };

    // Memorizar el resultado del cálculo utilizando useMemo
    const resultadoDoble = useMemo(() => calcularDoble(inputNumero), [inputNumero]);

    return (
        <div>
            <input
                type="number"
                onChange={(e) => setInputNumero(Number(e.target.value))}
            />
            <p>El doble del número es: {resultadoDoble}</p>
        </div>
    );
};

export default ComponenteCalculo;
