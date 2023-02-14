import React, {useState} from 'react';
import ProductPage from "../../components/ProductPage";

const PageUseCallback = () => {
    const [countPage, setCountPage] = useState(0);
    const [countPage2, setCountPage2] = useState(0);
    return (
        <div>
            <div>Use call back</div>
            <button onClick={() => setCountPage(countPage + 1)}>Count1</button>
            <button onClick={() => setCountPage2(countPage2 + 1)}>Count2</button>
            <ProductPage countProductPage={countPage} countProductPage2={countPage2} />
        </div>
    );
};

export default PageUseCallback;