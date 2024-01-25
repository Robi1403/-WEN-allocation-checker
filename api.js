function check(){

    let userAddress = document.getElementById("input").value;
    
    fetch(`https://worker.jup.ag/jup-claim-proof/WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk/${userAddress}`)
    .then(res =>{
        return res.json();
    })
    .then(data =>{
        const amount = data.amount
        const formattedNumber = amount.toString().replace(/(\.0+|(?<=\d)0+)$/, '');
        const setData =`
        <p>Allocation: <span> ${formattedNumber} </span></p>`
        document.querySelector('.result').innerHTML = setData;
    })
    .catch(error => {
        const setData =`
        <p>Allocation: <span> NO ALLOCATION FOUND </span></p>`
        document.querySelector('.result').innerHTML = setData;
    })

}



