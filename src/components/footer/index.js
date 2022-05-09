import React from 'react'
import styled from 'styled-components'
class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #555;
            height: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 999999999;
            h1{
                text-align: center;
                color: gray;
                font-size: 10px;
            }
            .mark{
                position: relative;
                width: 100px;
                background: transparent;
                left: 50%;
                transform: translateX(-50%);
            }
            .cop{
              
                margin-top: 10px;
                margin-left: 10px;
                font-size: 10px;
              
            }
            .criado{
                text-align: center;
                width: 100%;
                background-color: #555;
                color: gray;
                font-size: 10px;
                text-decoration: none
            }
            .criado:hover{
                color: #00f9f9;
            }
            .descricao{
                position: absolute;
                display: flex;
                margin-top: 10px;
                left: 10px;
                color: gray;
            }
            .corretora{
                background: #e85a0c;
                display: flex;
                width: 100%;
            }
            @media (max-width:800px) {
                .position{
                    display: flex;
                    width: 100%;
                    align-items: flex-end;
                    justify-content: flex-end;
                }
                .mark{
                    margin-right: 20px;
                }
            }
            @media (max-width:500px) {
                h1{
                    font-size: 7px;
                }
                .criado{
                    font-size: 7px;
                }
                .mark{
                    display: none;
                }
                .descricao{
                    text-align: center;
                }
            }
        `

        return (
        <FooterMain>
                <a className='criado' href='https://webck.com.br/' target="_blank" >Copyright © 2022 - criado e desenvolvido por Webck Soluções - 21.453.885/0001-54</a>
        </FooterMain>
        )
    }
}
export default Footer