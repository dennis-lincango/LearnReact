import {useEffect, useState} from 'react'
import {IArtistModel} from './IArtist'
import '../src/styles/WebPageStyles.scss'


const ExampleUseEffect = () => {
    const [data, setData] = useState<IArtistModel[]>([])
    useEffect(() => {
        const GetPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const json = await response.json() as IArtistModel[]
            if (response.ok) setData(json)
        }
        GetPost()
    }, [data])
    return (
        <div className='container-fluid'>
            <div className='d-flex justify-content-between'>
                <div className='text-center'>
                    <h2>Web Page</h2>
                </div>
                <div className='d-flex list-unstyled gap-2 text-center align-self-center'>
                        <li>Example UseEffect</li>
                        <li>Example UseEffect</li>
                        <li>Example UseEffect</li>
                </div>
                <div className='text-center'>
                    <h3>Example UseEffect</h3>
                </div>
            </div>

            <div className='row-cols-1 text-center'>
                <h3>Example UseEffect</h3>
                <p>pertinacia veniam sea mauris ludus prodesset penatibus interpretaris nobis sapien similique orci etiam consequat legere</p>
                <img src={''}/>
                <p>sed reque efficiantur nisi alia maluisset vim dictumst comprehensam bibendum</p>
            </div>

            <div className='row'>{
                data && data.map(post => <div className='col-lg-4 mb-3' key={post.id}>
                    <div className="card">
                    <div className="card-body">
                            <div>Post number: {post.id}</div>
                            <div className="card-title fs-4 fw-normal">{post.title.slice(0, 10)}</div>
                            <div>{post.body.slice(0, 20)}</div>
                        </div>
                    </div>
                </div>)
            }</div>
        </div>
    )
}
export default ExampleUseEffect;