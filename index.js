import styled from 'styled-components'
 export const Container = styled.div`
 display: grid;
justify-content: center;
align-content: center;
width: 400px;
margin: 40px auto;
grid-template-columns: repeat(4, 100px);
grid-template-row: repeat(4, 100px);
box-shadow: 2px 2px 10px #333;
border-radius: 10px;
 ` 
 export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color : rgba(60, 64, 67, 0.75);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 10px;
  word-wrap: brake-word;
  word-brake: brake-all;
  text-align : right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
 `
 export const Previous = styled.div`
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.5rem
 
 `
 export const Current = styled.div`
    color: white;
    font-size: 2.5rem
 
      
 
 `

 export const Btn = styled.div`
 cursor : pointer;
 font-size : 2rem;
 border : 1px outset white;
 outline : none;
 background-color : rgba(255, 255, 255, 0.75);

 &:hover { background-color : rgba(255, 255, 255, 3);}

   ${function({gridSpan}){
      if(gridSpan){
         return `grid-column : span ${gridSpan}`
      }
   }

    


}
${({operation}) => operation && ` background-color  : gray`}
${({control}) => control && ` background-color  : blue;

   color : white;
`}


 `