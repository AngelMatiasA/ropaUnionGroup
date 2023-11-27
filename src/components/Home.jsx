import React from 'react'
import Card from 'react-bootstrap/Card';
import banner from './banner.png'
import Products from './Products';

const Home = () => {
    return (
        <div className='home-banner'>
            <Card className="bg-dark text-dark border-0">
                <Card.Img src={banner} alt="banner" />
                <Card.ImgOverlay>
                  <div className="container mt-5">
                  <Card.Title className='display-5 fw-bolder'>Ropa Union Group</Card.Title>
                    <Card.Text className='lead fs-1'>
                       Hoy se vende Todo!
                    </Card.Text>
                    <Card.Text className='lead fs-4'>Compra Antes Que Se Acabe!!</Card.Text>
                    <Card.Text className='lead fs-2'>Compra YA! <i className='fa fa-shopping-bag'></i></Card.Text>
                  </div>
                </Card.ImgOverlay>
            </Card>
            <Products/>
        </div>
    )
}

export default Home