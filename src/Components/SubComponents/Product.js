import React, { useState } from 'react';
import {ProductContainer, ProductPrice, ProductInfo,
        ProductRating, AddtoBasket, ProductTitle, ProductGrade, 
    ProductQuantity, ProductLocation, BidDiv} from '../../Styles/ProductStyle';
// import {toast, ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Rating from '@material-ui/lab/Rating';
import store from '../../Redux/store';
// import styled from 'styled-components';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// const Notification = ({ closeToast, toastProps, title, quantity})=>{
//     return (
//         <NotificationDiv>
//             <div>
//                 <ShoppingCartIcon />
//             </div>
//             <div>
//                 <strong>
//                     <span>Item:</span>
//                      {title}
//                 </strong>
//                 <strong>
//                     <span>Quantity:</span>
//                     {quantity}
//                 </strong>
//             </div>
//         </NotificationDiv>
//     )
// }

// toast.configure();

function Product({id,title,image,price,rating,quantity,city,grade}) {

    const [amount, setAmount] = useState('');
    const [location, setLocation] = useState('');
    // const toastId = useRef(null);

    const addToBasket =()=>{
        // add a dispatch here
        store.dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                quantity: quantity,
                city: city,
                grade: grade,
                bid: amount,
                location: location
            },
        });
        // const notify = () => toastId.current= toast(<Notification title={title} quantity={quantity}/>,{
        //     closeOnClick: true,
        //     position: "bottom-right",
        // });
        // notify();
        // toast(<Notification title={title} quantity={quantity}/>,{
        //     closeOnClick: false,
        //     position: "bottom-right",
        // });
        setAmount('');
        setLocation('');
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        addToBasket();
    }
    return (
        <ProductContainer>
            <ProductTitle 
            style={{ backgroundImage: `url(${image})` }}
            >
                <p>
                {title}
                </p>
            </ProductTitle>
            <ProductInfo>
                <ProductGrade>
                    Grade: {grade}
                </ProductGrade>
                <ProductQuantity>
                    Quantity: {quantity} KG
                </ProductQuantity>
                <ProductPrice>
                    <small>₹</small>
                    <strong>{price}</strong>
                </ProductPrice>
                <ProductRating>
                    {/* {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p> 
                    ))} */}
                    <Rating name="read-only" value={rating} readOnly />
                </ProductRating>
                <ProductLocation>
                <strong>City: {city} </strong>
                </ProductLocation>
                <BidDiv>
                    <form
                    onSubmit={handleSubmit}
                     >
                        <label for="Amount">Amount:</label>
                        <input type="number" name="Amount" required placeholder="₹" 
                        // ref={register} 
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        />
                        <label for="Location">Location: </label>
                        <input type="text" name="Location" required placeholder="Delhi" 
                        // ref={register} 
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        />
                        <AddtoBasket 
                            type="submit"
                            >
                        Bid
                        </AddtoBasket>
                    </form>
                </BidDiv>
            </ProductInfo>
            {/* <ToastContainer /> */}
            {/* <ImageContainer>
                <ProductImage src={image} alt="Wheat" />
            </ImageContainer> */}
        </ProductContainer>
    )
}

export default Product;

// const NotificationDiv = styled.div`
//     display: flex;
//     background-color: #fc6f03;
//     min-width: 15vw;
//     width: fit-content;
//     /* align-items: center;
//     justify-content: center; */
//     color: black;
//     padding: 1vh;
//     >div:first-of-type{
//         align-items: center;
//         justify-content: center;
//         color: white;
//         margin: 1vw;
//         > .MuiSvgIcon-root{
//             width: 2vw;
//         }
//     }
//     >div{
//         color: #ffe8d6;
//         display: flex;
//         flex-direction: column;
//         >strong{
//             >span{
//                 color: black;
//                 margin-right: 0.5vw;
//             }
//         }
//     }
//     :hover{
//         background-color: white;
//         >div{
//             color: #fc6f03;
//         }
//     }
// `;