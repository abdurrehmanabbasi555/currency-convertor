import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency.toLowerCase()}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => setData(res[currency.toLowerCase()]))
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setData({});
            });
    }, [currency])

    return data;
}

export default useCurrencyInfo;