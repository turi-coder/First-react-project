import React, { useState } from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true)

    return (
        <div> <h1>using &&</h1>
            {loading && <h2>Loading........</h2>}
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, illum?</h3>
        </div>
    )
}

export default Loading