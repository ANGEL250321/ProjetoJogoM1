function cowboy(){
    var escolhaA = prompt ("Escolha opção 1 ou 2 para o próximo destino do Cowboy Espacial:\n 1 - Ele deve abandonar a nave em um pod o mais rápido possível.\n 2 - Ele deve tentar realizar pouso de emergência no deserto.");
    while(true){
       if (escolhaA == 1 ){
           alert ("O pod é ejetado enquanto a nave cai em queda livre. Chegando ao chão ele nota que as naves dos ladrões espaciais foram em direção à sua nave. Ele começa a caminhar nas dunas com o pouco equipamento que tem e avista um buraco enorme com várias árvores ao redor, indicando a existência de água e possivelmente do elemento RES(fica próximo a ambientes com H2O).  Ao se aproximar ele percebe que para descer pode ir por um caminho no qual ele não enxerga nada ou realizar um salto de fé para tentar cair no que parece ser um lago fundo.");
           var escolhaB = prompt ("Escolha opção 1 ou 2 para o próximo destino do Cowboy Espacial:\n 1 - Ele deve seguir o caminho escuro e tentar ir iluminando com sua lanterna de ombro.\n 2 - Ele deve realizar o salto de fé.");
       }
           if (escolhaB == 2){
              alert ("Ao realizar seu salto de fé, Cowboy Spacial se vê em um lago no qual ele não enxerga o fundo devido a escuridão, mas ele identifica um ponto brilhante abaixo dele. Ao seu redor, apenas uma estrutura de pedras em ruínas e árvores, sem indicação de muita margem para exploração.");
              var escolhaC = prompt ("Escolha opção 1 ou 2 para o próximo destino do Cowboy Espacial:\n 1 - Ele deve mergulhar e explorar o ponto brilhante no lago.\n 2 - Ele deve sair do lago e explorar as ruínas.");
           }
           if(escolhaC == 1){
           alert ("A missão é concluída com sucesso e com a ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser concluída a tempo! Foi uma ótima jornada!");
          
              break;
           
       }else if (escolhaA == 2){
           alert("Mesmo com a estrutura de sua nave comprometida o Cowboy Spacial consegue aterrisar, mas os ladrões, que vieram roubar componentes da sua nave, são muitos. Cowboy Spacial tenta se defender e combater eles, mas perde...");
           alert("Fim de Jogo!");
           break;
           }else if(escolhaB == 1){
                   alert(" Cowboy Spacial tenta seguir o caminho nas dunas escuras e encontra com uma criatura colossal e extremamente forte, sem suas armas que ficaram na nave, Cowboy Spacial e é atacado e morre.");
                   alert("Fim de Jogo!");
          break;
           }else if (escolhaC == 2){
               alert ("No momento em que sai do lago, Cowboy Spacial escuta um barulho estridente vindo de um dos cantos da ruína, mesmo assim ele decide explorar o que existe ao seu redor. Sem tempo de reação, Cowboy Spacial é arremessado por uma criatura em direção a parede de pedras e não sobrevive.");
               alert ("Fim de Jogo!");
           break;
           }else{
           alert("Entrada inválida.Escolha opção 1 ou 2 !");
        escolhaA = prompt("Escolha opção 1 ou 2 para o próximo destino do Cowboy Espacial:\n 1 - Ele deve abandonar a nave em um pod o mais rápido possível.\n 2 - Ele deve tentar realizar pouso de emergência no deserto.");
        escolhaB = prompt ("Escolha opção 1 ou 2 para o próximo destino do Cowboy Espacial:\n 1 - Ele deve seguir o caminho escuro e tentar ir iluminando com sua lanterna de ombro.\n 2 - Ele deve realizar o salto de fé.");
        escolhaC = prompt ("Escolha opção 1 ou 2 para o próximo destino do Cowboy Espacial:\n 1 - Ele deve mergulhar e explorar o ponto brilhante no lago.\n 2 - Ele deve sair do lago e explorar as ruínas.");
       }
       }
   }

   function voltar(){
    window.location= ("../index.html");
}