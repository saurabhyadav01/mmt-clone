import styled from "styled-components";

export const IndFlight = styled.div`
display: flex;
justify-content: space-around;
text-align: center;
background-color: white;
margin-bottom: 10px;
& > img{
    width: 100px;
    margin:0px ;
    
}
& .lineHeight{
    line-height: 45px;
}
& button{
    height: 30px;
    background-color: #133efc;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px;
    line-height: 10px;
    margin-top: 30px;
}
`