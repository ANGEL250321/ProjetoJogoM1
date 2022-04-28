function layka(){
    var escolhaA = prompt ("Escolha opção 1 ou 2 para o próximo destino de Layka:\n 1 - Ela decide adentrar a estrutura subterrânea.\n 2 - Ela decide seguir sobrevoando o planeta em sua nave.");
    while(true){
       if (escolhaA == 1 ){
           alert (" Chegando na estrutura subterrânea, Layka identifica uma caverna que após caminhar por alguns minutos leva a uma bifurcação, na qual ela pode seguir por dois caminhos, o caminho da esquerda ou da direita.");
           var escolhaB = prompt ("Escolha opção 1 ou 2 para o próximo destino de Layka:\n 1 - Esquerda.\n 2 - Direita.");
       }
           if (escolhaB == 2){
              alert ("Após seguir pelo caminho da direita, Layka encontra uma torre enorme e de formato retangular construída a partir do gelo. Ela usa seus equipamentos para escalar até a entrada da torre e se depara com espaço contendo apenas uma mesa e um item sobre ela, o Golden Circle.");
              var escolhaC = prompt ("Escolha opção 1 ou 2 para o próximo destino de Layka:\n 1 - Ela deve agir rapidamente e avançar em direção a mesa para coletar o artefato.\n 2 - Ela inspeciona o ambiente antes de avançar em direção ao artefato.");
           }
           if(escolhaC == 2){
           alert ("A missão é concluída com sucesso e com a ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser concluída a tempo! Foi uma ótima jornada!");
          
              break;
           
       }else if (escolhaA == 2){
           alert("Layka é surpreendida por uma tempestade de gelo que congela toda a nave em poucos minutos. Ela tenta utilizar de seus recursos para se aquecer, mas em vão, e morre de hipotermia.");
           alert("Fim de Jogo!");
           break;
           }else if(escolhaB == 1){
                   alert("Ao seguir pelo caminho da esquerda, Layka segue caminhando e não encontra uma saída da caverna. Após diversas tentativas de voltar a bifurcação, ela falha e fica perdida, assim morrendo de hipotermia.");
                   alert("Fim de Jogo!");
          break;
           }else if (escolhaC == 1){
               alert (" Assim que Layka avança rapidamente através da sala, uma armadilha é ativada e várias facas afiadas são lançadas em direção a ela. Ela é atingida por diversas facas e não resiste ao sangramento causado pelos ferimentos.");
               alert ("Fim de Jogo!");
           break;
           }else{
           alert("Entrada inválida.Escolha opção 1 ou 2 !");
        escolhaA = prompt ("Escolha opção 1 ou 2 para o próximo destino de Layka:\n 1 - Ela decide adentrar a estrutura subterrânea.\n 2 - Ela decide seguir sobrevoando o planeta em sua nave.");
        escolhaB = prompt ("Escolha opção 1 ou 2 para o próximo destino de Layka:\n 1 - Esquerda.\n 2 - Direita.");
        escolhaC = prompt ("Escolha opção 1 ou 2 para o próximo destino de Layka:\n 1 - Ela deve agir rapidamente e avançar em direção a mesa para coletar o artefato.\n 2 - Ela inspeciona o ambiente antes de avançar em direção ao artefato.");
       }
       }
   }

   function voltar(){
    window.location= ("../index.html");
}