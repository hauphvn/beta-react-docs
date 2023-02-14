import React, {memo} from 'react';

const ShippingForm = memo(function ShippingForm(props: any){
    const {onSubmit = () => null} = props;
    console.log("Render shipping form");
    const preSubmit = (event: any) => {
        event.preventDefault();
        onSubmit();
    }
    return (
        <div>
            <form onSubmit={preSubmit}>
                <label htmlFor="username">
                    <input type="text" id={"username"}/>
                </label>
                <input type="submit" value={"Submit"}/>
            </form>
        </div>
    );
})

export default ShippingForm;