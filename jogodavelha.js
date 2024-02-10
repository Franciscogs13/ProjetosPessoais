let tabuleiro=['','','','','','','','','']
let player1='X'
const SequenciasVencedoras=[
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]

    function reset(){
        tabuleiro=['','','','','','','','','']
        player1="X"
        const cell=document.querySelectorAll(".cell")
        for(let i=0;i<cell.length;i++){
            cell[i].innerText=''
        }
    }
   
    function jogada(index){
        if(tabuleiro[index]===''&& !verificarVencedor()){
            tabuleiro[index]=player1
            document.querySelectorAll(".cell")
            [index].innerText= player1
            player1= player1=="X"? "O": "X"
          if (verificarVencedor()){
            reset()
          }
        }
    }
    
    function verificarVencedor(){
        for(let i=0;i<SequenciasVencedoras.length;i++){
            const [a,b,c]=SequenciasVencedoras[i]
            if(tabuleiro[a]&&tabuleiro[a]===tabuleiro[b]&& tabuleiro[a]===tabuleiro[c]){
                alert (`O jogador ${tabuleiro[a]} venceu!`)
                reset()
                return true
            }
        }
        if(!tabuleiro.includes('')){
            alert('Deu velha')
            reset()
            return true
        }
        return false
    }