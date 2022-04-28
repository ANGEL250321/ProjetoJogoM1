
function anakan(){
     var escolhaA = prompt ("Escolha opção 1 ou 2 para o próximo destino de Anakan:\n 1: Ele deve escolher abandonar a nave em um pod \n 2: Ele deve tentar realizar um pouso de emergência")
     while(true){
        if (escolhaA == 2 ){
            alert ("Anakan conseguiu com muito esforço pousar a nave em um lago raso. Ele sai da nave com seus equipamentos enquanto o estabilizador elétrico volta ao normal. Para sua sorte, não muito distante há um depósito de VAR brilhando em vermelho sangue. Na esperança de acabar logo sua missão para não ter maiores problemas com a tempestade elétrica que se aproxima, Anakan se vê em um impasse, agir com cautela ou agir com rapidez.");
            var escolhaB = prompt ("Escolha opção 1 ou 2 para o próximo destino de Anakan:\n 1 - Ele deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote. \n 2 - Ele deve agir com rapidez e tenta coletar o minério antes que a tempestade chegue.");
        }
            if (escolhaB == 1){
               alert ("Anakan analisa o minério e percebe sua instabilidade e a necessidade de usar um coletor de minério especial, além de agir com mais cautela para coletar e guardar o material. Ele consegue coletar com sucesso e guardar em um pote, em compensação a tempestade ruge do seu lado, a nave está um pouco distante mas há uma caverna próxima.");
               var escolhaC = prompt ("Escolha a opção 1 ou 2 para o próximo destino de Anakan:\n 1 - Ele deve correr o mais rápido que puder em direção a nave, mesmo que de encontro à tempestade e ir embora logo do planeta.\n 2 - Ele deve tentar se proteger da tempestade na caverna e aguardar até que a tempestade passe.");
            }
            if(escolhaC == 1){
            alert ("A missão é concluída com sucesso e com a ajuda dos outros exploradores espaciais a construção do estabilizador de núcleo consegue ser concluída a tempo! Foi uma ótima jornada!");
           
               break;
            
        }else if (escolhaA == 1){
            alert("A nave foi totalmente destruída depois que Anakan à abandonou, ele sobreviveu por muitos anos no planeta mas sem acesso a qualquer uma das suas ferramentas ele nunca conseguiu sair.");
            alert("Fim de Jogo!");
            break;
            }else if(escolhaB== 2){
                    alert("Devido a velocidade com que coletar o minério e por causa do seu nervosismo, suas mãos trêmulas derrubam o VAR que por estar instável explode, acabando com a jornada como explorador espacial no Anakan.");
                    alert("Fim de Jogo!");
           break;
            }else if (escolhaC == 2){
                alert ("Logo após entrar na caverna muito pouco tempo se passa até a tempestade chegar no local onde ele se encontra, raios atingem a entrada da caverna, derrubando toda a sua estrutura e enterrando Anakan.");
                alert ("Fim de Jogo!");
            break;
            }else{
            alert("Entrada inválida.Escolha opção 1 ou 2 !");
         escolhaA = prompt ("Escolha opção 1 ou 2 para o próximo destino de Anakan:\n 1: Ele deve escolher abandonar a nave em um pod\n 2: Ele deve tentar realizar um pouso de emergência")
         escolhaB = prompt ("Escolha opção 1 ou 2 para o próximo destino de Anakan:\n 1 - Ele deve usar seus equipamentos para analisar o minério antes de o minerar e guardar no pote. \n 2 - Ele deve agir com rapidez e tenta coletar o minério antes que a tempestade chegue.");
         escolhaC = prompt ("Escolha a opção 1 ou 2 para o próximo destino de Anakan:\n 1 - Ele deve correr o mais rápido que puder em direção a nave, mesmo que de encontro à tempestade e ir embora logo do planeta.\n 2 - Ele deve tentar se proteger da tempestade na caverna e aguardar até que a tempestade passe.");
        }
        }
        }
    
      function voltar(){
          window.location= ("../index.html");
      }

    
   