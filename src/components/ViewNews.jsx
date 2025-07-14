import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios'

const ViewNews = () => {
    const [newsData, changeNewsData] = useState(
        { "status": "ok", "totalResults": 34, "articles": [] }
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {
                changeNewsData(response.data)
            }
        )
            .catch()
    }
    useEffect(
        () => {
            fetchData()
        }, [])

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                        <div className="row g-4 px-2 py-3">
                            {
                                newsData.articles.map(
                                    (value, index) => {
                                        return (
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                <div class="card">
                                                    <img src={value.urlToImage} class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.title}</h5>
                                                        <p class="card-text">{value.description}</p>
                                                    </div>
                                                    <div class="card-body">
                                                        <a href={value.url} class="card-link"target='_blank'>Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }

                        </div>

                </div>
            </div>
        </div>
    )
}

export default ViewNews