import Styled from 'styled-components'

const HeaderContainer = Styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding: 0 5vw;
    box-sizing:border-box;
    border-bottom:1px solid #ddd;
    width: 100vw;
`

const Header =()=>{
    return(
            <HeaderContainer>
                {/* 로고 & 메뉴  */}
                <h1>홀가분</h1>
                
            </HeaderContainer>
            
    )
}

export default Home