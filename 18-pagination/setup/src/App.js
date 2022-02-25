import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
    const { loading, data } = useFetch();
    const [page, setPage] = useState(0);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        if (loading) return;
        setFollowers(data[page]);
    }, [loading, page]);

    const handlePage = (index) => {
        setPage(index);
        console.log(page);
    };

    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > data.length - 1) {
                nextPage = 0;
            }
            return nextPage;
        });
    };

    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 0) {
                prevPage = data.length - 1;
            }
            return prevPage;
        });
    };

    return (
        <main>
            <div className="section-title">
                <h1>{loading ? "loading..." : "pagination"}</h1>
                <div className="underline"></div>
            </div>
            <section className="followers">
                <div className="container">
                    {followers.map((follower) => {
                        return <Follower key={follower.id} {...follower} />;
                    })}
                </div>
                {!loading && (
                    <div className="btn-container">
                        <button onClick={prevPage} className="prev-btn">
                            prev
                        </button>
                        {data.map((item, index) => {
                            return (
                                <button
                                    className={`page-btn ${
                                        index === page ? "active-btn" : null
                                    }`}
                                    key={index}
                                    onClick={() => handlePage(index)}
                                >
                                    {index + 1}
                                </button>
                            );
                        })}
                        <button onClick={nextPage} className="prev-btn">
                            next
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default App;
