import React from 'react'
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
    <div className = 'home'>
        {/* <h1>Home Component</h1> */}
        <Banner/>
        <div className="home__section">
        <Card
                src="https://images.unsplash.com/photo-1636742807468-d1e0b20afae4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80"
                title="Mussorie"
                description="223 Kimoleters Away"
            />
            <Card
                src="https://images.unsplash.com/photo-1516406742981-2b7d67ec4ae8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="Manali"
                description="405 Kimoleters Away"
            />
            <Card
                src="https://images.unsplash.com/photo-1583127363818-094b1533a0f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                title="Kasuli"
                description="257 Kimoleters Away"
            />

        </div>
        <div className="home__section">
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-551866525267009891/original/a1c05192-f2b8-4dd6-a0af-580239fa1b23.jpeg?im_w=1200"
                title="White Jameson- Pvt Balcony + WiFi ( Workation )"
                description="Jameson wraps the green mountains in a veil, with mist singing of sweeter days. Experience Hills, Cedar, and Pines in all shades of green with balconies looking out to misty valleys that lay beneath."
                price="₹2,899/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-551863243757659501/original/2984c390-739e-4383-801c-0e0399f9ad79.jpeg?im_w=1200"
                title="Landour Paddy ( WiFi + Near Mall Road ) Workation"
                description="Paddy wraps the green mountains in a veil, with mist singing of sweeter days. Experience Hills, Cedar, and Pines in all shades of green with balconies looking out to misty valleys that lay beneath."
                price="₹2,428/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/ff5a04a3-a92a-4aae-9e5c-5afde644dcdf.jpg?im_w=1200"
                title="The Hawk’s Nest"
                description="You can have the whole Doon valley and the mountains view from this place. You can witness the best sunset view of Mussoorie from sitting in your drawing room. "
                price="₹3,999/night"
            />
        </div>
    </div>
  )

}

export default Home