import React, {useCallback} from 'react';
import ShippingForm from "./ShippingForm";

const ProductPage = (props: any) => {
    const {countProductPage, countProductPage2} = props;
    const handleSubmit = useCallback(() => {
        console.log("handle submit count 2");
    },[countProductPage2])
    return (
        <div>
            <div>Count product page: {countProductPage}</div>
            <ShippingForm onSubmit={handleSubmit}/>
        </div>
    );
};

export default ProductPage;